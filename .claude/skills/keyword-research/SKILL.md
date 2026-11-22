---
name: keyword-research
description: Find and prioritize keywords for CHICAGO AIRCARE PRO (Chicago HVAC). Use before writing or refreshing any page or post, when choosing the next blog topic, when a page ranks 5–20 in Search Console, or when the owner asks "what should we rank for". Owner: Elena Brooks (Local SEO), with Maya Lin (content) and Rachel Morgan (ads keywords).
---

# Keyword research (Elena Brooks)

Goal: one clear **primary keyword per URL**, chosen from real data, mapped in `marketing/seo/keyword-map.md`.

## Data sources, best first (use every one that is available; say which you used)
1. **Search Console** (real impressions, clicks, position for aircareprohvac.com):
   - **Primary (free, every session and the daily run):** `git fetch origin +seo-data:refs/remotes/origin/seo-data && git show origin/seo-data:gsc/latest.md` (JSON: `gsc/latest.json`; GA4 traffic: `ga4/latest.md`).
   - **Optional:** Windsor.ai MCP (`mcp__Windsor_ai__get_data`, connector `searchconsole`) only if it is still connected and working; it is a paid service after its trial, so never depend on it.
   - If neither is available, say "Search Console not connected yet". Never estimate. Save a dated snapshot to `marketing/seo/gsc/YYYY-MM-DD.md` when you pull data live.
2. **Connected keyword tools**, if their tools are loaded in this session (check before claiming):
   - Semrush (`keyword_research`, `organic_research`): volume, difficulty, competitor keywords
   - Ahrefs: volume, keyword difficulty, competitor backlinks
   - HarborRank SEO: keyword research, Google Maps rank, local SEO
   - **Local_SEO connector** (free, no account): `find_local_searches` (business + city → real Google searches with monthly volumes, counted US-wide) and `check_local_page` (on-page local check of a URL). Use it for every new page/post and each area page.
   - Semrush returns `no API units` when the plan is out of units: say so and fall back to the free sources.
   Use only numbers these tools return. Record the tool and date next to each number.
3. **Google Autocomplete** (real phrases people type, **no volumes**):
   ```
   node scripts/keyword-ideas.mjs "<seed>" --out marketing/seo/keyword-ideas/<seed-slug>.md
   ```
   Options: `--areas evanston,skokie` · `--no-areas` · `--json`. Needs `suggestqueries.google.com` allowed in the environment network.
4. **The site itself**: `src/data/services.ts`, `src/data/areaContent.ts`, `src/content/blog/`, `src/content/local/`, to avoid cannibalization.

## Process
1. **Seeds**: the service or problem (e.g. "boiler repair", "no heat", "furnace short cycling"), plus the business's areas (`business.areas` in `src/data/business.ts`).
2. **Expand**: run the Autocomplete script; pull Search Console queries that contain the seed; pull tool data if connected.
3. **Filter**: drop phrases for other cities or states, DIY-only queries we can't serve, commercial (non-residential) HVAC, brands we don't service, and anything off-topic.
4. **Classify** each keyword: intent (emergency / commercial / informational) and local (names our area or "near me").
5. **Map** to one URL: existing page if it fits (area `/hvac-<area>/`, service `/<service>/`, service+city `/<service>-<city>/`, post `/<slug>/`), else propose a new post or page. One primary keyword per URL. If two URLs target the same keyword, flag cannibalization and pick one.
6. **Prioritize**:
   - Highest: emergency + local (no heat, boiler not working, furnace repair <area>)
   - High: commercial + local (installation, replacement, cost <area>), and Search Console queries at position 5–20
   - Medium: informational that supports a money page (link from the post to the service and area page)
7. **Write it down**: update `marketing/seo/keyword-map.md` (primary, secondary, title, H1 targets) and, for new topics, add rows to `marketing/content/editorial-calendar.md`.

## Rules
- **Never invent search volumes, difficulty or rankings.** If no tool returned a number, the column says "not measured".
- Keywords go in title, H1, first 100 words, one H2 and the meta description, written naturally. No stuffing, no city-swapped duplicate pages.
- Paid-ads keyword lists go to Rachel Morgan in `marketing/ads/ads-plan.md` (with negatives). No ad spend without the owner's OK.

## Output
A short table (keyword · intent · local · source · target URL · action) plus the file changes above, summarized in the daily report under Elena Brooks.
