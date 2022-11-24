import writingsMock from '__mocks__/writings';
import { Writing } from 'types/Writing';
import { sortBy } from '.';

describe('sortBy', () => {
  it('should sort by new', () => {
    const items = writingsMock.map(({ publishedAt }) => ({ publishedAt }));
    expect(sortBy(items as Writing[], 'new')).toEqual([
      { publishedAt: '2022-11-15' },
      { publishedAt: '2022-11-14' },
      { publishedAt: '2022-11-13' },
    ]);
  });

  it('should sort by name', () => {
    const items = writingsMock.map(({ title }) => ({ title }));
    expect(sortBy(items as Writing[], 'name')).toEqual([
      { title: 'Mock Writing 1' },
      { title: 'Mock Writing 2' },
      { title: 'Mock Writing 3' },
    ]);
  });
});
