import React from 'react';
import { render } from '../../testing-utils';
import { DotIcon, IconFontSize, IconProps } from './Icon';

describe('DotIcon', () => {
  it('should have unchanged API', () => {
    const props = {
      fontSize: 'default' as IconFontSize,
      iconId: 'home',
      title: 'icon title',
    };
    const iconProps: IconProps = props;
    expect(iconProps).toEqual(props);
  });

  it('should render successfully', () => {
    const { baseElement } = render(<DotIcon iconId="script" />);
    expect(baseElement).toBeTruthy();
  });
});
