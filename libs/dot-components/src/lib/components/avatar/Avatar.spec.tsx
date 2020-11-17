import React from 'react';
import { render } from '@testing-library/react';

import DotAvatar from './Avatar';

describe('DotAvatar', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DotAvatar />);
    expect(baseElement).toBeTruthy();
  });
});
