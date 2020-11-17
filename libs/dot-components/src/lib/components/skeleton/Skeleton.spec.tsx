import React from 'react';
import { render } from '@testing-library/react';

import DotSkeleton from './Skeleton';

describe('Skeleton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DotSkeleton />);
    expect(baseElement).toBeTruthy();
  });
});
