import { fireEvent, render, screen, waitFor } from 'utils/tests';

import { Image } from '.';

describe('<Image />', () => {
  it('should render correctly', async () => {
    const src = 'https://picsum.photos/200';
    const generatedSrc =
      '/_next/image?url=https%3A%2F%2Fpicsum.photos%2F200&w=640&q=75';

    const { container } = render(
      <Image src={src} alt="Image" width={200} height={200} />,
    );

    const img = screen.getByAltText('Image');

    expect(img).toBeInTheDocument();

    await waitFor(() => {
      expect(img).toHaveAttribute('src', generatedSrc);
    });

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should use fallback on error', async () => {
    const src = 'https://picsum.photos/200';
    const generatedSrc =
      '/_next/image?url=https%3A%2F%2Fpicsum.photos%2F400&w=640&q=75';

    render(
      <Image
        src={src}
        fallback="https://picsum.photos/400"
        alt="Image"
        width={200}
        height={100}
      />,
    );

    const img = screen.getByAltText('Image');

    fireEvent.error(img);

    await waitFor(() => {
      expect(img).toHaveAttribute('src', generatedSrc);
    });
  });
});
