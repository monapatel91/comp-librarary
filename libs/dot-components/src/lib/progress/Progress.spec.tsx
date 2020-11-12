import React from 'react';
import { render } from '@testing-library/react';

import DotProgress from './Progress';

describe(' Progress', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DotProgress />);
    expect(baseElement).toBeTruthy();
  });
});
