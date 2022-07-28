import { render, screen } from 'utils/tests';
import { Header } from '.';

describe('<Header />', () => {
  it('should render the home header', () => {
    render(<Header />);

    expect(screen.getByText('Hi there, I’m a...')).toBeInTheDocument();

    expect(
      screen.getByRole('heading', {
        name: 'Front-end and Mobile developer with an eye for design.',
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        'Helping developers build a faster web. Teaching about web development, serverless, and React / Next.js.',
      ),
    ).toBeInTheDocument();
  });
});
