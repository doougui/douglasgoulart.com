import { render, screen } from 'utils/tests';
import { Header } from '.';

describe('<Header />', () => {
  it('should render the home header', () => {
    render(<Header />);

    expect(screen.getByText("Hi there, I'm a...")).toBeInTheDocument();

    expect(
      screen.getByRole('heading', {
        name: 'Full-stack and Mobile developer with an eye for design.',
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        "I'm a Full-stack developer based in Brazil and moved by curiosity. I am currently focused on solutions for the web",
      ),
    ).toBeInTheDocument();
  });
});
