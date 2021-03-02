import React from 'react';
import { renderWithTheme as render } from '../../testing-utils/RenderWithTheme';
import { DotActionToolbar, DotActionBarProps } from './ActionToolbar';

describe('ActionToolbar', () => {
  it('should have unchanged API', () => {
    const props = {
      children: 'child',
      variant: 'regular',
    };
    const actionBarProps: DotActionBarProps = {
      children: 'child',
      variant: 'regular',
    };
    expect(actionBarProps).toEqual(props);
  });

  it('should render successfully', () => {
    const { baseElement } = render(<DotActionToolbar />);
    expect(baseElement).toBeTruthy();
  });
});
