import { parse } from 'date-fns';

export function parseToDate(date: string, format = 'yyyy-MM-dd') {
  return parse(date, format, new Date());
}
