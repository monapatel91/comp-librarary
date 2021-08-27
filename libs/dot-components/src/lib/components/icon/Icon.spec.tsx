import React from 'react';
import { render } from '../../testing-utils';
import { DotIcon, IconFontSize, IconProps } from './Icon';

describe('DotIcon', () => {
  it('should have unchanged API', () => {
    const props = {
      className: 'test-class',
      'data-testid': 'testid',
      fontSize: 'medium' as IconFontSize,
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
