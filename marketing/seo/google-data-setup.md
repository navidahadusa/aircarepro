# Free Google data setup: Search Console + GA4 (owner, once, ~10 minutes)

No paid connector. GitHub Actions (`.github/workflows/seo-daily.yml`) pulls the data every morning at 12:20 UTC with one Google service account, and saves it to the `seo-data` branch (`gsc/latest.md`, `ga4/latest.md`). Every team session and the 7:45 daily run read it from there.

1. **Google Cloud project** (free): https://console.cloud.google.com → project picker → **New project** → name `aircarepro-data` → Create.
2. **Enable 3 APIs** (APIs & Services → Library, search and click **Enable** on each):
   - Google Search Console API
   - Google Analytics Data API
   - Google Analytics Admin API
3. **Service account:** IAM & Admin → **Service accounts** → Create → name `agency-reports` → Done (no roles needed).
4. **Key:** open the service account → **Keys** → Add key → Create new key → **JSON** → a `.json` file downloads. Never paste it in chat or email.
5. **GitHub secret:** github.com/navidahadusa/aircarepro → Settings → Secrets and variables → Actions → **New repository secret** → Name `GSC_SERVICE_ACCOUNT_JSON` → paste the whole contents of the JSON file → Add secret.
6. **Search Console access:** search.google.com/search-console → property `https://aircareprohvac.com/` → Settings → **Users and permissions** → Add user → the service-account email (ends with `@aircarepro-data.iam.gserviceaccount.com`) → permission **Full** → Add.
7. **GA4 access:** analytics.google.com → Admin → **Property access management** → + → Add users → the same email → role **Viewer** → Add.
8. **Test:** GitHub → Actions → "SEO daily (Search Console)" → **Run workflow**. After ~1 minute the run summary shows the Search Console and GA4 tables, and the `seo-data` branch has `gsc/` and `ga4/`.

Property IDs are found automatically (Search Console: Domain or URL-prefix property; GA4: the property with measurement ID `G-J25SG73ES5`).
