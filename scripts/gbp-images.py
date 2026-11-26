# Renders the GBP cover + weekly post image (Chloe Vance). Usage: python3 scripts/gbp-images.py <font_dir> <photo_dir> marketing/gbp
import sys
from PIL import Image, ImageOps, ImageDraw, ImageFont, ImageFilter
S, U, OUT = sys.argv[1], sys.argv[2], sys.argv[3]
NAVY=(14,38,72); CORAL=(255,90,80); WHITE=(255,255,255); SKY=(125,211,252); RED=(215,38,30)
J8=lambda s: ImageFont.truetype(f'{S}/jakarta-800.ttf', s)
J6=lambda s: ImageFont.truetype(f'{S}/jakarta-600.ttf', s)
IN=lambda s: ImageFont.truetype('/usr/share/fonts/opentype/inter/Inter-SemiBold.otf', s)
logo=Image.open('public/logo.png').convert('RGBA')

def cover_crop(img, w, h, fy=0.5):
    img=ImageOps.exif_transpose(img).convert('RGB')
    r=max(w/img.width, h/img.height); img=img.resize((round(img.width*r), round(img.height*r)), Image.LANCZOS)
    x=(img.width-w)//2; y=int((img.height-h)*fy); return img.crop((x,y,x+w,y+h))

def gradient(w,h,stops):  # horizontal alpha gradient of navy
    g=Image.new('RGBA',(w,h)); px=g.load()
    for x in range(w):
        t=x/w; a=0
        for (t0,a0),(t1,a1) in zip(stops,stops[1:]):
            if t0<=t<=t1: a=a0+(a1-a0)*(t-t0)/(t1-t0)
        for y in range(h): px[x,y]=(*NAVY,int(a))
    return g

def star(d, cx, cy, r, color):
    import math
    pts=[]
    for i in range(12):
        rr=r if i%2==0 else r*0.45
        a=math.pi/6*i - math.pi/2
        pts.append((cx+rr*math.cos(a), cy+rr*math.sin(a)))
    d.polygon(pts, fill=color)

def wordmark(base, x, y, size, logo_size):
    d=ImageDraw.Draw(base)
    lg=logo.resize((logo_size,logo_size), Image.LANCZOS)
    # white disc behind logo for contrast
    disc=Image.new('RGBA',(logo_size+16,logo_size+16),(0,0,0,0)); ImageDraw.Draw(disc).ellipse((0,0,logo_size+15,logo_size+15),fill=WHITE)
    base.alpha_composite(disc,(x-8,y-8)); base.alpha_composite(lg,(x,y))
    tx=x+logo_size+int(size*0.6)
    f=J8(size); d.text((tx, y+logo_size*0.12), 'CHICAGO AIRCARE', font=f, fill=WHITE)
    w=d.textlength('CHICAGO AIRCARE ', font=f); d.text((tx+w, y+logo_size*0.12), 'PRO', font=f, fill=CORAL)
    ty=y+logo_size*0.12+size*1.18; fs=int(size*0.5)
    star(d, tx+fs*0.45, ty+fs*0.62, fs*0.42, RED)
    d.text((tx+fs*1.1, ty), 'HVAC SOLUTIONS', font=J6(fs), fill=SKY)
    w2=d.textlength('HVAC SOLUTIONS', font=J6(fs)); star(d, tx+fs*1.1+w2+fs*0.65, ty+fs*0.62, fs*0.42, RED)

# 1) COVER 2048x1152 (16:9). Key content inside the centre 4:3 safe zone (x 256..1792).
W,H=2048,1152
img=cover_crop(Image.open(f'{U}/a8160b35-image.jpg'), W, H, fy=0.30).convert('RGBA')
img.alpha_composite(gradient(W,H,[(0,235),(0.42,200),(0.68,40),(1,0)]))
wordmark(img, 300, 360, 78, 190)
d=ImageDraw.Draw(img)
d.text((300, 640), 'Furnace · Boiler · AC · Mini-splits', font=J6(56), fill=WHITE)
d.text((300, 722), 'Chicago & suburbs · 24/7, nights and holidays', font=IN(42), fill=(201,216,232))
lic='City of Chicago License #3065598'; lw=d.textlength(lic, font=IN(32))
d.rounded_rectangle((300,812,300+lw+64,812+78), radius=39, fill=WHITE)
d.text((332, 829), lic, font=IN(32), fill=NAVY)
img.convert('RGB').save(f'{OUT}/gbp-cover-2048x1152.jpg', quality=90, optimize=True)

# 2) WEEKLY POST IMAGE 1200x900 (4:3), same every week. No phone number in the image (Google can reject posts with phone numbers; the post's "Call now" button carries it).
W,H=1200,900
base=Image.new('RGBA',(W,H),(*NAVY,255))
photo=cover_crop(Image.open(f'{U}/884a8cb5-image.jpg'), W, 560, fy=0.35).convert('RGBA')
base.alpha_composite(photo,(0,0))
fade=Image.new('RGBA',(W,560)); px=fade.load()
for y in range(560):
    a=int(max(0,(y-300))/260*255)
    for x in range(W): px[x,y]=(*NAVY,a)
base.alpha_composite(fade,(0,0))
wordmark(base, 70, 560, 50, 120)
d=ImageDraw.Draw(base)
d.text((70, 725), 'Furnace · Boiler · AC · Mini-splits', font=J6(40), fill=WHITE)
d.text((70, 790), 'aircareprohvac.com', font=IN(34), fill=SKY)
bt='Call or text 24/7'; bw=d.textlength(bt, font=J6(30))
d.rounded_rectangle((W-70-bw-56, 782, W-70, 840), radius=29, fill=(196,60,47))
d.text((W-70-bw-28, 793), bt, font=J6(30), fill=WHITE)
base.convert('RGB').save(f'{OUT}/gbp-weekly-post-1200x900.jpg', quality=90, optimize=True)
print('done')
