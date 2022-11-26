import { getVariableName } from '.';

describe('getVariableName', () => {
  it('should render variable name', () => {
    expect(getVariableName('color', 'primary')).toBe('--color-primary');
  });
});
