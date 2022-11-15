import { format, subDays } from 'date-fns';
import { parseToDate } from './parse-to-date';

export function formatDateString(
  date: string,
  fromFormat = 'yyyy-MM-dd HH:mm:ss',
  toFormat = 'dd/MM/yyyy',
  recentDateAsHumanReadable = false,
): string {
  const newDate = format(parseToDate(date, fromFormat), toFormat);

  if (!recentDateAsHumanReadable) return newDate;

  const yesterday = format(subDays(new Date(), 1), toFormat);
  const today = format(new Date(), toFormat);

  if (newDate === today) {
    return 'Today';
  }

  if (newDate === yesterday) {
    return 'Yesterday';
  }

  return newDate;
}
