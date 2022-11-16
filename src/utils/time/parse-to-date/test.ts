import { parseToDate } from '.';

describe('parseToDate', () => {
  it('should return parsed date', () => {
    expect(parseToDate('2002-09-22')).toStrictEqual(new Date(2002, 9 - 1, 22));
  });

  it('should return parsed date with from custom format', () => {
    expect(parseToDate('22/09/2002', 'dd/MM/yyyy')).toStrictEqual(
      new Date(2002, 9 - 1, 22),
    );
  });
});
