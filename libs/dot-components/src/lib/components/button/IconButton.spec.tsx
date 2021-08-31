import React from 'react';
import userEvent from '@testing-library/user-event';
import { render, screen } from '../../testing-utils';
import {
  DotIconButton,
  IconButtonProps,
  IconButtonColor,
  IconButtonSize,
} from './IconButton';

describe('DotIconButton', () => {
  it('should have unchanged API', () => {
    const onClick = jest.fn();
    const props = {
      ariaLabel: 'icon button',
      className: 'test-class',
      color: 'primary' as IconButtonColor,
      'data-testid': 'testid',
      disabled: false,
      iconId: 'save',
      onClick: onClick,
      size: 'small' as IconButtonSize,
      titleTooltip: 'click here',
    };
    const iconButtonProps: IconButtonProps = props;
    expect(iconButtonProps).toEqual(props);
  });

  it('should render successfully', () => {
    const { baseElement } = render(<DotIconButton iconId="script" />);
    expect(baseElement).toBeTruthy();
  });

  it('should allow me to click the icon button', () => {
    const onClick = jest.fn();
    render(<DotIconButton iconId="download" onClick={onClick} />);
    const myButton = screen.getByRole('button');
    userEvent.click(myButton);
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('should not allow me to click a disabled icon button', () => {
    const onClick = jest.fn();
    render(
      <DotIconButton iconId="download" onClick={onClick} disabled={true} />
    );
    const myButton = screen.getByRole('button');
    userEvent.click(myButton);
    expect(onClick).toHaveBeenCalledTimes(0);
  });

  it('should render an icon button with tooltip', () => {
    render(<DotIconButton iconId="download" titleTooltip="Test title" />);
    const title = screen.getAllByTitle('Test title');
    expect(title).toHaveLength(2);
    expect(screen.getByTestId('button-icon')).toBeVisible();
    expect(title[0]).toBeVisible();
    expect(title[1]).toBeVisible();
  });

  it("should have 'aria-label' attribute with correct value", () => {
    const ariaLabel = 'my label';
    render(<DotIconButton ariaLabel={ariaLabel} iconId="download" />);
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toHaveAttribute('aria-label', ariaLabel);
  });
});
