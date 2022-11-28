import { render, screen, waitFor } from 'utils/tests';
import userEvent from '@testing-library/user-event';

import { Input } from '.';

describe('<Input />', () => {
  it('should render the input', () => {
    const { container } = render(<Input placeholder="input" />);

    expect(screen.getByPlaceholderText('input')).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render with error', () => {
    render(<Input name="test" hasError />);

    expect(screen.getByRole('textbox')).toHaveStyleRule(
      'border',
      '1px solid var(--color-danger)',
    );
  });

  it('changes its value when typing', async () => {
    const onInputChange = jest.fn();
    render(<Input onInputChange={onInputChange} />);

    const input = screen.getByRole('textbox');
    const text = 'This is my new text';
    userEvent.type(input, text);

    await waitFor(() => {
      expect(input).toHaveValue(text);
      expect(onInputChange).toHaveBeenCalledTimes(text.length);
    });
    expect(onInputChange).toHaveBeenCalledWith(text);
  });

  it('does not change its value when disabled', async () => {
    const onInputChange = jest.fn();
    render(<Input onInputChange={onInputChange} disabled />);

    const input = screen.getByRole('textbox');
    expect(input).toBeDisabled();

    const text = 'This is my new text';
    userEvent.type(input, text);

    await waitFor(() => {
      expect(input).not.toHaveValue(text);
    });
    expect(onInputChange).not.toHaveBeenCalled();
  });
});
