# 30s vertical video scenes (Chloe Vance + Rachel Morgan). Usage: python3 scripts/video-30s-scenes.py <font_dir> <photo_dir> <out_dir>; then the ffmpeg zoompan + xfade command in marketing/print/README.md
import sys
from PIL import Image, ImageOps, ImageDraw, ImageFont
S,U,OUT=sys.argv[1],sys.argv[2],sys.argv[3]
W,H=1188,2112  # 10% larger than 1080x1920 for a slow zoom
NAVY=(14,38,72); CORAL=(255,90,80); WHITE=(255,255,255); SKY=(125,211,252); RED=(215,38,30)
J8=lambda s: ImageFont.truetype(f'{S}/jakarta-800.ttf', s); J6=lambda s: ImageFont.truetype(f'{S}/jakarta-600.ttf', s)
logo=Image.open('public/logo.png').convert('RGBA')
def crop(p, fy=0.5):
    im=ImageOps.exif_transpose(Image.open(p)).convert('RGB'); r=max(W/im.width,H/im.height)
    im=im.resize((round(im.width*r),round(im.height*r)),Image.LANCZOS); x=(im.width-W)//2; y=int((im.height-H)*fy); return im.crop((x,y,x+W,y+H)).convert('RGBA')
def shade(im, top=False):
    g=Image.new('RGBA',(W,H)); px=g.load()
    for y in range(H):
        t=(1-y/H) if top else y/H
        a=int(max(0,(t-0.45))/0.55*235)
        for x in range(W): px[x,y]=(*NAVY,a)
    im.alpha_composite(g); return im
def wrap(d,text,font,maxw):
    words=text.split(); lines=[]; cur=''
    for w in words:
        t=(cur+' '+w).strip()
        if d.textlength(t,font=font)<=maxw: cur=t
        else: lines.append(cur); cur=w
    lines.append(cur); return lines
def caption(im, big, small=None, top=False):
    d=ImageDraw.Draw(im); f=J8(104); lines=wrap(d,big,f,W-170)
    y=(230 if top else H-560)
    for l in lines: d.text((85,y),l,font=f,fill=WHITE); y+=118
    if small: d.text((85,y+18),small,font=J6(52),fill=SKY)
    d.rectangle((85,(200 if top else H-600),85+140,(200 if top else H-600)+12),fill=CORAL)
    lg=logo.resize((150,150),Image.LANCZOS); d.ellipse((W-85-158,92,W-85+8,258),fill=WHITE); im.alpha_composite(lg,(W-85-150,100))
    return im
scenes=[('166a17a4','No heat tonight?','Call or text 24/7',0.45,False),
('f25a29a8','Furnace. Boiler. AC.','One Chicago crew for both seasons',0.4,False),
('884a8cb5','NATE-certified technicians','EPA 608 · BBB accredited',0.35,False),
('b2230037','Diagnosis first.','Options with prices before any work',0.4,False),
('a8160b35','Built for Chicago homes','Two-flats · greystones · bungalows',0.25,False),
('140b3645','Nights, weekends, holidays','We answer 24/7',0.45,False)]
for i,(k,b,s,fy,top) in enumerate(scenes):
    im=crop(f'{U}/{k}-image.jpg',fy); im=shade(im,top); im=caption(im,b,s,top); im.convert('RGB').save(f'{OUT}/s{i}.png')
# end card
im=Image.new('RGBA',(W,H),(*NAVY,255)); d=ImageDraw.Draw(im)
for yy in (H-420,H-370): d.rectangle((0,yy,W,yy+22),fill=SKY)
lg=logo.resize((520,520),Image.LANCZOS); d.ellipse((W//2-275,330,W//2+275,880),fill=WHITE); im.alpha_composite(lg,(W//2-260,345))
d.text((W//2,1000),'CHICAGO AIRCARE',font=J8(104),fill=WHITE,anchor='mt'); d.text((W//2,1120),'PRO',font=J8(104),fill=CORAL,anchor='mt')
d.text((W//2,1270),'HEATING & COOLING · 24/7',font=J6(56),fill=SKY,anchor='mt')
d.text((W//2,1420),'(773) 644-8227',font=J8(110),fill=WHITE,anchor='mt')
d.text((W//2,1560),'aircareprohvac.com',font=J6(64),fill=WHITE,anchor='mt')
im.convert('RGB').save(f'{OUT}/s6.png')
print('scenes ok')
