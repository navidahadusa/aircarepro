---
name: review-engine
description: Grow and use Google reviews for CHICAGO AIRCARE PRO (the strongest Map Pack and AI-answer signal). Use when the owner sends review screenshots, weekly for the review ask plan, when drafting review replies, or when updating reviews on the site. Owner: Hannah Carter, with Rachel Morgan (SMS/ask flow) and Chloe Vance (site display).
---

# Review engine (Hannah Carter)

## Ask (every completed job)
- Link: `business.googleReviewUrl` · page `/review/` · QR in `marketing/reviews/`.
- Ask template (owner/tech sends from Housecall Pro after the job): short, personal, asks them to mention **what we fixed and their neighborhood/suburb** ("e.g. 'boiler repair in Logan Square'"). Never offer anything in exchange for a review and never ask only happy customers to review (Google policy + FTC).
- Weekly goal: TODO(owner). Suggested: ask 100% of completed jobs.

## Reply (within 48 hours, every review)
- Thank by first name, mention the job and area in natural words, sign "Navid, CHICAGO AIRCARE PRO". 2–3 sentences. No phone numbers or offers.
- Negative review: acknowledge, no arguing, offer to make it right offline. Draft only; the owner posts.
- Drafts go in `marketing/reviews/reply-drafts.md`.

## Use on the site
- New review screenshots from the owner → add **verbatim** to `src/data/reviews.ts` (author as shown, stars, text; excerpt flag if trimmed). Never edit wording, never invent, never add Review/AggregateRating schema for our own reviews.
- Update `reviewsAsOf`. Log review count/rating from screenshots in the daily report (KPI section).

Apply `marketing/unslop-style.md` to anything that ships.
