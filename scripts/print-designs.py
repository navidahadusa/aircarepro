"""Print designs (Chloe Vance + Rachel Morgan): business card (front/back) and furnace service sticker.
300 dpi, with bleed. Usage: PYTHONPATH=<qrcode lib> python3 scripts/print-designs.py <font_dir> marketing/print
Facts only from src/data/business.ts. QR codes carry UTM tags so GA4 shows print traffic."""
import sys, qrcode
from PIL import Image, ImageDraw, ImageFont
FD, OUT = sys.argv[1], sys.argv[2]
DPI = 300
NAVY=(14,38,72); CORAL=(255,90,80); CORAL_T=(196,60,47); WHITE=(255,255,255); SKY=(125,211,252); RED=(215,38,30); INK=(19,32,46); MUTED=(84,98,115); ICE=(238,244,237)
J8=lambda s: ImageFont.truetype(f'{FD}/jakarta-800.ttf', s)
J6=lambda s: ImageFont.truetype(f'{FD}/jakarta-600.ttf', s)
IN=lambda s: ImageFont.truetype('/usr/share/fonts/opentype/inter/Inter-SemiBold.otf', s)
INR=lambda s: ImageFont.truetype('/usr/share/fonts/opentype/inter/Inter-Medium.otf', s)
logo=Image.open('public/logo.png').convert('RGBA')
PHONE='(773) 644-8227'; WEB='aircareprohvac.com'; EMAIL='info@aircareprohvac.com'; LIC='City of Chicago License #3065598'

def star(d, cx, cy, r, color):
    import math
    pts=[(cx+(r if i%2==0 else r*0.45)*math.cos(math.pi/6*i-math.pi/2), cy+(r if i%2==0 else r*0.45)*math.sin(math.pi/6*i-math.pi/2)) for i in range(12)]
    d.polygon(pts, fill=color)

def qr(url, px, dark=NAVY):
    q=qrcode.QRCode(error_correction=qrcode.constants.ERROR_CORRECT_M, border=2, box_size=10); q.add_data(url); q.make(fit=True)
    return q.make_image(fill_color=dark, back_color='white').convert('RGB').resize((px,px), Image.NEAREST)

def paste_logo(img, x, y, size, disc=True):
    if disc:
        ImageDraw.Draw(img).ellipse((x-6,y-6,x+size+6,y+size+6), fill=WHITE)
    img.paste(logo.resize((size,size), Image.LANCZOS), (x,y), logo.resize((size,size), Image.LANCZOS))

def save(img, name):
    img.save(f'{OUT}/{name}.png', dpi=(DPI,DPI)); img.convert('RGB').save(f'{OUT}/{name}.pdf', resolution=DPI)

# ---------- Business card: 3.5 x 2 in trim, 0.125 in bleed → 3.75 x 2.25 in = 1125 x 675 px ----------
W,H=1125,675; B=38  # bleed px
front=Image.new('RGB',(W,H),NAVY); d=ImageDraw.Draw(front)
# skyline-ish stripes (Chicago flag light blue bands) at bottom
d.rectangle((0,H-B-70,W,H-B-58), fill=SKY); d.rectangle((0,H-B-40,W,H-B-28), fill=SKY)
paste_logo(front, B+60, 120, 250)
tx=B+60+250+50
d.text((tx,150),'CHICAGO', font=J8(74), fill=WHITE)
d.text((tx,232),'AIRCARE ', font=J8(74), fill=WHITE); d.text((tx+d.textlength('AIRCARE ',font=J8(74)),232),'PRO', font=J8(74), fill=CORAL)
star(d, tx+14, 352, 13, RED); d.text((tx+36,334),'HEATING & COOLING', font=J6(34), fill=SKY); star(d, tx+36+d.textlength('HEATING & COOLING',font=J6(34))+22, 352, 13, RED)
d.text((tx,410),'24/7 · Chicago & suburbs', font=IN(32), fill=(201,216,232))
save(front,'business-card-front')

back=Image.new('RGB',(W,H),WHITE); d=ImageDraw.Draw(back)
d.rectangle((0,0,W,B+22), fill=NAVY)
x=B+60
d.text((x,105),'Call or text 24/7', font=IN(30), fill=MUTED)
d.text((x,145),PHONE, font=J8(64), fill=NAVY)
d.text((x,245),WEB, font=J6(38), fill=CORAL_T)
d.text((x,298),EMAIL, font=INR(30), fill=INK)
d.text((x,370),'Furnaces · Boilers · AC · Heat pumps · Mini-splits', font=INR(27), fill=INK)
d.text((x,410),'NATE-certified · EPA 608 · BBB accredited', font=INR(27), fill=INK)
d.text((x,450),LIC, font=INR(27), fill=MUTED)
qs=250; q=qr('https://aircareprohvac.com/?utm_source=business_card&utm_medium=print&utm_campaign=card', qs)
qx=W-B-60-qs; back.paste(q,(qx,150)); d.text((qx+qs/2,150+qs+14),'Scan to book', font=IN(26), fill=NAVY, anchor='mt')
d.rectangle((0,H-B-14,W,H), fill=CORAL)
save(back,'business-card-back')

# ---------- Furnace sticker: 6 x 4 in trim + 0.0625 in bleed → 6.125 x 4.125 in = 1838 x 1238 px ----------
W,H=1838,1238; B=19
st=Image.new('RGB',(W,H),WHITE); d=ImageDraw.Draw(st)
d.rectangle((0,0,W,330), fill=NAVY)
paste_logo(st, B+70, 55, 220)
tx=B+70+220+45
d.text((tx,70),'CHICAGO AIRCARE ', font=J8(78), fill=WHITE); d.text((tx+d.textlength('CHICAGO AIRCARE ',font=J8(78)),70),'PRO', font=J8(78), fill=CORAL)
star(d, tx+14, 190, 13, RED); d.text((tx+36,172),'HEATING & COOLING · 24/7', font=J6(36), fill=SKY)
d.text((tx,238),'This system is serviced by our NATE-certified technicians', font=IN(30), fill=(201,216,232))
# big call strip
d.rectangle((0,330,W,500), fill=CORAL_T)
d.text((B+70,352),'No heat? No cooling? Call or text 24/7', font=J6(40), fill=WHITE)
d.text((B+70,408),PHONE, font=J8(62), fill=WHITE)
# service log (write-in lines)
y0=545; x0=B+70; colw=520
labels=[('Service date',''),('Technician',''),('Next service due',''),('Filter size','')]
for i,(lab,_) in enumerate(labels):
    yy=y0+i*132
    d.text((x0,yy),lab, font=J6(38), fill=NAVY)
    d.line((x0, yy+105, x0+colw+420, yy+105), fill=(160,172,186), width=4)
qs=450; q=qr('https://aircareprohvac.com/?utm_source=furnace_sticker&utm_medium=print&utm_campaign=sticker', qs)
qx=W-B-70-qs; st.paste(q,(qx,540)); d.text((qx+qs/2,540+qs+18),'Scan to book service', font=J6(34), fill=NAVY, anchor='mt')
d.text((qx+qs/2,540+qs+66),WEB, font=IN(30), fill=CORAL_T, anchor='mt')
d.text((x0,H-B-58),LIC+'  ·  Smell gas or CO alarm sounding? Leave the house and call 911.', font=INR(27), fill=MUTED)
save(st,'furnace-sticker-6x4')
print('ok')
