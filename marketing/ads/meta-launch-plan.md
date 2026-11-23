# Meta ads launch plan (Ava Martinez, Meta Ads Expert) · 2026-11-23
Lead: Olivia Bennett · creative: Chloe Vance · tracking: Rachel Morgan · approval: Sophia Reynolds · **launch and budget: the owner**

The owner asked to start Meta ads (2026-11-23) with a **$1,000 ad budget**, read as **$1,000 per month across all channels** (tell us if you meant something else). Meta's share in Olivia's split: **$300/month ≈ $10/day** (see `ads-plan.md` → Budgets).

**What Meta is good for here (honest):** people don't search on Facebook, so Meta won't match Local Services Ads for "no heat right now" calls. In winter it works for **replacement estimates** (an old furnace or boiler struggling in the cold), boiler and steam know-how, and **reminding people who already visited the site**. We judge it on real calls and booked jobs after 2–3 weeks, not on likes.

---

## Before you launch (10 minutes)
1. **Facebook Page name:** make sure the Page shows **CHICAGO AIRCARE PRO**, not the old name (the ads run under the Page name). Page → Settings → Page info → Name. Phone (773) 644-8227, website https://aircareprohvac.com, hours: always open.
2. **Ad account:** business.facebook.com → Ads Manager. Add a payment method. Time zone: **Central (Chicago)**.
3. **Team access (optional, recommended):** Business Settings → Partners or People → add the team so we can build drafts for you to approve. Never share your password.

## Campaign 1: Call ads (start here; no Pixel needed)
Ads Manager → **Create** →
- **Objective:** **Leads**, then conversion location: **Calls**. (If Meta doesn't offer Calls under Leads in your account, use **Engagement → Calls**.) Tapping the ad dials your phone.
- **Special Ad Category:** none. HVAC repair isn't housing, credit or employment. **Keep financing out of these ads**; mentioning credit can trigger the "Financial products and services" category and limit targeting.
- **Campaign name:** `Calls | Chicago heating | Nov 2026`
- **Budget:** **$10 per day** (ad set budget). Run continuously; review after 14 days with Ava.
- **Phone number:** (773) 644-8227
- **Location:** *people living in or recently in* these places:
  - Chicago: drop pins (or add these neighborhoods/ZIPs): Lincoln Park, Lakeview, Lincoln Square, North Center, Ravenswood, Uptown, Andersonville/Edgewater, Rogers Park, West Ridge, Logan Square, Avondale, Irving Park, Albany Park, Portage Park, Jefferson Park, Norwood Park, Edison Park, Bucktown, Wicker Park, Humboldt Park, Ukrainian Village, West Town, Austin. **Don't target all of Chicago**: the South Side is outside the service area.
  - Suburbs: Evanston, Skokie, Wilmette, Highland Park, Des Plaines, Arlington Heights, Schaumburg, Naperville.
- **Age:** 30–65+. **Language:** English (add Spanish/Polish only if you can answer calls in them).
- **Audience:** Advantage+ audience on, inside those locations.
- **Placements:** Advantage+ placements.

### The 3 ads (upload both sizes for each; images in `marketing/ads/meta/`)
| Ad | Image (feed 4:5 · story 9:16) | Primary text | Headline | Button |
|---|---|---|---|---|
| **1. Replacement** | `ad1-replacement-feed.jpg` · `ad1-replacement-story.jpg` | Furnace or boiler struggling again this winter? Before you replace it, get a straight answer. We look at what you have, show you repair and replacement options with prices, and size any new system to your home. Free estimates on new systems. Chicago and nearby suburbs. | Free estimate on a new system | Call now |
| **2. No heat** | `ad2-noheat-feed.jpg` · `ad2-noheat-story.jpg` | No heat tonight? Call or text us, day or night. Furnaces, steam and hot-water boilers and heat pumps in Chicago homes, two-flats and condos. You see the diagnosis and the price before any work starts. City of Chicago License #3065598. | No heat? Call 24/7 | Call now |
| **3. Steam/boiler** | `ad3-boiler-feed.jpg` · `ad3-boiler-story.jpg` | Cold radiators, banging pipes, a boiler that won't fire? Steam and hot-water boilers heat a lot of Chicago two-flats and greystones, and they need a crew that works on them every winter. Call or text for service. | Boiler and radiator repair | Call now |

All claims are confirmed facts: free estimates on new systems, 24/7, license #3065598, NATE-certified, price before work. No prices, discounts, "best/#1", ratings or response times.

## Campaign 2: Website visitors (after the Pixel is in)
1. **Meta Pixel via GTM** (owner, or the team with GTM access): Events Manager → Connect data → Web → Meta Pixel → copy the Pixel ID. In GTM: New tag → Custom HTML → paste Meta's base code → trigger **All Pages** → Publish. Then add Custom HTML tags `fbq('trackCustom','CallClick')`, `'TextClick'`, `'BookOnline'` on the existing GTM triggers for `click_to_call`, `click_to_sms`, `click_book_online` (`marketing/lead-gen/tracking-plan.md`). No personal data is sent.
2. **Retargeting ad set** (~$3–4/day from the $10, only after 300+ site visitors in 30 days): audience = website visitors, last 60 days; ads 1 and 3; button **Call now** or **Book now** → `https://aircareprohvac.com/free-estimate/?utm_source=facebook&utm_medium=paid_social&utm_campaign=retargeting`.

## Measuring (real numbers only)
- **Meta:** calls (call ads report "calls placed"), cost per call, frequency. Refresh images when frequency goes above about 3.
- **You:** ask every caller "How did you hear about us?" and tell us which calls came from Facebook/Instagram, and which became jobs. That's the number that decides whether Meta keeps its $300.
- **Review with Ava after 14 days:** keep, change the ads, or move the money to Local Services Ads.

## Re-render or new images
`python3 scripts/meta-ad-image.py <photo> "Headline | line two" "Subline" marketing/ads/meta/<name>-feed.jpg feed` (and `story`). Use the owner's real job photos only.
