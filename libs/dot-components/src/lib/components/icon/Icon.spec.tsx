import React from 'react';
import { render } from '@testing-library/react';
import { DotIcon } from './Icon';

describe('DotIcon', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DotIcon icon="script" />);
    expect(baseElement).toBeTruthy();
  });
});
