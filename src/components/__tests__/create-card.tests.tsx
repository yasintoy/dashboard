import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';
import CreateCard from '../CreateCard';

let documentBody: RenderResult;

describe('<CreateCard />', () => {
  beforeEach(() => {
    documentBody = render(<CreateCard />);
  });
  it('shows Create Services Card', () => {
    expect(documentBody.getByText('Create Services Card')).toBeInTheDocument();
  });
});
