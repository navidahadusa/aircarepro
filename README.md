# aircarepro

Astro website and AI marketing workflow for a local HVAC business.

```bash
npm install
cp .env.example .env   # set PUBLIC_LEAD_ENDPOINT / PUBLIC_GTM_ID
npm run dev
```

- Site data (NAP, service areas, `sameAs`): `src/data/business.ts`
- Lead funnels: `src/data/leadForms.ts` → `<LeadForm funnel="emergency|quote|maintenance" />`
- Marketing playbooks and trackers: `marketing/`
- AI agents: `.claude/agents/`. Project guide: `CLAUDE.md`
