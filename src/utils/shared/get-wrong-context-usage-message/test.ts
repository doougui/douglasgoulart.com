import { getWrongContextUsageMessage } from '.';

describe('getWrongContextUsageMessage', () => {
  it('should render the wrong usage message', () => {
    const message = getWrongContextUsageMessage('useTest', 'TestProvider');
    expect(message).toBe('useTest must be used within a TestProvider');
  });
});
