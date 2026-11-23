# Weekly GBP post image (Chloe Vance). Same photo + layout every week; only the headline changes (owner 2026-11-23).
# Layout: navy text panel left, owner's heating photo right (no people, furnace/boiler).
# Usage: python3 scripts/gbp-post-image.py "Headline | second line" "Optional subline" marketing/gbp/posts/YYYY-MM-DD.jpg
# Rules: no phone numbers, prices or offers on the image (Google may reject the post).
import sys, os
from PIL import Image, ImageDraw, ImageFont
head, sub, out = sys.argv[1], (sys.argv[2] if len(sys.argv) > 2 else ''), (sys.argv[3] if len(sys.argv) > 3 else 'post.jpg')
PHOTO = os.environ.get('PHOTO', 'marketing/gbp/post-template-photo.jpg'); FX = float(os.environ.get('FX', '0.45'))
NAVY=(14,38,72); CORAL=(255,90,80); WHITE=(255,255,255); SKY=(125,211,252); MUTED=(201,216,232)
J8=lambda s: ImageFont.truetype('scripts/fonts/jakarta-800.ttf', s)
J6=lambda s: ImageFont.truetype('scripts/fonts/jakarta-600.ttf', s)
W,H=1200,900; PX=690; PW=W-PX
base=Image.new('RGBA',(W,H),(*NAVY,255))
img=Image.open(PHOTO).convert('RGB'); r=max(PW/img.width,H/img.height)
img=img.resize((round(img.width*r),round(img.height*r)),Image.LANCZOS)
x=int((img.width-PW)*FX); y=(img.height-H)//2
base.alpha_composite(img.crop((x,y,x+PW,y+H)).convert('RGBA'),(PX,0))
fade=Image.new('RGBA',(160,H)); px=fade.load()
for xx in range(160):
    a=int(255*(1-xx/160)**1.6)
    for yy in range(H): px[xx,yy]=(*NAVY,a)
base.alpha_composite(fade,(PX,0))
d=ImageDraw.Draw(base)
# brand row
logo=Image.open('public/logo.png').convert('RGBA').resize((76,76),Image.LANCZOS)
disc=Image.new('RGBA',(88,88),(0,0,0,0)); ImageDraw.Draw(disc).ellipse((0,0,87,87),fill=WHITE)
base.alpha_composite(disc,(64,64)); base.alpha_composite(logo,(70,70))
wf=J8(32); d.text((166,78),'CHICAGO AIRCARE ',font=wf,fill=WHITE)
d.text((166+d.textlength('CHICAGO AIRCARE ',font=wf),78),'PRO',font=wf,fill=CORAL)
d.text((166,118),'Heating & cooling · Chicago',font=J6(24),fill=SKY)
# headline
maxw=PX-70-40
def wrap(text,font):
    if '|' in text: return [t.strip() for t in text.split('|')]
    words=text.split(); lines=[]; cur=''
    for w in words:
        t=(cur+' '+w).strip()
        if d.textlength(t,font=font)<=maxw: cur=t
        else: lines.append(cur); cur=w
    lines.append(cur); return lines
size=72
while True:
    f=J8(size); lines=wrap(head,f)
    if (len(lines)<=4 and all(d.textlength(l,font=f)<=maxw for l in lines)) or size<=40: break
    size-=2
lh=int(size*1.12); block=len(lines)*lh
subf=J6(30); sublines=wrap(sub,subf) if sub else []
block+= (20+len(sublines)*42) if sublines else 0
y=200+max(0,(H-170-200-block)//2)
for ln in lines: d.text((70,y),ln,font=f,fill=WHITE); y+=lh
y+=20
for ln in sublines: d.text((70,y),ln,font=subf,fill=MUTED); y+=42
# footer
bt='Call or text 24/7'; bf=J6(30); bw=d.textlength(bt,font=bf)
d.rounded_rectangle((70,H-150,70+bw+56,H-92),radius=29,fill=(196,60,47))
d.text((98,H-140),bt,font=bf,fill=WHITE)
d.text((70,H-72),'aircareprohvac.com',font=J6(28),fill=SKY)
base.convert('RGB').save(out,quality=90,optimize=True); print(out,'lines',len(lines),'size',size)
