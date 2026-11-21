# Daily Google data playbook (Search Console + GA4)

**Owner decision (2026-11-21):** every day the team checks Google Analytics and Search Console. Based on the data, they strengthen pages or fix content. This step is **required in every daily run** and comes before the day's new content.
Lead: **Elena Brooks** (Search Console) and **Rachel Morgan** (GA4). Fixes are made by **Maya Lin** (content), **Chloe Vance** (layout and CTAs), **Hannah Carter** (local signals). Approved by **Sophia Reynolds**.

## 1. Read the data (every run)
```bash
git fetch origin +seo-data:refs/remotes/origin/seo-data
git show origin/seo-data:gsc/latest.md    # + gsc/latest.json (all queries, pages, index status)
git show origin/seo-data:ga4/latest.md    # + ga4/latest.json
```
- Check the date at the top. If the data is **more than 2 days old** or missing, say so in the report and use no numbers. **Never estimate.**
- Compare with yesterday's file in `marketing/seo/gsc/` and the open rows in `page-actions-log.md`.

## 2. Act on it (rules, in priority order)
| Signal in the data | What to do | Who |
|---|---|---|
| Key page **not indexed** (noindex, "discovered", "unknown", "crawled – not indexed") | Add internal links from strong pages (home, hubs, area pages), check content isn't thin or duplicate, put it on the owner's **Request indexing** list | Elena |
| Query at **position 5–20** with impressions | Strengthen that page: query in the title, H1 or an H2, a section that answers it, an FAQ, and internal links from related pages | Elena + Maya |
| **Many impressions, CTR under 1%** (page at position ≤ 10) | Rewrite the title and meta description (benefit + place, ≤ 60/160 chars). Don't change the URL | Elena |
| Page with the **most impressions** this week | Check it's the strongest version: local proof, FAQs, clear Call/Book CTA | Elena + Chloe |
| Query lands on the **wrong page** (e.g. a blog post for "near me") | Link from the post to the right service/area page with that query as anchor text; adjust the content of both | Elena |
| GA4 landing page **with sessions but no lead events/booking clicks** | Improve CTAs: Call/Text above the fold, booking panel, emergency box for urgent topics | Rachel + Chloe |
| GA4 page with **low engagement** (engaged sessions much lower than sessions) | Shorter intro, quick answer at the top, photo, clearer headings | Maya + Chloe |
| **New query** we have no page for (local or service) | Add it to `marketing/content/editorial-calendar.md` or the keyword map | Maya + Elena |
| Page **lost positions** (vs the last snapshot or the log) | Check what changed (our edits, title), fix or roll back | Elena |
| City shows up in GA4/GSC where we have a thin page | Strengthen that area page (local-seo-page skill) | Elena |

Keep to **2–4 page fixes per day**, picked from the highest-impression pages and queries first. Don't touch a page again within **14 days** of a change unless something breaks. Google needs time to re-crawl.

## 3. Log and measure
- Each fix gets a row in `marketing/seo/page-actions-log.md`: date, page, query, position/impressions **before**, what changed, and a check date (+14 days).
- On the check date, fill in **after** from the newest data: up / flat / down. What works gets repeated on similar pages.
- Findings for the day: `marketing/seo/gsc/YYYY-MM-DD.md`.

## 4. Report
The daily report's KPI section shows (real numbers only, today vs the previous snapshot):
- Search Console: clicks, impressions, CTR, average position, indexed key pages, top 5 pages, queries in positions 5–20.
- GA4: sessions, users, engaged sessions, organic search sessions, booking clicks, key events, top landing pages.
- **"Data → action"**: each fix today and the data that triggered it.
- Owner list: URLs for "Request indexing".

## Limits
- Google has no API for "Request indexing" on normal pages. The owner clicks it in Search Console.
- With few impressions, one day's movement is noise. Base decisions on 28-day data and on trends across several snapshots.
- No invented facts to "strengthen" a page: no prices, response times, stats, reviews or customer stories.
