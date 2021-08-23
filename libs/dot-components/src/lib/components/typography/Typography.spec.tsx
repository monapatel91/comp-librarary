import React, { ElementType } from 'react';
import { render } from '../../testing-utils';
import {
  DotTypography,
  TypographyProps,
  TypographyVariant,
} from './Typography';

describe('DotTypography', () => {
  it('should have unchanged API', () => {
    const props = {
      children: 'some text',
      className: 'test-class',
      component: 'h1' as ElementType,
      'data-testid': 'testid',
      noWrap: false,
      variant: 'h1' as TypographyVariant,
    };
    const typographyProps: TypographyProps = props;
    expect(typographyProps).toEqual(props);
  });

  it('should render successfully', () => {
    const { baseElement } = render(<DotTypography children="Testing" />);
    expect(baseElement).toBeTruthy();
  });
});
