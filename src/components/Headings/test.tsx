import { render, screen } from 'utils/tests';
import { Heading1, Heading2, Heading3 } from '.';

describe('Headings', () => {
  it('should render the heading 1', () => {
    render(<Heading1>Heading 1</Heading1>);

    expect(screen.getByRole('heading', { name: /Heading 1/i })).toHaveStyle({
      fontSize: '3.2rem',
      lineHeight: '4.2rem',
    });
  });

  it('should render the heading 2', () => {
    render(<Heading2>Heading 2</Heading2>);

    expect(screen.getByRole('heading', { name: /Heading 2/i })).toHaveStyle({
      fontSize: '2.4rem',
      lineHeight: '3rem',
    });
  });

  it('should render the heading 3', () => {
    render(<Heading3>Heading 3</Heading3>);

    expect(screen.getByRole('heading', { name: /Heading 3/i })).toHaveStyle({
      fontSize: '1.8rem',
      lineHeight: '2.4rem',
    });
  });
});
