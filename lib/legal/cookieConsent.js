import {
  COOKIE_CONSENT,
  COOKIE_CONSENT_STORAGE_KEY,
} from '@/lib/legal/siteLegal';

export function getCookieConsent() {
  if (typeof window === 'undefined') return null;

  try {
    const value = window.localStorage.getItem(COOKIE_CONSENT_STORAGE_KEY);
    if (value === COOKIE_CONSENT.all || value === COOKIE_CONSENT.essential) {
      return value;
    }
  } catch {
    return null;
  }

  return null;
}

export function hasCookieConsentChoice() {
  return getCookieConsent() !== null;
}

export function hasAcceptedNonEssentialCookies() {
  return getCookieConsent() === COOKIE_CONSENT.all;
}

export function setCookieConsent(value) {
  if (typeof window === 'undefined') return;

  try {
    window.localStorage.setItem(COOKIE_CONSENT_STORAGE_KEY, value);
  } catch {
    return;
  }

  window.dispatchEvent(new CustomEvent('cookie-consent-updated', { detail: value }));
}
