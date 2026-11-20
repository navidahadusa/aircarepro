# Citations tracker: CHICAGO AIRCARE PRO

Owner: **Hannah Carter, Local Citations & NAP Specialist** · Reports to Sophia Reynolds
Rows: `citations/citation-tracker.csv` · Rules: `citations/nap-standard.md` · Code: `business.rebrand` in `src/data/business.ts`

## Rebrand status (updated 2026-11-19)
| Item | Status |
|---|---|
| Legal rebrand **Shad Heating and Cooling LLC → CHICAGO AIRCARE PRO** | ✅ **Approved** |
| Google Business Profile name update | ✅ **Live 2026-11-20** → `sameAs`: https://www.google.com/maps?cid=18088581127472759753 |
| Yelp name update | 🆕 **New page created 2026-11-20**; old Shad page: merge or close via Yelp support · URL TODO |
| BBB name update (business name / DBA on the accredited profile) | 📨 **Requested 2026-11-20**, pending BBB |
| Housecall Pro public booking name (still "Shad Heating and Cooling") | ⏳ Pending: owner can change it in HCP settings |
| `sameAs` / review links for GBP, Yelp, BBB | 🔒 `TODO` until the owner sends the live URLs |
| New citations (Bing, Apple, Nextdoor, aggregators, directories) | 🔒 **Blocked** until all three existing listings show the new name |

**Why we wait:** if new directories go live while Google, Yelp and BBB still show the old name, the aggregators spread two competing names, which is the NAP inconsistency that suppresses local rankings. Rename the core three first, then roll out.

## Canonical NAP (use exactly)
```
CHICAGO AIRCARE PRO
Chicago, IL   (service-area business, street address hidden)
(773) 644-8227
https://aircareprohvac.com
```
Email info@aircareprohvac.com · City of Chicago License #3065598 · Open 24/7
Former names to retire everywhere: `Shad Heating and Cooling LLC`, `Shad Heating and Cooling`

## Step 1: Rename the existing listings (owner actions, Hannah prepared)
| Listing | What to change | Proof the platform may ask for | When live → |
|---|---|---|---|
| **Google Business Profile** | Business name → `CHICAGO AIRCARE PRO` (no added keywords). Confirm phone (773) 644-8227, website, 24/7 hours, service areas, categories (*HVAC contractor* primary) | Updated business registration / assumed-name filing, license, branded signage or vehicle photos, invoice with the new name | Send the profile/share URL → added to `sameAs` + `reviewProfiles` |
| **Yelp** | Business name → `CHICAGO AIRCARE PRO` via biz.yelp.com (name changes may go to Yelp support for review) | Registration documents, website showing the new name | Send the `yelp.com/biz/...` URL |
| **BBB** | Update the accredited profile's business name (keep the legal entity record accurate) | Updated registration with the state | Send the `bbb.org/us/il/chicago/profile/...` URL; we'll add the seal link on the site |
| Facebook | Page name matches; "Call now" button; service area | n/a | Already in `sameAs` |
| Housecall Pro | Public business name → CHICAGO AIRCARE PRO (booking URL slug may stay) | n/a | Reply when done |

**Audit checklist for each renamed listing:** exact name · phone (773) 644-8227 · website https://aircareprohvac.com (GBP with `?utm_source=google&utm_medium=organic&utm_campaign=gbp`) · hours 24/7 · address hidden (service area) · categories · description from `nap-standard.md` · photos · no duplicate listings under the old name.

## Step 2: Rollout queue (starts when Step 1 is complete)
| # | Directory | Why |
|---|---|---|
| 1 | Bing Places | Imports from GBP; feeds Bing, Copilot and ChatGPT search |
| 2 | Apple Business Connect | Apple Maps and Siri |
| 3 | Nextdoor Business | Neighborhood referrals (Edgewater, Lincoln Square, Evanston) |
| 4 | Comfortmaker dealer locator | Confirmed dealer: high-trust, relevant |
| 5 | Data Axle · Neustar Localeze · Foursquare | Aggregators that push the new name to hundreds of sites |
| 6 | Angi / HomeAdvisor · Thumbtack · Houzz · Porch | Home-services directories |
| 7 | Andersonville and Edgewater chambers | Local citation + backlink (with Natalie Foster) |
| 8 | ComEd / Peoples Gas / North Shore Gas / Nicor Gas contractor lists | Rebate-shopper referrals |

## Step 3: Clean-up (after rollout)
- [ ] Search for listings under "Shad Heating and Cooling" (Google, Yelp, BBB, Facebook, aggregators). Request merges or name updates.
- [ ] Live WordPress site: merge the two LocalBusiness schema blocks into one (`CHICAGO AIRCARE PRO`, `+17736448227`, valid 24/7 hours) and add `sameAs`.
- [ ] Remove "Operated by Shad Heating and Cooling LLC" from the live site footer once the legal paperwork is final.

## Already done in this repo
- `business.ts`: `legalName: CHICAGO AIRCARE PRO`, `formerNames`, `rebrand` status object, `reviewProfiles` placeholders (render without links until the URLs arrive).
- The site footer and schema show **CHICAGO AIRCARE PRO** only. The former name appears nowhere on the site.

## Old-name cleanup ("Shad" still showing), checked 2026-11-20 (Hannah Carter)
- **Website:** clean. The only "Shad" left is the **Housecall Pro booking URL slug** (`book.housecallpro.com/book/Shad-Heating-and-Cooling/…`), and the HCP booking page itself shows the old name to customers. **Fix:** rename the company in Housecall Pro (Settings → Company profile / Online booking), then send the new booking link; it's changed once in `business.bookingUrl` and updates all 137 pages.
- **Web search** (2026-11-20): no indexed third-party listings found for "Shad Heating and Cooling" + Chicago or + the phone number. The old name isn't widely syndicated, which keeps the cleanup small.
- **Where it can still appear:** Google Search/Maps caches (update within days to a few weeks after the approved rename) · Apple Maps (claim at Apple Business Connect, after Yelp/BBB) · Bing Places (re-import from GBP) · old Yelp page (merge/close) · BBB (pending) · Housecall Pro texts/invoices/estimates · Facebook page name · business cards, van, invoices.
- **Owner:** send screenshots of any place that still shows "Shad"; Hannah adds each one here with the fix.
