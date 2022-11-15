import { getPageUrl } from '.';

describe('getPageUrl', () => {
  it('should return correct page url', () => {
    expect(getPageUrl()).toBe('http://localhost/');
  });

  it('should return empty if window is undefined', () => {
    Object.defineProperty(global, 'window', {});
    expect(getPageUrl()).toBe('');
  });
});
