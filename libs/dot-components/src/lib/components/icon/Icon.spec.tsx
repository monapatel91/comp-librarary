import React from 'react';
import { render, screen } from '../../testing-utils';
import { DotIcon, IconFontSize, IconProps } from './Icon';

describe('DotIcon', () => {
  it('should have unchanged API', () => {
    const props = {
      ariaLabel: 'icon',
      className: 'test-class',
      'data-testid': 'testid',
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

  it("should have 'aria-label' attribute with correct value", () => {
    const ariaLabel = 'my label';
    const dataTestId = 'test-icon';
    render(
      <DotIcon ariaLabel={ariaLabel} data-testid={dataTestId} iconId="home" />
    );
    const iconElement = screen.getByTestId(dataTestId);
    expect(iconElement).toHaveAttribute('aria-label', ariaLabel);
  });
});
