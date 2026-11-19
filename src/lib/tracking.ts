/**
 * Conversion tracking hooks (client-side). Pushes to window.dataLayer so GTM can
 * fan events out to GA4, Google Ads, Meta, call tracking, etc.
 * Event names and parameters are documented in marketing/lead-gen/tracking-plan.md.
 */

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
  }
}

export type TrackEvent =
  | 'lead_emergency'
  | 'lead_quote'
  | 'lead_maintenance'
  | 'lead_quick'
  | 'click_to_call'
  | 'click_to_sms'
  | 'click_book_online'
  | 'click_form_link'
  | 'form_start'
  | 'form_error';

export function track(event: TrackEvent, params: Record<string, unknown> = {}): void {
  if (typeof window === 'undefined') return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...params, page_path: location.pathname });
  if (import.meta.env.DEV) console.info('[track]', event, params);
}

/** Captures UTM / gclid / fbclid on landing so lead forms can attribute source. */
export function captureAttribution(): Record<string, string> {
  const keys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'gclid', 'gbraid', 'wbraid', 'fbclid', 'msclkid'];
  const stored: Record<string, string> = JSON.parse(sessionStorageSafe('get', 'acp_attr') || '{}');
  const params = new URLSearchParams(location.search);
  for (const k of keys) {
    const v = params.get(k);
    if (v) stored[k] = v;
  }
  if (!stored.landing_page) stored.landing_page = location.pathname;
  if (!stored.referrer && document.referrer) stored.referrer = document.referrer;
  sessionStorageSafe('set', 'acp_attr', JSON.stringify(stored));
  return stored;
}

function sessionStorageSafe(op: 'get' | 'set', key: string, value?: string): string | null {
  try {
    if (op === 'get') return sessionStorage.getItem(key);
    sessionStorage.setItem(key, value ?? '');
  } catch {
    /* storage blocked — attribution degrades gracefully */
  }
  return null;
}

/** Wires every [data-track] element (e.g. tel:/sms: links) to the dataLayer. */
export function bindClickTracking(root: ParentNode = document): void {
  root.querySelectorAll<HTMLElement>('[data-track]').forEach((el) => {
    if (el.dataset.trackBound) return;
    el.dataset.trackBound = '1';
    el.addEventListener('click', () => {
      track(el.dataset.track as TrackEvent, { placement: el.dataset.placement ?? 'unknown' });
    });
  });
}
