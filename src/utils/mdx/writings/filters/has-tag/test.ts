import writingMock from '__mocks__/writing';
import { hasTag } from '.';

describe('hasTag', () => {
  it('should return true if has tag', () => {
    expect(hasTag(writingMock, 'test')).toBe(true);
    expect(hasTag(writingMock, 'mock')).toBe(true);
  });

  it("should return false if doesn't has tag", () => {
    expect(hasTag(writingMock, 'foo')).toBe(false);
    expect(hasTag(writingMock, 'bar')).toBe(false);
  });
});
