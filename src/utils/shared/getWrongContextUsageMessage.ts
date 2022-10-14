function firstIsVowel(word: string) {
  return ['a', 'e', 'i', 'o', 'u'].indexOf(word[0].toLowerCase()) !== -1;
}

export function getWrongContextUsageMessage(
  hookName: string,
  providerName: string,
) {
  if (firstIsVowel(providerName)) {
    return `${hookName} must be used within an ${providerName}`;
  }

  return `${hookName} must be used within a ${providerName}`;
}
