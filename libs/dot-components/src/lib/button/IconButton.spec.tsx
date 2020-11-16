import React from 'react';
import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import DotIconButton from './IconButton';

describe('DotIconButton', () => {
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

  it('should render an icon button with default tooltip', () => {
    render(
      <DotIconButton
        iconId="download"
        titleTooltip="Please add a tooltip for icon-only button"
      />
    );
    expect(screen.getByTestId('icon')).toBeVisible();
    expect(
      screen.getByTitle('Please add a tooltip for icon-only button')
    ).toBeVisible();
  });

  it('should render an icon button with given tooltip', () => {
    render(<DotIconButton iconId="download" titleTooltip="Test title" />);
    expect(screen.getByTitle('Test title')).toBeVisible();
  });
});
