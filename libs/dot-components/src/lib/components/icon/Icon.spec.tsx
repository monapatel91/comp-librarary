import React from 'react';
import { renderWithTheme as render } from '../../testing-utils/RenderWithTheme';
import { DotIcon, IconProps } from './Icon';

describe('DotIcon', () => {
  it('should have unchanged API', () => {
    const props = {
      fontSize: 'default',
      iconId: 'home',
      title: 'icon title',
    };
    const iconProps: IconProps = {
      fontSize: 'default',
      iconId: 'home',
      title: 'icon title',
    };
    expect(iconProps).toEqual(props);
  });

  it('should render successfully', () => {
    const { baseElement } = render(<DotIcon iconId="script" />);
    expect(baseElement).toBeTruthy();
  });
});
