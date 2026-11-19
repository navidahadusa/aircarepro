# Blog post template (Maya Lin; CTAs by Rachel Morgan; schema/links by Elena Brooks)

Create `src/content/blog/<keyword-slug>.md`. The URL becomes `/<keyword-slug>/`. The build fails if the slug collides with a service, area or company page.

```yaml
---
title: "Keyword-led headline (≤ 60 chars ideally)"
description: "≤ 160 chars, the answer plus a Chicago angle"
pubDate: 2026-11-20
updatedDate: 2026-11-20
category: heating        # heating | cooling | air-quality | chicago-homeowners
intent: emergency        # emergency = Call leads; planned = Book online leads
quickAnswer: "2–3 sentence direct answer."
takeaways: ["…", "…", "…"]
faqs:
  - { q: "…?", a: "…" }  # 3–5, answers visible on the page (schema is generated)
related: ["furnace-repair", "carbon-monoxide-safety", "hvac-rogers-park", "furnace-wont-turn-on"]
photo: gasPressureTest   # optional key from src/data/photos.ts (owner's real photos only)
draft: false
---
```

## Body sections (900–1,500 words; guides up to 2,000)
1. Open with the problem in a Chicago context (housing type, season)
2. What causes it (H2s per cause)
3. Safe checks a homeowner can do, and when to stop
4. What our technician does: diagnosis first, options and prices before any work
5. When it's urgent: tie into 24/7 call (the page template adds the emergency box and CTAs automatically)

The template already adds: breadcrumbs, BlogPosting + FAQPage + BreadcrumbList schema, author (Navid, NATE-certified), the safety callout for emergency posts, quick-answer and takeaways boxes, an intent-aware booking panel, related services, more posts, and tracked CTAs (`data-placement="blog_<slug>_…"`).

## Never
Prices, response times, statistics, reviews, guarantees or customer stories the owner hasn't confirmed. Stock photos posing as the team. Keyword-stuffed or city-swapped duplicates.
