import { Writing } from 'types/Writing';
import { parseToDate } from 'utils/time/parseToDate';
import { SortTypesKeys } from '../types';

function byNew(data: Writing[]) {
  return data.sort((a, b) => {
    const aAsDate = parseToDate(a.publishedAt);
    const bAsDate = parseToDate(b.publishedAt);
    return Number(bAsDate) - Number(aAsDate);
  });
}

function byName(data: Writing[]) {
  return data.sort((a, b) => (a.title > b.title ? 1 : -1));
}

export function sortBy(data: Writing[], type: SortTypesKeys): Writing[] {
  const sortTypes: { [key in SortTypesKeys]: () => Writing[] } = {
    new: () => byNew(data),
    name: () => byName(data),
  };

  return sortTypes[type]();
}
