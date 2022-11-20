import { Writing } from 'types/Writing';

export function hasTag(data: Writing, tag: string) {
  return data.tags
    .split(',')
    .map((tagItem) => tagItem.toLowerCase())
    .some((tagItem) => tagItem === tag.toLowerCase());
}
