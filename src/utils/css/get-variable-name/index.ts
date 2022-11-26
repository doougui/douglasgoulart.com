export const getVariableName = (type: string, rawName: string) =>
  `--${type}-${rawName}`;
