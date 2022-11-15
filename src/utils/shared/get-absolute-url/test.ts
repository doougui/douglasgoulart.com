import { getAbsoluteUrl } from '.';

describe('getAbsoluteUrl', () => {
  it('should return correct absolute url', () => {
    Object.defineProperty(window, 'location', {
      get() {
        return { origin: 'http://localhost:3000' };
      },
    });
    expect(getAbsoluteUrl()).toBe('http://localhost:3000');
  });

  it("should return empty if it's not available", () => {
    Object.defineProperty(global, 'window', {});
    expect(getAbsoluteUrl()).toBe('');
  });
});
