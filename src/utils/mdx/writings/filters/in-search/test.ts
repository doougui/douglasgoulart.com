import writingMock from '__mocks__/writing';
import { inSearch } from '.';

describe('inSearch', () => {
  it('should return true if it is in search', () => {
    expect(inSearch(writingMock, 'Writing')).toBe(true);
    expect(inSearch(writingMock, 'This is a mock')).toBe(true);
  });

  it('should return false if it is not in search', () => {
    expect(inSearch(writingMock, 'Not in search')).toBe(false);
    expect(inSearch(writingMock, 'This is an example excerpt')).toBe(false);
  });
});
