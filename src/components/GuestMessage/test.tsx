import { render, screen } from 'utils/tests';

import { GuestMessage, GuestMessageProps } from '.';

const props: GuestMessageProps = {
  message: 'Nice work',
  author: 'Douglas Pinheiro Goulart',
  date: new Date(2002, 9, 22),
};

describe('<GuestMessage />', () => {
  it('should render message, author and date', () => {
    const { container } = render(<GuestMessage {...props} />);

    expect(screen.getByText('Nice work')).toBeInTheDocument();
    expect(screen.getByText('Douglas Pinheiro Goulart')).toBeInTheDocument();
    expect(screen.getByText('2002-10-22T03:00:00.000Z')).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });
});
