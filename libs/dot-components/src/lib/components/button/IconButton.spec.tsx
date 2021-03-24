import React from 'react';
import { renderWithTheme as render } from '../../testing-utils/RenderWithTheme';
import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import { DotIconButton, IconButtonProps } from './IconButton';

describe('DotIconButton', () => {
  it('should have unchanged API', () => {
    const onClick = jest.fn();
    const props = {
      color: 'primary',
      disabled: false,
      iconId: 'save',
      onClick: onClick,
      size: 'small',
      titleTooltip: 'click here',
    };
    const iconButtonProps: IconButtonProps = {
      color: 'primary',
      disabled: false,
      iconId: 'save',
      onClick: onClick,
      size: 'small',
      titleTooltip: 'click here',
    };
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
});
