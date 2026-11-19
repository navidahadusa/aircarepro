# Team design review: 2026-11-19

The owner asked for a better visual design and for the team's opinion. Each specialist reviewed the live preview without changing files. Sophia Reynolds summarized the results. Screenshots were taken in the session (not committed).

## Consensus
1. **Local content first.** Area pages carry less unique local copy than the live WordPress pages: about 550 words versus about 850 (Elena). Port it with, or before, the redesign.
2. **Fewer, clearer CTAs.** Up to 7 call/text/book links show above the fold on desktop. Set one primary action per page type (Rachel, Chloe).
3. **Replace emoji with an SVG icon set and add Chicago-specific illustration** (skyline, greystone, two-flat, bungalow) until real photos exist. No stock photos posing as the team (Chloe, Maya).
4. **Load a real typeface.** Inter is declared but never loaded (Chloe, Elena).
5. **Lighter header and footer.** Merge the emergency and trust strips; slim the footer from 121 links to hubs plus area groups (Chloe, Elena).
6. **Two-step forms; shorter emergency form; quick form gets SMS consent; per-funnel thank-you pages** (Rachel).
7. **Lead endpoint is a blocker.** Forms must not fire conversions until a real endpoint confirms receipt (Rachel).

## Visual directions (Chloe Vance)
| Direction | Palette | Type | Feel |
|---|---|---|---|
| **A. Lakefront Trust** (recommended) | navy `#0B2545`, lake `#13315C`, ice `#EEF4ED`, CTA amber `#E8590C`→`#C2410C`, red `#B42318` | Plus Jakarta Sans + Inter | Evolves the current brand; SVG skyline and lake line; outlined icon cards; "How every visit works" timeline |
| B. Two-Flat Craft | brick `#8C2F1B`, cream `#FAF6EF`, charcoal `#1F2328`, brass `#B7791F` | Fraunces + Source Sans 3 | Heritage trade; illustrated greystones, bungalows and two-flats; license ribbon badge |
| C. Dispatch Modern | ink `#0A0F1A`, signal orange `#EA580C` (dark text), steel `#E2E8F0` | Archivo + Inter | Bold, emergency-first; giant phone number; urgent/planned toggle |

Chloe's recommendation: **A**, borrowing B's building illustrations for area and boiler pages and its license badge.

## Homepage hero copy options (Maya Lin, verified facts only)
- A: "Furnace, boiler and AC service from one Chicago crew." Diagnosis first; options and prices before any work; call or text 24/7.
- B: "Steam boilers, forced air, central AC: we know Chicago homes." Two-flats, greystones, bungalows; NATE-certified; License #3065598.
- C (Nov–Feb seasonal): "No heat tonight? Call or text, day or night."

## Photo shot list for the owner (Maya Lin)
Team in uniforms (individual and group) · vans, only once wrapped with the new name · steam boiler in a greystone or two-flat basement (sight glass, low-water cut-off) · hot-water boiler and circulators in a bungalow · cast-iron radiators · Comfortmaker install before/after · furnace tune-up with combustion analyzer · condenser on a back porch or gangway · attic mini-split · CO detector test · technician walking a homeowner through options on a tablet · exteriors of greystones, two-flats and bungalows (no house numbers).

## Already fixed (Run 2)
- Header overlap at ≥1366px: header row widened and the duplicate header "Free Estimate" button removed
- CTA contrast raised to WCAG AA (`--cta: #c2410c`, white text 5.2:1)
- Emergency page: duplicate call button removed; the big call button uses `telHref()`
- Mobile bar Quote button and banner "Request dispatch" link now tracked (`click_form_link`); on the emergency page the mobile bar shows "Dispatch"
- Unverified "Factory-backed" claim softened to "Authorized dealer for new equipment"

## Decisions needed from the owner
1. Pick a visual direction: A (recommended), B or C.
2. Pick a hero headline: A, B, or the seasonal C.
3. Photos: can you supply them (shot list above)?
