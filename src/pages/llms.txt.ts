/**
 * /llms.txt: plain-text summary for AI assistants (ChatGPT, Gemini, Perplexity, Copilot).
 * Elena Brooks + Maya Lin. Built from the same data as the site (business.ts, services.ts), so it never drifts.
 * Only verified facts from business.ts; no prices, response times or ratings.
 */
import type { APIRoute } from 'astro';
import { business } from '../data/business';
import { categories, servicesIn } from '../data/services';
import { getPosts } from '../data/blog';

export const GET: APIRoute = async () => {
  const base = business.url.replace(/\/$/, '');
  const posts = await getPosts();
  const lines = [
    `# ${business.name}`,
    '',
    `> ${business.displayName} is a residential heating and cooling (HVAC) company serving Chicago and nearby suburbs, available 24/7. Furnace, boiler (hot-water and steam), heat pump, air conditioning, mini-split and indoor air quality repair, installation and maintenance.`,
    '',
    `- Phone (calls and texts, 24/7): ${business.phoneDisplay}`,
    `- Website: ${base}/`,
    `- Online booking: through the website (Housecall Pro)`,
    `- Email: ${business.email}`,
    `- Service area: ${business.serviceAreas.map((a) => a.name).join(', ')}`,
    `- Credentials: ${business.credentials.join('; ')}`,
    `- Brands serviced: ${business.brandsServiced.join(', ')}`,
    ...(business.financingPartner ? [`- Financing: through ${business.financingPartner}, subject to credit approval`] : []),
    '- Approach: diagnosis first, options with prices before any work, repair what can be repaired.',
    '',
    '## Key pages',
    `- [24/7 emergency HVAC](${base}/emergency-hvac/): no heat, no cooling, boiler won't fire`,
    `- [Chicago HVAC service](${base}/hvac-chicago/)`,
    `- [Service areas](${base}/service-areas/): Chicago neighborhoods and suburbs`,
    `- [Free estimate on new systems](${base}/free-estimate/)`,
    `- [Comfort Club maintenance plan](${base}/maintenance-plan/)`,
    `- [Chicago homeowner's HVAC guide](${base}/chicago-hvac-homeowner-guide/)`,
    `- [About](${base}/about/) · [Contact](${base}/contact/) · [FAQ](${base}/faq/)`,
    '',
    ...categories.flatMap((c) => [`## ${c.name}`, ...servicesIn(c.name).map((s) => `- [${s.name}](${base}/${s.slug}/)`), '']),
    '## Areas',
    ...business.serviceAreas.map((a) => `- [HVAC in ${a.name}](${base}/hvac-${a.slug}/)`),
    '',
    '## Homeowner guides',
    ...posts.slice(0, 40).map((p) => `- [${p.data.title}](${base}/${p.id}/)`),
    '',
  ];
  return new Response(lines.join('\n'), { headers: { 'content-type': 'text/plain; charset=utf-8' } });
};
