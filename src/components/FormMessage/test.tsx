import { render, screen } from 'utils/tests';
import { FormMessage } from '.';

describe('<FormMessage />', () => {
  it('should render an error form message', () => {
    render(<FormMessage type="error">This is an error message</FormMessage>);

    expect(screen.getByTestId('form-message')).toHaveStyleRule(
      'color',
      'var(--color-danger)',
    );
    expect(screen.getByText('This is an error message')).toBeInTheDocument();
  });

  it('should render an success form message', () => {
    render(
      <FormMessage type="success">This is an success message</FormMessage>,
    );

    expect(screen.getByTestId('form-message')).toHaveStyleRule(
      'color',
      'var(--color-success)',
    );
    expect(screen.getByText('This is an success message')).toBeInTheDocument();
  });
});
