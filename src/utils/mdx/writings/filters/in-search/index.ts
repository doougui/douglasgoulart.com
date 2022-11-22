import { Writing } from 'types/Writing';

export function inSearch(data: Writing, search: string) {
  return (
    data.title.toLowerCase().includes(search.toLowerCase()) ||
    data.excerpt.toLowerCase().includes(search.toLowerCase())
  );
}
