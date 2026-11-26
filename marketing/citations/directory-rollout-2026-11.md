# Directory rollout: owner checklist (Hannah Carter), started 2026-11-25

Owner decision 2026-11-25: **start the directory rollout now.** Google, Yelp and the website already match. BBB is updated when its rename lands.
**Owner** submits and verifies each listing, since the team can't log in or receive codes. **Hannah** prepares the text and logs every listing in `citation-tracker.csv` (status, date, live URL).

## Use exactly these details on every site
| Field | Value |
|---|---|
| Business name | **CHICAGO AIRCARE PRO** (nothing added, e.g. no "HVAC Chicago 24/7") |
| Phone | **(773) 644-8227** |
| Website | **https://aircareprohvac.com** |
| Address | Service-area business: **hide the street address**, show Chicago, IL |
| Service area | Chicago (North, Northwest, West Sides), Evanston, Skokie, Wilmette, Highland Park, Des Plaines, Arlington Heights, Schaumburg, Naperville |
| Hours | Open 24 hours, 7 days |
| Category | Heating & Air Conditioning / HVAC Contractor (main) · Furnace repair · Air conditioning contractor (secondary, where offered) |
| Email | info@aircareprohvac.com |
| Description, services, photos | `listing-fields-kit.md` (description, 20 services) · real job photos from `src/assets/photos/jobs/` + logo |
| License | City of Chicago License #3065598 |

Never add prices, ratings, "best/#1" or offers you haven't confirmed. If a site asks for insurance, payment methods or year founded, tell Hannah first rather than guessing.

## Order (about 15–20 minutes each)
| # | Site | Sign-up | How it verifies | Why it matters |
|---|---|---|---|---|
| 1 | **Apple Business Connect** | businessconnect.apple.com | Phone call or document | Apple Maps, Siri, iPhone searches. Kit: `apple-business-connect-kit.md` |
| 2 | **Bing Places**: confirm it published | bingplaces.com | Already imported from Google (2026-11-22) | Bing, Copilot, ChatGPT search use Bing data |
| 3 | **Facebook page**: fix the fields | Page settings | None | Name, website, hours 24/7, service area, category |
| 4 | **Nextdoor Business** | business.nextdoor.com | Phone or postcard | Neighbors recommend contractors here; strong on the North Side |
| 5 | **Comfortmaker dealer locator** | Ask your distributor rep / dealer portal | Dealer account | A trusted supplier link; make sure the listing shows the new name and website |
| 6 | **Foursquare** | foursquare.com/add-place (claim) | Phone or email | Feeds Apple, Uber and many apps |
| 7 | **Data Axle** | data-axle.com (business listing update) | Phone or email | Data aggregator: feeds hundreds of smaller directories |
| 8 | **Neustar Localeze** | neustarlocaleze.biz | Phone | Aggregator for car GPS, phone maps and directories |
| 9 | **Angi** (free profile) | angi.com/pro | Phone and email | Homeowners search here. Don't buy leads now: free profile only |
| 10 | **Thumbtack** (free profile) | thumbtack.com/pro | Phone and email | Free profile; paying per lead is a separate budget decision |
| 11 | **Houzz** | pro.houzz.com | Email | Renovation audience, good for replacements |
| 12 | **Porch** | pro.porch.com | Email | Home-services directory |
| 13 | **HomeAdvisor** | pro.homeadvisor.com | Phone | Same company as Angi; often handled together |
| 14 | **Andersonville or Edgewater Chamber of Commerce** | Chamber website | Membership | Local link + member directory. Cost: your decision |
| 15 | **Utility contractor programs** (ComEd, Peoples Gas, Nicor Gas) | Each program's trade-ally page | Application | Eligibility first; Natalie checks the requirements |
| Later | **BBB**: once BBB finishes the rename, send us the profile URL | bbb.org | Already accredited | We add it to the site and schema |

## After each listing goes live
Send Hannah the **live profile URL**, or a screenshot if the site has no public page. She will:
1. Mark it **live** in `citation-tracker.csv` with the date.
2. Add strong profiles (Apple, Bing, Nextdoor, Angi, Houzz) to `sameAs` in `src/data/business.ts`, where they help Google and AI tools connect the business across sites.
3. Check that the name, phone and website match exactly.

## What we'll report
Weekly in the daily report: listings live vs planned, and any that show a mismatched name, phone or website.
