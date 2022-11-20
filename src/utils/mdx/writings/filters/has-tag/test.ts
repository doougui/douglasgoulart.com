import writingsMock from 'screens/Writings/mock';
import { hasTag } from '.';

describe('hasTag', () => {
  it('should return true if has tag', () => {
    expect(hasTag(writingsMock[0], 'test')).toBe(true);
    expect(hasTag(writingsMock[0], 'mock')).toBe(true);
  });

  it("should return false if doesn't has tag", () => {
    expect(hasTag(writingsMock[0], 'foo')).toBe(false);
    expect(hasTag(writingsMock[0], 'bar')).toBe(false);
  });
});
