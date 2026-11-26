# Meta (Facebook/Instagram) ad image (Ava Martinez + Chloe Vance), 2026-11-23.
# Owner's real job photo on top, navy band with logo, headline and subline below. Brand fonts/colors as the GBP images.
# Usage: python3 scripts/meta-ad-image.py <photo> "Headline | line two" "Subline" <out.jpg> [feed|story]
#   feed  = 1080x1350 (4:5, Facebook/Instagram feed)   story = 1080x1920 (9:16, Stories/Reels)
# Rules: no prices, offers or claims the owner hasn't confirmed; the phone goes in the ad's Call button, not the image.
import sys, math
from PIL import Image, ImageDraw, ImageFont
photo, head, sub, out = sys.argv[1:5]
fmt = sys.argv[5] if len(sys.argv) > 5 else 'feed'
W, H = (1080, 1350) if fmt == 'feed' else (1080, 1920)
NAVY=(14,38,72); CORAL=(255,90,80); WHITE=(255,255,255); SKY=(125,211,252); RED=(215,38,30); MUTED=(201,216,232)
J8=lambda s: ImageFont.truetype('scripts/fonts/jakarta-800.ttf', s)
J6=lambda s: ImageFont.truetype('scripts/fonts/jakarta-600.ttf', s)
band_h = 560 if fmt == 'feed' else 820
K = 1.0 if fmt == 'feed' else 1.3  # type scale for stories
ph = H - band_h + 60  # photo overlaps the band slightly under the gradient

def cover_crop(img, w, h, fy=0.45):
    r = max(w/img.width, h/img.height); img = img.resize((round(img.width*r), round(img.height*r)), Image.LANCZOS)
    x = (img.width-w)//2; y = int((img.height-h)*fy); return img.crop((x, y, x+w, y+h))

base = Image.new('RGBA', (W, H), (*NAVY, 255))
base.alpha_composite(cover_crop(Image.open(photo).convert('RGB'), W, ph).convert('RGBA'), (0, 0))
# soft fade from photo into the navy band
fade = Image.new('RGBA', (W, 220)); fp = fade.load()
for y in range(220):
    a = int(255 * (y/219) ** 1.4)
    for x in range(W): fp[x, y] = (*NAVY, a)
base.alpha_composite(fade, (0, ph-220))
d = ImageDraw.Draw(base)

def star(cx, cy, r, color):
    pts = []
    for i in range(12):
        rr = r if i % 2 == 0 else r*0.45; a = math.pi/6*i - math.pi/2
        pts.append((cx+rr*math.cos(a), cy+rr*math.sin(a)))
    d.polygon(pts, fill=color)

X = 64; Y = H - band_h + 40
L = int(92*K)
logo = Image.open('public/logo.png').convert('RGBA').resize((L, L), Image.LANCZOS)
disc = Image.new('RGBA', (L+12, L+12), (0, 0, 0, 0)); ImageDraw.Draw(disc).ellipse((0, 0, L+11, L+11), fill=WHITE)
base.alpha_composite(disc, (X-6, Y-6)); base.alpha_composite(logo, (X, Y))
tx = X + L + 24; f = J8(int(38*K))
d.text((tx, Y+int(10*K)), 'CHICAGO AIRCARE ', font=f, fill=WHITE)
d.text((tx + d.textlength('CHICAGO AIRCARE ', font=f), Y+int(10*K)), 'PRO', font=f, fill=CORAL)
fs = int(21*K); ty = Y + int(60*K)
star(tx+fs*0.45, ty+fs*0.62, fs*0.42, RED)
d.text((tx+fs*1.1, ty), 'HVAC SOLUTIONS', font=J6(fs), fill=SKY)

maxw = W - 2*X
def wrap(text, font):
    if '|' in text: return [t.strip() for t in text.split('|')]
    words = text.split(); lines = []; cur = ''
    for w in words:
        t = (cur+' '+w).strip()
        if d.textlength(t, font=font) <= maxw: cur = t
        else: lines.append(cur); cur = w
    lines.append(cur); return lines
size = 78 if fmt == 'feed' else 100
while True:
    f = J8(size); lines = wrap(head, f)
    if all(d.textlength(l, font=f) <= maxw for l in lines) or size <= 44: break
    size -= 2
y = Y + L + 44
for ln in lines: d.text((X, y), ln, font=f, fill=WHITE); y += int(size*1.1)
if sub:
    sf = J6(34 if fmt == 'feed' else 44)
    for ln in wrap(sub, sf): d.text((X, y+14), ln, font=sf, fill=MUTED); y += int(sf.size*1.3)
# license line (verifiable fact)
lf = J6(int(26*K)); ly = max(y + 40, H - int(70*K))
if ly + lf.size > H - 20: raise SystemExit('text too long for ' + fmt + ': shorten headline or subline')
d.text((X, ly), 'City of Chicago License #3065598 · NATE-certified', font=lf, fill=SKY)
base.convert('RGB').save(out, quality=90)
print(out, W, H)
