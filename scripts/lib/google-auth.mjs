/**
 * Free Google API access with a service account (no paid connector, no dependencies).
 * Key JSON comes from the GitHub secret GSC_SERVICE_ACCOUNT_JSON (one key for Search Console + GA4).
 */
import { createSign } from 'node:crypto';

export function loadKey() {
  const raw = (process.env.GOOGLE_SERVICE_ACCOUNT_JSON || process.env.GSC_SERVICE_ACCOUNT_JSON || '').trim();
  let key = {};
  let parseError = '';
  const tryParse = (text) => { try { return JSON.parse(text); } catch (e) { parseError = e.message; return null; } };
  key = tryParse(raw)
    // Accept a base64-encoded key file too.
    ?? (/^[A-Za-z0-9+/=\s]+$/.test(raw) && raw.length > 100 ? tryParse(Buffer.from(raw, 'base64').toString('utf8')) : null)
    ?? {};
  if (!key.client_email || !key.private_key) {
    // Safe diagnostics: shape only, never the secret's value.
    const why = !raw ? 'the secret is empty'
      : raw.startsWith('{') && parseError ? `the text starts like JSON but is not valid JSON (${parseError}); paste the whole file, nothing more or less`
      : !raw.startsWith('{') ? `the text does not start with "{" (it starts with a ${/^[A-Za-z]/.test(raw) ? 'letter' : 'symbol'}); it may be a file name, an email or an API key instead of the JSON key file`
      : `the JSON has no ${!key.client_email ? '"client_email"' : ''}${!key.client_email && !key.private_key ? ' or ' : ''}${!key.private_key ? '"private_key"' : ''} field (fields found: ${Object.keys(key).join(', ') || 'none'}); make sure it is a *service account* key (type "service_account")`;
    console.error(`Service-account key problem: ${why}. Length: ${raw.length} characters (a real key file is about 2,300).`);
    console.error('Fix: GitHub → Settings → Secrets and variables → Actions → GSC_SERVICE_ACCOUNT_JSON → Update → paste the full contents of the downloaded .json key file.');
    process.exit(1);
  }
  return key;
}

const b64 = (o) => Buffer.from(typeof o === 'string' ? o : JSON.stringify(o)).toString('base64url');

/** Returns an authorized JSON fetch helper for the given OAuth scopes. */
export async function googleClient(key, scopes) {
  const now = Math.floor(Date.now() / 1000);
  const unsigned = `${b64({ alg: 'RS256', typ: 'JWT' })}.${b64({ iss: key.client_email, scope: scopes.join(' '), aud: 'https://oauth2.googleapis.com/token', iat: now, exp: now + 3600 })}`;
  const sig = createSign('RSA-SHA256').update(unsigned).sign(key.private_key).toString('base64url');
  const r = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST', headers: { 'content-type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({ grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer', assertion: `${unsigned}.${sig}` }),
  });
  if (!r.ok) throw new Error(`Google token: ${r.status} ${await r.text()}`);
  const token = (await r.json()).access_token;
  return async (method, url, body) => {
    const res = await fetch(url, { method, headers: { authorization: `Bearer ${token}`, 'content-type': 'application/json' }, body: body ? JSON.stringify(body) : undefined });
    const text = await res.text();
    if (!res.ok) throw new Error(`${method} ${url.replace(/\?.*/, '')}: ${res.status} ${text.slice(0, 300)}`);
    return text ? JSON.parse(text) : {};
  };
}
