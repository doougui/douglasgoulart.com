import { SortTypesKeys } from './types';

export const isValidSort = (
  allowedSortOptions: SortTypesKeys[],
  value: unknown,
): value is SortTypesKeys => {
  return (
    typeof value === 'string' &&
    allowedSortOptions.includes(value as SortTypesKeys)
  );
};

export const isValidSearch = (value: unknown): value is string => {
  return typeof value === 'string';
};

export const isValidTag = (value: unknown): value is string => {
  return typeof value === 'string';
};
