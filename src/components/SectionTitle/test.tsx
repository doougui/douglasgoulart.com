import { render, screen } from 'utils/tests';

import { SectionTitle } from '.';

describe('<SectionTitle />', () => {
  it('should render correctly', () => {
    const { container } = render(<SectionTitle>SectionTitle</SectionTitle>);

    expect(
      screen.getByRole('heading', { name: /SectionTitle/i }),
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
