import writingsMock from 'screens/Writings/mock';
import { inSearch } from '.';

describe('inSearch', () => {
  it('should return true if it is in search', () => {
    expect(inSearch(writingsMock[0], 'Writing')).toBe(true);
    expect(inSearch(writingsMock[0], 'This is a mock')).toBe(true);
  });

  it('should return false if it is not in search', () => {
    expect(inSearch(writingsMock[0], 'Not in search')).toBe(false);
    expect(inSearch(writingsMock[0], 'This is an example excerpt')).toBe(false);
  });
});
