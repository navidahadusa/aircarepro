# Google Business Profile ↔ website match sheet (Hannah Carter + Elena Brooks), 2026-11-21

Google ranks a local business higher when the profile and the website say **exactly the same thing**: name, phone, hours, services, areas. The website (and its schema on every page) already uses the values below. Make the profile match field by field. Edit in Google Search or Maps → your profile → **Edit profile**. Change a few fields per day, not everything at once.

## 1. Business information
| GBP field | Set exactly to | Website match |
|---|---|---|
| Business name | **CHICAGO AIRCARE PRO** (nothing added) | Schema `name`, footer ✅ |
| Primary category | **HVAC contractor** | Site topic ✅ |
| Additional categories (pick those Google offers) | Heating contractor · Air conditioning contractor · Furnace repair service · Air conditioning repair service | Service hubs /heating/, /cooling/ ✅ |
| Phone | **(773) 644-8227** | Every page ✅ |
| Website | `https://aircareprohvac.com/?utm_source=google&utm_medium=organic&utm_campaign=gbp` | Homepage ✅ (the UTM lets GA4 count profile visits) |
| Appointment link | `https://book.housecallpro.com/book/CHICAGO-AIRCARE-PRO/8d48b75104b0455da0f38ddcf1519bd3?v2=true` (Housecall Pro renamed 2026-11-22) | Book buttons ✅ (live since PR #19) |
| Hours | **Open 24 hours**, all 7 days | Schema 24/7 ✅ |
| Address | Hidden (service-area business) | `showAddress: false` ✅ |
| Opening date | Leave as is | — |

## 2. Description (About, max 750 characters), paste:
> CHICAGO AIRCARE PRO is a licensed (City of Chicago License #3065598), BBB accredited heating and cooling company serving Chicago homes and nearby suburbs 24 hours a day, 7 days a week, nights and holidays included. Our NATE and EPA 608 certified technicians repair, install and maintain gas furnaces, steam and hot-water boilers, central air conditioners, heat pumps and ductless mini-splits, plus humidifiers and air purifiers. We know the greystone, two-flat and bungalow heating systems common in Chicago. Every visit starts with a diagnosis, and you approve the price before any work begins. Free estimates on new systems, financing through Optimus for qualified buyers and the Comfort Club maintenance plan. Authorized Comfortmaker dealer.

No prices, phone numbers or links in the description (owner, 2026-11-22). Prices change and Google may flag them.

## 3. Service areas (Google allows up to 20), exactly these 20
Chicago · Evanston · Skokie · Wilmette · Highland Park · Des Plaines · Arlington Heights · Schaumburg · Naperville · Lincoln Park · Lakeview · Logan Square · Rogers Park · Edgewater · Uptown · Lincoln Square · Wicker Park · Bucktown · Irving Park · Portage Park

(Each one has a matching page on the site, e.g. `/hvac-evanston/`, `/hvac-logan-square/`; Edgewater → `/hvac-andersonville-edgewater/`.)

## 4. Services (Edit profile → Services), same names as the site
Pick Google's suggested service when it matches, otherwise add a custom one with the same name. Add the site page's first sentence as the service description if you like.

| Heating | Cooling | Air quality |
|---|---|---|
| Furnace repair | AC repair | Whole-home humidifiers |
| Furnace installation | AC installation | Whole-home dehumidifiers |
| Furnace tune-up | AC tune-up | Air purifiers |
| Boiler repair | Mini-split installation | UV air sanitizers |
| Boiler installation | Mini-split repair | Ductwork repair |
| Heat pump repair | Refrigerant leak repair | Carbon monoxide safety |
| Heat pump installation | | |
| Thermostats & zoning | | |

## 5. Photos and logo
- **Logo:** `01-logo-720x720.png` from the photo pack, uploaded under **Logo** (not as a normal photo). The old logo can keep showing for **days, sometimes a couple of weeks**, while Google reviews the change and refreshes its caches. Don't re-upload it over and over: each upload restarts the review.
- In **Photos**, open the **By owner** tab and **delete any photo that shows the old logo or name**. Under **By customers**, report photos with the old branding as "Not relevant / outdated" (only Google can remove those).
- Cover + 2–3 real job photos per week from the pack.

## 6. Weekly activity (this is what restores the profile score)
1 post every Monday (text in `marketing/content/gbp-post-drafts.md`, same image) · 2–3 photos · reply to every review within 48 hours · ask every customer for a Google review (`/review/` page, QR, SMS template).

## Already done on the website side
- Name, phone, 24/7 hours and the GBP link (`sameAs`) are in the HVACBusiness schema on all pages.
- One page for each of the 20 areas above, and one page for each of the 20 services.
- No "Shad" text anywhere on the site, booking URL included (new Housecall Pro link live 2026-11-22).
