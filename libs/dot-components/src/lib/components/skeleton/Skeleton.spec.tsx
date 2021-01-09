import React from 'react';
import { renderWithTheme as render } from '../../testing-utils/RenderWithTheme';
import DotSkeleton from './Skeleton';

describe('Skeleton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DotSkeleton />);
    expect(baseElement).toBeTruthy();
  });
});
