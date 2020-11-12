import React from 'react';
import { render } from '@testing-library/react';

import DotSwitch from './Switch';

describe('Switch', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DotSwitch />);
    expect(baseElement).toBeTruthy();
  });
});
