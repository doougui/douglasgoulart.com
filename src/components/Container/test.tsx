import theme from 'styles/theme';
import { render } from 'utils/tests';

import { Container } from '.';

describe('<Container />', () => {
  it('should render the heading', () => {
    const { container } = render(
      <Container>
        <span>Container</span>
      </Container>,
    );

    expect(container.firstChild).toHaveStyleRule(
      'max-width',
      theme.grid.container,
    );

    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        width: 100%;
        max-width: 94rem;
        margin-left: auto;
        margin-right: auto;
        padding-left: calc(4rem / 2);
        padding-right: calc(4rem / 2);
      }

      <div
        class="c0"
      >
        <span>
          Container
        </span>
      </div>
    `);
  });
});
