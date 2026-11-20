# Google Business Profile API setup (owner, once) · Hannah Carter + Rachel Morgan

Free. Gives the team a daily read-only report: calls from the profile, website clicks, direction requests, Maps/Search views, the search keywords that showed the profile, and reviews (with "needs a reply" flags). Output: `seo-data` branch → `gbp/latest.md`.

**Read-only rule:** Google offers only one GBP permission (`business.manage`), which could also edit. The team uses it for reports only. Any profile edit or post needs the owner's explicit OK in a conversation.

## Step 1: Request API access (Google must approve; can take several days)
1. Google Cloud console → the same project as Search Console (`aircarepro-data`) → **Dashboard**: copy the **Project number**.
2. Open the GBP API access request form: https://developers.google.com/my-business/content/prereqs → "Request access to the API" → fill it in with the business email that manages the profile, the project number, and the reason "Reporting for our own business profile (performance and reviews)".
3. Wait for Google's approval email. Until then the APIs answer with quota 0 / 403, and the daily report says so.

## Step 2: Enable the APIs (APIs & Services → Library → Enable)
- My Business Account Management API
- My Business Business Information API
- Business Profile Performance API
- Google My Business API (for reviews; it appears after approval)

## Step 3: OAuth client (browser only, no code)
1. APIs & Services → **OAuth consent screen** → External → app name `Aircare reports` → your email → Save. Then **Publish app → In production**. (In "Testing", Google expires the login after 7 days. An unverified production app for your own account is fine; you'll see a "Google hasn't verified this app" warning: Advanced → Continue.)
2. APIs & Services → **Credentials → Create credentials → OAuth client ID** → type **Web application** → under *Authorized redirect URIs* add `https://developers.google.com/oauthplayground` → Create. Keep the **Client ID** and **Client secret** window open.

## Step 4: Refresh token (OAuth Playground)
1. Open https://developers.google.com/oauthplayground → ⚙️ (top right) → tick **Use your own OAuth credentials** → paste the Client ID and Client secret.
2. Left box "Input your own scopes": `https://www.googleapis.com/auth/business.manage` → **Authorize APIs** → sign in with the Google account that **manages the Business Profile** → Allow.
3. Click **Exchange authorization code for tokens** → copy the **Refresh token**.

## Step 5: GitHub secrets (never paste them in chat)
GitHub → Settings → Secrets and variables → Actions → New repository secret, three times:
- `GBP_OAUTH_CLIENT_ID`
- `GBP_OAUTH_CLIENT_SECRET`
- `GBP_REFRESH_TOKEN`

Then tell Sophia "GBP done". She runs the workflow and reports the first numbers.

## Notes
- The profile is found automatically (optional repo variable `GBP_LOCATION`).
- Rebrand: the report shows the profile's current name and its Maps link. `sameAs` in `business.ts` stays TODO until the name shows **CHICAGO AIRCARE PRO** and the owner confirms the URL.
