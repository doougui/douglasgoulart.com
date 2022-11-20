export const STORAGE_KEY = 'colorMode';

export const getVariableName = (type: string, rawName: string) =>
  `--${type}-${rawName}`;
