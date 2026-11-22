---
name: rank-tracking
description: Track CHICAGO AIRCARE PRO's Google rankings for the target keyword set and turn movement into page fixes. Use in every daily run (Search Console data), weekly for the full scorecard, and whenever the owner asks "where do we rank" or about the page-one goal. Owner: Elena Brooks, with Rachel Morgan (GA4 leads).
---

# Rank tracking (Elena Brooks)

Target list and goals: `marketing/seo/target-keywords.md` (60-day page-one plan: `marketing/seo/60-day-page-one-plan.md`).

## Sources (real numbers only)
1. **Search Console** (free, daily): `git fetch origin +seo-data:refs/remotes/origin/seo-data && git show origin/seo-data:gsc/latest.md` (+ `gsc/latest.json` for every query). Position is Google's average, by query and page.
2. **Semrush** `position_tracking` / `organic_research` when the account has API units (check `available` first; if `no API units`, say so and skip).
3. **Local_SEO** connector `check_local_page` for on-page local checks; `find_local_searches` for demand (volumes are US-wide).
4. Map Pack position: only from a tool that measures it (Semrush local / geogrid) or owner screenshots. Never estimate.

## Every run
- For each target keyword: current position, previous, change, ranking URL. Write the weekly scorecard to `marketing/seo/rank-scorecard.md` (newest first) on Mondays; daily runs just note big moves (±5) in the report.
- Rules:
  - **Position 4–20** → strengthen that page now (title/H1 with keyword + Chicago area, quick answer, a new FAQ, 2–3 internal links from related pages, real photo).
  - **Wrong URL ranking** (cannibalization) → pick one page, point internal links and anchor text at it.
  - **Impressions but position 40+** → content depth and internal links; check it's in the sitemap and indexed.
  - **Not indexed** → internal links from homepage/hubs; ask the owner to click Request indexing.
- Log each action in `marketing/seo/page-actions-log.md` with a 14-day re-check date.

## Honesty
Report progress against the plan in numbers. If a goal is off-track, say so and say what changes.

Apply `marketing/unslop-style.md` to anything that ships.
