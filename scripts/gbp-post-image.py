# Weekly GBP post image (Chloe Vance). Same photo + layout every week; only the headline changes.
# Usage: python3 scripts/gbp-post-image.py "Headline | second line" "Optional subline" marketing/gbp/posts/YYYY-MM-DD.jpg
# Rules: no phone numbers, prices or offers on the image (Google may reject the post).
import sys, math
from PIL import Image, ImageOps, ImageDraw, ImageFont
head, sub, out = sys.argv[1], (sys.argv[2] if len(sys.argv) > 2 else ''), sys.argv[3] if len(sys.argv) > 3 else 'post.jpg'
NAVY=(14,38,72); CORAL=(255,90,80); WHITE=(255,255,255); SKY=(125,211,252); RED=(215,38,30); MUTED=(201,216,232)
J8=lambda s: ImageFont.truetype('scripts/fonts/jakarta-800.ttf', s)
J6=lambda s: ImageFont.truetype('scripts/fonts/jakarta-600.ttf', s)
W,H=1200,900; PH=430
def cover_crop(img,w,h,fy=0.35):
    r=max(w/img.width,h/img.height); img=img.resize((round(img.width*r),round(img.height*r)),Image.LANCZOS)
    x=(img.width-w)//2; y=int((img.height-h)*fy); return img.crop((x,y,x+w,y+h))
base=Image.new('RGBA',(W,H),(*NAVY,255))
photo=cover_crop(Image.open('marketing/gbp/post-template-photo.jpg').convert('RGB'),W,PH).convert('RGBA')
base.alpha_composite(photo,(0,0))
fade=Image.new('RGBA',(W,PH)); px=fade.load()
for y in range(PH):
    a=int(max(0,y-PH*0.55)/(PH*0.45)*255)
    for x in range(W): px[x,y]=(*NAVY,a)
base.alpha_composite(fade,(0,0))
d=ImageDraw.Draw(base)
# headline: wrap to max 3 lines, shrink to fit
def wrap(text,font,maxw):
    if '|' in text: return [t.strip() for t in text.split('|')]  # explicit line breaks
    words=text.split(); lines=[]; cur=''
    for w in words:
        t=(cur+' '+w).strip()
        if d.textlength(t,font=font)<=maxw: cur=t
        else: lines.append(cur); cur=w
    lines.append(cur); return lines
size=74
while True:
    f=J8(size); lines=wrap(head,f,W-140)
    if len(lines)<=3 or size<=44: break
    size-=4
fy=H-120
block=len(lines)*int(size*1.12)+(70 if sub else 0)
y=PH-30+max(0,((fy-30)-(PH-30)-block)//2)
for ln in lines:
    d.text((70,y),ln,font=f,fill=WHITE); y+=int(size*1.12)
if sub:
    d.text((70,y+10),sub,font=J6(34),fill=MUTED); y+=60
# footer: logo + wordmark + pill
fy=H-120
logo=Image.open('public/logo.png').convert('RGBA').resize((76,76),Image.LANCZOS)
disc=Image.new('RGBA',(88,88),(0,0,0,0)); ImageDraw.Draw(disc).ellipse((0,0,87,87),fill=WHITE)
base.alpha_composite(disc,(64,fy-6)); base.alpha_composite(logo,(70,fy))
wf=J8(34); d.text((166,fy+6),'CHICAGO AIRCARE ',font=wf,fill=WHITE)
d.text((166+d.textlength('CHICAGO AIRCARE ',font=wf),fy+6),'PRO',font=wf,fill=CORAL)
d.text((166,fy+48),'aircareprohvac.com',font=J6(26),fill=SKY)
bt='Call or text 24/7'; bf=J6(30); bw=d.textlength(bt,font=bf)
d.rounded_rectangle((W-70-bw-56,fy+10,W-70,fy+68),radius=29,fill=(196,60,47))
d.text((W-70-bw-28,fy+20),bt,font=bf,fill=WHITE)
d.line((70,fy-30,W-70,fy-30),fill=(40,70,110),width=2)
base.convert('RGB').save(out,quality=90,optimize=True); print(out, 'lines', len(lines), 'size', size)
