import { render } from 'utils/tests';
import { Stack } from '.';

describe('<Stack />', () => {
  it('should render correctly', () => {
    const { container } = render(
      <Stack spacing="10px">
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
      </Stack>,
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
