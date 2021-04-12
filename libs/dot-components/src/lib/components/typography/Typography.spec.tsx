import React from 'react';
import { render } from '../../testing-utils';
import { DotTypography, TypographyProps } from './Typography';

describe('DotTypography', () => {
  it('should have unchanged API', () => {
    const props = {
      children: 'some text',
      component: 'h1',
      variant: 'h1',
    };
    const typographyProps: TypographyProps = {
      children: 'some text',
      component: 'h1',
      variant: 'h1',
    };
    expect(typographyProps).toEqual(props);
  });

  it('should render successfully', () => {
    const { baseElement } = render(<DotTypography children="Testing" />);
    expect(baseElement).toBeTruthy();
  });
});
