# Team skills

Project skills (written for this repo): `keyword-research`, `local-seo-page`, `hvac-blog-post`, `lead-gen-landing`, `web-design-qa`, `ai-search-visibility`, `rank-tracking`, `review-engine`, `competitor-gap`.

## Design skills added 2026-11-25 (owner request)
Third-party, open source, used by Chloe Vance (UI/UX & CRO) and Sophia Reynolds. Project rules in `CLAUDE.md` and `marketing/unslop-style.md` always take precedence.

| Skill folder | Source | License | Installed | Left out on purpose |
|---|---|---|---|---|
| `impeccable/` | github.com/pbakaus/impeccable @ b49177d | Apache-2.0 (`LICENSE`, `NOTICE.md`) | `SKILL.md`, `reference/` | `scripts/` (downloads and runs a binary), hooks, live mode |
| `ui-ux-pro-max/` | github.com/nextlevelbuilder/ui-ux-pro-max-skill @ 8db3633 | MIT | everything (instructions, CSV data, local Python search scripts) | none |
| `design-taste-frontend/` (Taste skill) | github.com/Leonxlnx/taste-skill @ d1a2bb4 | MIT | `SKILL.md`, `references/`, `library/` | `scripts/`, 38 MB `assets/`, the Stop hook in its frontmatter |
| `emil-design-eng/`, `improve-animations/`, `review-animations/`, `animation-performance/`, `animation-vocabulary/`, `find-animation-opportunities/`, `choreograph/`, `break-ui/` | github.com/emilkowalski/skill @ 64eb3de | MIT | the web skills | Swift, Expo and native-mobile skills (not used on this site) |

Each third-party `SKILL.md` has a short project note under its frontmatter. To update: re-copy from the source repo, keep the exclusions and the note.

## SEO skills added 2026-11-25 (owner request)
| Skill folder | Source | License | Installed | Left out on purpose |
|---|---|---|---|---|
| `seo/` (router for `/seo audit`, `/seo local`, `/seo backlinks`, `/seo geo`), `seo-audit/`, `seo-local/`, `seo-geo/`, `seo-backlinks/`, `seo-schema/`, `seo-technical/`, `seo-page/`, `seo-content/` | github.com/AgriciDaniel/claude-seo @ 468ed5b | MIT (`LICENSE.txt` in each folder) | `SKILL.md` + references | The plugin launcher and ~60 Python scripts, the PostToolUse schema hook, subagents, extensions and paid-API integrations (DataForSEO, Moz, Ahrefs, Firecrawl). The project's own Search Console/GA4 pipeline, build, site-metrics, Lighthouse and Playwright cover those checks. |

**Not installed: github.com/younesbenallal/seo-skills.** The repository has no license, and this repository is public, so copying its files here would redistribute them without permission. Its `backlink-outreach` skill also covers niche edits and link exchanges, which conflict with the no-paid-links rule. The owner can install it on their own computer for personal use (`npx skills add …`). The team covers the same jobs with `marketing/backlinks/30-day-presence-plan.md`, the daily Search Console playbook, `hvac-blog-post` and `local-seo-page`.
