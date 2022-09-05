import { formatDistance } from 'date-fns';
import { render, screen } from 'utils/tests';

import { GuestMessage, GuestMessageProps } from '.';

const props: GuestMessageProps = {
  message: 'Nice work',
  author: 'Douglas Pinheiro Goulart',
  date: new Date(2002, 8, 22),
};

describe('<GuestMessage />', () => {
  it('should render message, author and date', () => {
    const { container } = render(<GuestMessage {...props} />);

    expect(screen.getByText('Nice work')).toBeInTheDocument();
    expect(screen.getByText('Douglas Pinheiro Goulart')).toBeInTheDocument();
    expect(
      screen.getByText(
        formatDistance(props.date, new Date(), { addSuffix: true }),
      ),
    ).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });
});
