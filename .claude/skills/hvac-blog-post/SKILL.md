---
name: hvac-blog-post
description: Write the daily blog post or refresh a migrated post for CHICAGO AIRCARE PRO, following the editorial calendar, with keyword targeting, FAQ schema, internal links, a real job photo and a matching Google Business Profile post draft. Use for every Mon/Wed/Fri new post and Tue/Thu refresh. Owner: Maya Lin, with Elena Brooks (links/schema), Rachel Morgan (CTAs) and Hannah Carter (GBP draft).
---

# Daily HVAC blog post (Maya Lin)

## Pick the item
- Today's row in `marketing/content/editorial-calendar.md`. Skip rows flagged **O** (needs owner details) and move the next item up.
- Run the `keyword-research` skill for the topic: one primary keyword, 3–6 secondary, a target URL that doesn't collide with an existing page.

## Find the real questions first (owner rule, 2026-11-26)
The owner wants every post built on what people actually type into Google, answered the way a technician would answer a homeowner. Before writing:
1. **Autocomplete questions:** `node scripts/keyword-ideas.mjs "<topic>" | grep -iE "^\| (how|why|what|can|should|is|does|do|when|where|will|my )"` plus the topic with Chicago/area names. Keep the exact wording people use ("furnace condensate line keeps freezing", "can a cracked heat exchanger be repaired").
2. **Search Console:** queries already reaching the site for this topic (`git show origin/seo-data:gsc/latest.json`, topQueries/localQueries).
3. **Pick 5–8 real questions.** The main one becomes the title and quick answer; the others become H2s (in the searcher's words) or FAQs. Note them in the report under Maya Lin.
4. Answer each in the first one or two sentences under its heading, then explain. No question gets a vague answer.

## Sound like a person (owner rule, 2026-11-26)
Write like an experienced Chicago technician explaining it at the kitchen table:
- Start with the situation the reader is in ("It's 6 a.m., the house is 58 degrees and the furnace clicks but won't light"), not a definition or "In today's world".
- Short sentences, contractions, plain words. Say what you'd actually check, in the order you'd check it.
- Real Chicago detail where it fits: two-flats sharing a boiler, bungalow attics, gangway condensers, lake-effect cold, Peoples Gas / ComEd.
- Use the owner's real job details and photos when he sends them ("Last winter in a Rogers Park two-flat…"). **Never invent** a job, customer, quote or number to sound human.
- Cut AI tells: no em dashes; no "delve", "navigate", "crucial", "comprehensive", "in conclusion", "it's important to note", "whether you're… or…"; no stacked adjectives; no summary paragraph repeating the post; no same-length bullet lists everywhere.
- Before shipping, read it out loud (or run the `seo-content` skill's AI-phrasing cleanup). If a sentence sounds like a brochure, rewrite it.

## Write it
- Follow `marketing/content/post-template.md` exactly (frontmatter, 900–1,500 words, body sections). File: `src/content/blog/<keyword-slug>.md`; URL `/<keyword-slug>/`. Some migrated posts use JSON frontmatter: keep the format of the file you edit.
- Primary keyword in title (≤ 60 chars), description (≤ 160), first 100 words and one H2. Answer the query in `quickAnswer`.
- Chicago angle: housing types, seasons, utilities. Safe homeowner checks, and clearly when to stop and call (gas smell, CO alarm, no heat in freezing weather).
- `intent: emergency` for no-heat/no-cool/CO/gas problems (Call leads), `planned` otherwise.
- `faqs`: 3–5, answers visible (schema generated). `related`: 2 services, 1 area page, 1 post.
- `photo`: a key from `src/data/photos.ts` that truly matches (owner's real photos only).
- **Refresh days**: update facts, add missing sections/FAQs, set `updatedDate`, strengthen title/H1 if Search Console shows position 5–20 or low CTR. Keep the URL.

## Never
Prices, response times, statistics, rebate amounts, reviews, guarantees or customer stories the owner hasn't confirmed. Rebates/incentives: "check current eligibility" and link the official source. No stock photos, no keyword stuffing.

## Then
1. GBP draft in `marketing/content/gbp-post-drafts.md` (Hannah Carter): ≤ 1,500 chars, one CTA (Call or Learn more → the post URL), no prices or phone-number stuffing.
2. Mark the calendar row ✍.
3. Link to the new post from one relevant service or area page (Elena Brooks) so it's not an orphan.
4. Verify: check + build 0 errors · `site-metrics` (orphans 0, one H1, meta ≤ 160) · open `/<slug>/` in the preview on mobile.
5. Report under Maya Lin (title, URL, primary keyword, word count).

## Unslop (owner rule, 2026-11-21)
Before shipping, apply `marketing/unslop-style.md`: no em dashes or filler words in visible copy, facts instead of trust adjectives, specific Chicago detail, varied rhythm; in design no label over every heading, no icon box on every item, varied section layouts, real photos first.
