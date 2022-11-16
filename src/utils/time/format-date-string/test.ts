import { format } from 'date-fns';
import { formatDateString } from '.';

describe('formatDateString', () => {
  it('should return formatted date', () => {
    expect(formatDateString('2002-09-22 09:00:00')).toBe('22/09/2002');
  });

  it('should return formatted date with custom format', () => {
    expect(formatDateString('22/09/2002', 'dd/MM/yyyy', 'yyyy/MM/dd')).toBe(
      '2002/09/22',
    );
  });

  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);

  it('should return recent dates as human readable date', () => {
    expect(
      formatDateString(
        format(today, 'yyyy-MM-dd'),
        'yyyy-MM-dd',
        'dd/MM/yyyy',
        true,
      ),
    ).toBe('Today');

    expect(
      formatDateString(
        format(yesterday, 'yyyy-MM-dd'),
        'yyyy-MM-dd',
        'dd/MM/yyyy',
        true,
      ),
    ).toBe('Yesterday');

    expect(
      formatDateString('2002-09-22', 'yyyy-MM-dd', 'dd/MM/yyyy', true),
    ).toBe('22/09/2002');
  });

  it('should not return recent dates as human readable date', () => {
    expect(
      formatDateString(
        format(today, 'yyyy-MM-dd'),
        'yyyy-MM-dd',
        'dd/MM/yyyy',
        false,
      ),
    ).toBe(format(today, 'dd/MM/yyyy'));

    expect(
      formatDateString(
        format(yesterday, 'yyyy-MM-dd'),
        'yyyy-MM-dd',
        'dd/MM/yyyy',
        false,
      ),
    ).toBe(format(yesterday, 'dd/MM/yyyy'));
  });
});
