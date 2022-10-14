export function getWrongContextUsageMessage(
  hookName: string,
  providerName: string,
) {
  return `${hookName} must be used within a ${providerName}`;
}
