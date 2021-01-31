import * as React from 'react';
import { render } from '@testing-library/react';
import Loading from '../Loading';

describe('<Loading />', () => {
  it('shows Loading renders properly', () => {
    const { container } = render(<Loading />);
    expect(container.getElementsByClassName('loading').length).toBe(1);
  });
});
