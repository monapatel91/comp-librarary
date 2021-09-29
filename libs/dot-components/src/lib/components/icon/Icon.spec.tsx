import React from 'react';
import { render, screen } from '../../testing-utils';
import { DotIcon, IconFontSize, IconProps } from './Icon';

const consoleSpy = jest.spyOn(global.console, 'warn');
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

  it('should have a deprecation warning if fontSize is set to "default"', () => {
    render(<DotIcon iconId="home" fontSize="default" />);
    expect(consoleSpy).toBeCalled();
  });

  it('should have a deprecation warning if fontSize is set to "inherit"', () => {
    render(<DotIcon iconId="home" fontSize="inherit" />);
    expect(consoleSpy).toBeCalled();
  });
});
