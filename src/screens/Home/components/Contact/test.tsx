import { render, screen } from 'utils/tests';
import { Contact } from '.';

describe('<Contact />', () => {
  it('should render correctly', () => {
    render(<Contact />);

    expect(screen.getByText('Don’t be shy, say hi')).toBeInTheDocument();

    expect(
      screen.getByText(
        'Although I’m not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!',
      ),
    ).toBeInTheDocument();

    expect(screen.getByRole('link', { name: 'Say hello' })).toHaveAttribute(
      'href',
      'mailto:douglaspigoulart@gmail.com',
    );
  });
});
