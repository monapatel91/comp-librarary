import React, { ElementType } from 'react';
import { render, screen } from '../../testing-utils';
import {
  DotTypography,
  TypographyProps,
  TypographyVariant,
} from './Typography';

describe('DotTypography', () => {
  it('should have unchanged API', () => {
    const props = {
      ariaLabel: 'typography',
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

  it("should have 'aria-label' attribute with correct value", () => {
    const ariaLabel = 'my label';
    const dataTestId = 'test-typography';
    render(
      <DotTypography
        ariaLabel={ariaLabel}
        data-testid={dataTestId}
        children="Testing"
      />
    );
    const typographyElement = screen.getByTestId(dataTestId);
    expect(typographyElement).toHaveAttribute('aria-label', ariaLabel);
  });
});
