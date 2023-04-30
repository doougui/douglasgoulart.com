import { render } from 'utils/tests';
import projectMock from './mock';

import { Project } from '.';

describe('<Project />', () => {
  it('should render correctly', () => {
    render(<Project {...projectMock} />);
  });
});
