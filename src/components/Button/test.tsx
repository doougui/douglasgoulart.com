import { render, screen } from 'utils/tests';

import { Button } from '.';

describe('<Button />', () => {
  it('should render correctly', () => {
    render(<Button>Say hello</Button>);

    expect(
      screen.getByRole('button', { name: /Say hello/i }),
    ).toBeInTheDocument();
  });

  it('should render a full width version', () => {
    render(<Button fullWidth>Say hello</Button>);

    expect(screen.getByRole('button', { name: /Say hello/i })).toHaveStyle({
      width: '100%',
    });
  });

  it('should render Button as a link', () => {
    render(
      <Button as="a" href="/link">
        Say hello
      </Button>,
    );

    expect(screen.getByRole('link', { name: /Say hello/i })).toHaveAttribute(
      'href',
      '/link',
    );
  });
});
