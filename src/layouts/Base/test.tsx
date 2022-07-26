import { render, screen } from 'utils/tests';

import { Base } from '.';

describe('<Base />', () => {
  it('should render children', () => {
    render(<Base>Base</Base>);

    expect(screen.getByText('Base')).toBeInTheDocument();
  });
});
