---
name: ai-search-visibility
description: Get CHICAGO AIRCARE PRO named and cited by AI answers (Google AI Overviews / AI Mode, ChatGPT search, Perplexity, Copilot, Gemini, Siri/Apple). Use weekly, when writing or refreshing any page or post, when the owner asks about "AI ranking" or "show up in ChatGPT", and after any NAP/citation change. Owner: Elena Brooks, with Maya Lin (answers/content), Hannah Carter (entity/citations), Natalie Foster (mentions).
---

# AI search visibility (GEO/AEO), Elena Brooks

AI assistants answer "best HVAC company in Chicago / furnace repair near Lincoln Park" by pulling from (1) pages they can crawl that answer the question directly, (2) the business's entity data (GBP, Bing Places, Apple Business Connect, Yelp, BBB, Facebook) and (3) third-party mentions (reviews, local press, chambers, directories, Reddit). Work all three.

## 1. On-site: be the easiest page to quote
- Every service, area and blog page opens with a **2–3 sentence direct answer** (the `quickAnswer` / intro): who, what, where in Chicago, 24/7, how to reach us. Facts only, no fluff (`marketing/unslop-style.md`).
- Question-style H2s that match how people ask ("How much does furnace repair cost in Chicago?"). Answer in the first sentence under the heading. **Never invent prices**: say what drives the price and that we quote before any work.
- FAQ sections via `FaqSection` (FAQPage schema must match visible text).
- Entity facts identical everywhere: `business.name`, phone, 24/7, license #3065598, areas, services, founder Navid, NATE/EPA 608, BBB, Comfortmaker dealer. Pull from `business.*`, never retype.
- Keep `/llms.txt` (`src/pages/llms.txt.ts`) current when pages, services or areas change.
- `robots.txt` must not block GPTBot, OAI-SearchBot, PerplexityBot, ClaudeBot, Google-Extended, Bingbot, Applebot. Check after any robots change.
- Bing matters for ChatGPT/Copilot: IndexNow pings run on deploy (`scripts/indexnow.mjs`); Bing Places is in the citation queue.

## 2. Entity: one business, same facts everywhere
- Hannah confirms GBP / Bing Places / Apple Business Connect / Yelp / BBB / Facebook show the same NAP, hours, categories and website (`marketing/citations-tracker.md`). Add each live profile URL to `sameAs`.
- `HVACBusiness` JSON-LD single `@id` site-wide (`src/lib/schema.ts`), with `sameAs`, `areaServed`, `hasOfferCatalog`, `founder`.

## 3. Off-site: get mentioned
- Reviews that name the service and neighborhood (see `review-engine`).
- Natalie: chambers, local press, Comfortmaker locator, utility contractor lists, link-worthy guides (heat ordinance, rebates, two-flat boilers).

## 4. Weekly AI visibility check (log, don't guess)
Prompt list in `marketing/seo/ai-visibility-log.md`. When a browser/search tool is available, run each prompt in the engines you can reach and record: engine, date, were we named (Y/N), which competitors were named, which sources were cited. If you can't run an engine, write "not checked". **Never claim we appear without seeing it.** Turn findings into page fixes (cited competitor source types → our gaps) and log them in `marketing/seo/page-actions-log.md`.

## Done when
Direct answer + question H2s + FAQ on the page, entity facts from `business.*`, crawlers allowed, llms.txt updated, log row added. Apply `marketing/unslop-style.md`.
