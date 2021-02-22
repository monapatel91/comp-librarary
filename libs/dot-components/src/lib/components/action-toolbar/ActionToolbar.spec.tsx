import React from 'react';
import { renderWithTheme as render } from '../../testing-utils/RenderWithTheme';

import { DotActionToolbar, DotActionBarProps } from './ActionToolbar';

describe('ActionToolbar', () => {
  it('should have unchanged API', () => {
    const props = {
      children: 'children',
      variant: 'regular',
    };
    const actionBarProps: DotActionBarProps = {
      children: 'children',
      variant: 'regular',
    };
    expect(actionBarProps).toEqual(props);
  });

  it('should render successfully', () => {
    const { baseElement } = render(<DotActionToolbar />);
    expect(baseElement).toBeTruthy();
  });
});
