export function getPageUrl() {
  return typeof window !== 'undefined' && window.location.href
    ? window.location.href
    : '';
}
