export function getAbsoluteUrl() {
  return typeof window !== 'undefined' && window.location.origin
    ? window.location.origin
    : '';
}
