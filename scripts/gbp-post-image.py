# Weekly GBP post image (Chloe Vance). Same style as the GBP cover (owner's pick, 2026-11-23):
# owner's rooftop/skyline job photo, navy gradient from the left, logo + wordmark, headline that changes per post.
# Usage: python3 scripts/gbp-post-image.py "Headline | second line" "Optional subline" marketing/gbp/posts/YYYY-MM-DD.jpg
# Rules: no phone numbers, prices or offers on the image (Google may reject the post).
import sys, os, math
from PIL import Image, ImageOps, ImageDraw, ImageFont
head, sub, out = sys.argv[1], (sys.argv[2] if len(sys.argv) > 2 else ''), (sys.argv[3] if len(sys.argv) > 3 else 'post.jpg')
NAVY=(14,38,72); CORAL=(255,90,80); WHITE=(255,255,255); SKY=(125,211,252); RED=(215,38,30); MUTED=(201,216,232)
J8=lambda s: ImageFont.truetype('scripts/fonts/jakarta-800.ttf', s)
J6=lambda s: ImageFont.truetype('scripts/fonts/jakarta-600.ttf', s)
W,H=1200,900
def cover_crop(img,w,h,fy):
    r=max(w/img.width,h/img.height); img=img.resize((round(img.width*r),round(img.height*r)),Image.LANCZOS)
    x=(img.width-w)//2; y=int((img.height-h)*fy); return img.crop((x,y,x+w,y+h))
base=cover_crop(Image.open(os.environ.get('PHOTO','marketing/gbp/post-template-photo.jpg')).convert('RGB'),W,H,float(os.environ.get('FY','0.42'))).convert('RGBA')
g=Image.new('RGBA',(W,H)); px=g.load()
stops=[(0,240),(0.55,215),(0.85,90),(1,40)]
for x in range(W):
    t=x/W; a=0
    for (t0,a0),(t1,a1) in zip(stops,stops[1:]):
        if t0<=t<=t1: a=a0+(a1-a0)*(t-t0)/(t1-t0)
    for y in range(H): px[x,y]=(*NAVY,int(a))
base.alpha_composite(g)
d=ImageDraw.Draw(base)
def star(cx,cy,r,color):
    pts=[]
    for i in range(12):
        rr=r if i%2==0 else r*0.45; a=math.pi/6*i-math.pi/2
        pts.append((cx+rr*math.cos(a),cy+rr*math.sin(a)))
    d.polygon(pts,fill=color)
# brand lockup (same as cover)
L=118; X=70; Y=70
logo=Image.open('public/logo.png').convert('RGBA').resize((L,L),Image.LANCZOS)
disc=Image.new('RGBA',(L+14,L+14),(0,0,0,0)); ImageDraw.Draw(disc).ellipse((0,0,L+13,L+13),fill=WHITE)
base.alpha_composite(disc,(X-7,Y-7)); base.alpha_composite(logo,(X,Y))
tx=X+L+30; f=J8(46)
d.text((tx,Y+14),'CHICAGO AIRCARE ',font=f,fill=WHITE)
d.text((tx+d.textlength('CHICAGO AIRCARE ',font=f),Y+14),'PRO',font=f,fill=CORAL)
fs=24; ty=Y+74
star(tx+fs*0.45,ty+fs*0.62,fs*0.42,RED)
d.text((tx+fs*1.1,ty),'HVAC SOLUTIONS',font=J6(fs),fill=SKY)
star(tx+fs*1.1+d.textlength('HVAC SOLUTIONS',font=J6(fs))+fs*0.65,ty+fs*0.62,fs*0.42,RED)
# headline
maxw=W-140
def wrap(text,font):
    if '|' in text: return [t.strip() for t in text.split('|')]
    words=text.split(); lines=[]; cur=''
    for w in words:
        t=(cur+' '+w).strip()
        if d.textlength(t,font=font)<=maxw: cur=t
        else: lines.append(cur); cur=w
    lines.append(cur); return lines
size=76
while True:
    f=J8(size); lines=wrap(head,f)
    if all(d.textlength(l,font=f)<=maxw for l in lines) or size<=44: break
    size-=2
lh=int(size*1.1); y=330
for ln in lines: d.text((X,y),ln,font=f,fill=WHITE); y+=lh
if sub: d.text((X,y+16),sub,font=J6(34),fill=MUTED); y+=70
# pills: license + call/text (text measured with the same font it is drawn in)
pf=J6(28); py=H-130
def pill(x,text,bg,fg):
    w=d.textlength(text,font=pf); d.rounded_rectangle((x,py,x+w+56,py+60),radius=30,fill=bg); d.text((x+28,py+13),text,font=pf,fill=fg); return x+w+56
nx=pill(X,'City of Chicago License #3065598',WHITE,NAVY)
pill(nx+18,'Call or text 24/7',(196,60,47),WHITE)
base.convert('RGB').save(out,quality=90,optimize=True); print(out,'lines',len(lines),'size',size)
