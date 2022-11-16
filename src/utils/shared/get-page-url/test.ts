import { getPageUrl } from '.';

describe('getPageUrl', () => {
  it('should return correct page url', () => {
    Object.defineProperty(window, 'location', {
      get() {
        return { href: 'http://localhost:3000/page' };
      },
    });
    expect(getPageUrl()).toBe('http://localhost:3000/page');
  });

  it("should return empty if it's not available", () => {
    Object.defineProperty(global, 'window', {});
    expect(getPageUrl()).toBe('');
  });
});
