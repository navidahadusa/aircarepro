# Paid advertising plan: CHICAGO AIRCARE PRO
Lead: **Olivia Bennett, Lead Generation Manager** · Channels: **Grace Whitman** (Google Search ads), **Lauren Hayes** (Local Services Ads), **Ava Martinez** (Meta) · Tracking: **Rachel Morgan** · Approval: **Sophia Reynolds** · **Budget and launch: the owner only.** (Team expanded by the owner 2026-11-23.) Owner to-do list for all lead channels: `marketing/lead-gen/lead-channels-playbook.md`.

**Hard rules:** no campaign goes live, and no budget changes, without the owner's explicit OK. No claims we can't prove (prices, response times, "#1", "best", guarantees, reviews/ratings we don't have). Every ad lands on a real page with Call / Text / Book.

## Priority order (by expected leads per dollar for a Chicago HVAC company)
| # | Channel | Why | Owner action needed |
|---|---|---|---|
| 1 | **Google Local Services Ads (LSA)**: "Google Screened/Guaranteed" box at the very top; pay per lead, not per click | Highest-intent calls for HVAC; trust badge | Sign up at ads.google.com/local-services-ads; Google checks license #3065598, insurance and a background check; reviews needed (see `marketing/reviews/review-playbook.md`) |
| 2 | **Google Search Ads**: emergency + repair keywords, call-focused | Captures "no heat" searches day and night | Google Ads account access (add the team's email as Standard user) + monthly budget |
| 3 | **Google Business Profile** (free): weekly posts, Call/Book buttons | Free local visibility | GBP rename first (pending) |
| 4 | **Meta (Facebook/Instagram)**: seasonal tune-ups/Comfort Club only, retargeting site visitors | Cheap reach for planned work, not emergencies | Meta Business access + budget; Comfort Club price |
| 5 | Bing/Microsoft Ads: import of Google Search campaign | Low cost, older homeowners | After #2 works |

## Before any ad money: tracking (Rachel)
- GTM `GTM-K3PBQCR9` is on the site. Events: `click_to_call`, `click_to_sms`, `click_book_online` (with `placement`).
- Google Ads conversions: **calls from ads** (call extension), **website call clicks**, **Book online clicks**. Later: import **booked jobs** from Housecall Pro (offline conversions) so Google optimizes for real jobs, not clicks.
- Use a Google forwarding number only inside ads/JS swap; the canonical (773) 644-8227 stays in HTML and schema (NAP rule).

## Campaign 1: Google Search, "Emergency & Repair" (draft)
- **Locations:** service areas only: Chicago (North, Northwest and West Sides), Evanston, Skokie, Wilmette, Highland Park, Des Plaines, Arlington Heights, Schaumburg, Naperville. "Presence: people in or regularly in your locations."
- **Schedule:** 24/7 (the business answers 24/7). Bid up nights/weekends in winter only if the data supports it.
- **Ad groups → landing pages:**
  | Ad group | Example keywords (phrase/exact) | Landing page |
  |---|---|---|
  | Furnace repair | "furnace repair chicago", "furnace not working", "no heat chicago", "furnace repair near me" | /furnace-repair-chicago/ (suburbs → /furnace-repair-<city>/) |
  | Boiler repair | "boiler repair chicago", "steam boiler repair", "radiator not heating" | /boiler-repair/ |
  | Emergency HVAC | "emergency hvac chicago", "24 hour furnace repair", "emergency heating repair" | /emergency-hvac/ |
  | AC repair (Apr–Sep) | "ac repair chicago", "air conditioner not cooling" | /ac-repair-chicago/ |
- **Negative keywords:** jobs, career, salary, training, school, diy, how to become, manual, parts, wholesale, free, cheap furnace for sale, home depot, lowes, used, rent a, apartment for rent.
- **Responsive search ad (Furnace repair), headlines (≤30 chars):** Furnace Repair in Chicago · No Heat? Call 24/7 · NATE-Certified Technicians · City of Chicago Licensed · Diagnosis Before Any Work · Price Before Repairs Start · Boilers, Furnaces & AC · Call (773) 644-8227 · Book Online in a Minute · Chicago Aircare Pro
- **Descriptions (≤90 chars):** "No heat? Our NATE-certified techs answer 24/7. You approve the price before any repair." · "Furnaces, steam and hot-water boilers in Chicago homes and two-flats. Call or book online."
- **Assets:** call asset (24/7), sitelinks (Emergency, Boiler Repair, Free Estimate, Comfort Club), callouts (24/7 · NATE & EPA 608 · BBB Accredited · Licensed #3065598 · Financing via Optimus), structured snippet (Services: Furnaces, Boilers, AC, Heat Pumps, Mini-Splits).

## Campaign 2: Replacement / Free estimate (draft)
Keywords: "furnace replacement chicago", "new furnace cost chicago", "boiler replacement", "heat pump installation chicago" → /free-estimate/ and /furnace-installation-<city>/. Mention "Financing through Optimus, subject to credit approval".

## Budgets
**Owner budget (2026-11-23): $1,000** (read as per month, all channels; owner to confirm). **Olivia Bennett's proposed split, owner approves each change:**

| Channel | Monthly | How it's set | Why |
|---|---|---|---|
| Local Services Ads (Lauren Hayes) | **$600** | ≈ $140/week (LSA uses weekly budgets) · Maximize leads | Pay per lead, highest-intent calls; LSA is live on the new account. Unspent if no leads come in. |
| Meta (Ava Martinez) | **$300** | $10/day, call ads | Owner wants Meta; replacement + boiler/steam + retargeting. Plan: `meta-launch-plan.md` |
| Reserve | **$100** | not spent | Goes to whichever channel brings booked jobs; Google Search (Grace Whitman) waits until LSA is producing |

**Yelp Ads (owner, 2026-11-24): $15/day (≈ $450/30 days)** on the new Yelp page. That's above the $1,000 split: owner to choose option A (add on top, ~$1,350/month total), B (stay at $1,000: LSA $400 · Meta $150 · Yelp ~$450) or C (Yelp smaller). Plan and setup: `yelp-ads-plan.md`.

Review after 14 days with real numbers (calls, booked jobs, cost per lead). If LSA stays silent, fix it first (`lsa-no-leads-checklist.md`) before moving more money.

## What the team needs from the owner
1. Monthly ad budget (total) and which channels to start with (recommended: LSA + Google Search).
2. Google Ads account: add the team as a user, or create the account and share access.
3. LSA signup (owner identity, license, insurance; Google does the checks).
4. Comfort Club price (for Meta seasonal ads).
5. Approval for each launch and each budget change.

## Reporting
Daily report (when accounts are connected): spend, calls, bookings, cost per lead, top search terms, new negatives. Weekly: what we changed and why.
