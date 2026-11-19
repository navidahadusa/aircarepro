# Marketing workspace

Version-controlled playbooks, trackers and templates for the AI marketing agency in `.claude/agents/`.
Site-facing data (NAP, `sameAs`, service areas, form fields) lives in `src/data/`. This folder holds the strategy and the operational trackers.

| Folder | Owner agent | Contents |
|---|---|---|
| `citations/` | `local-citations-specialist` | NAP standard, prioritized directory checklist, citation tracker (CSV) |
| `backlinks/` | `backlink-linkbuilder` | Opportunity tracker (CSV), outreach templates, link-worthy asset ideas |
| `lead-gen/` | `lead-gen-architect` | Funnel specs, qualification fields & scoring, conversion tracking plan |

**Start here:** `site-audit-2026-11-19.md` (live-site audit), then the three action plans:
`citations-tracker.md` · `backlink-outreach.md` · `lead-gen-funnels.md`

**Conventions**
- CSVs: UTF-8, comma-separated, header row, one record per line, ISO dates (`YYYY-MM-DD`). They open in Excel/Sheets and diff cleanly in git.
- Never commit secrets, logins or customer PII to this folder. Track *where* a login lives, not the login itself.
- `TODO(business-details)` marks placeholders that need real data.
