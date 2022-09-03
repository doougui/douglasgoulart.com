import { render, screen } from 'utils/tests';

import { WorkExperience } from '.';

describe('<WorkExperience />', () => {
  it('should render correctly', () => {
    render(<WorkExperience />);

    expect(
      screen.getByRole('heading', { name: /Work Experience/i }),
    ).toBeInTheDocument();
  });
});
