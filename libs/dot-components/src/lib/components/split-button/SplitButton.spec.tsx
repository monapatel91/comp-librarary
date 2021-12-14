import React from 'react';
import userEvent from '@testing-library/user-event';
import { render, screen } from '../../testing-utils';
import { DotSplitButton, SplitButtonProps } from './SplitButton';

const options = [
  { children: 'option 1', key: 'a' },
  { children: 'option 2 with some longer text', key: 'b' },
  { children: 'option 3', key: 'c' },
];

const onSelect = jest.fn();

describe('DotButton', () => {
  it('should have unchanged API', () => {
    const props = {
      autoFocus: false,
      ariaLabel: 'splitsville',
      children: 'Hello',
      className: 'test-class',
      'data-testid': 'testid',
      disablePortal: true,
      onSelect: onSelect,
      options: options,
    };
    const splitButtonProps: SplitButtonProps = props;
    expect(splitButtonProps).toEqual(props);
  });

  it('should render left and right side buttons', () => {
    render(
      <DotSplitButton ariaLabel="splitsville" options={options}>
        Hello
      </DotSplitButton>
    );
    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toEqual(2);
    expect(screen.getByText('Hello')).toBeVisible();
    expect(buttons[1].getElementsByClassName('icon-arrow-down')).toHaveLength(
      1
    );
  });

  it('should allow me to click the button', () => {
    const onClick = jest.fn();
    render(
      <DotSplitButton
        ariaLabel="splitsville"
        onClick={onClick}
        options={options}
      >
        Hello
      </DotSplitButton>
    );
    const buttons = screen.getAllByRole('button');
    userEvent.click(buttons[0]);
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('should allow me to click the arrow button and view options', () => {
    render(
      <DotSplitButton
        ariaLabel="splitsville"
        onSelect={onSelect}
        options={options}
      >
        Hello
      </DotSplitButton>
    );
    const buttons = screen.getAllByRole('button');
    userEvent.click(buttons[1]);
    const listItems = screen.getAllByRole('menuitem');
    expect(listItems[0]).toBeVisible();
  });

  it('should allow me to select menu item with non-numeric key', () => {
    render(
      <DotSplitButton
        ariaLabel="splitsville"
        onSelect={onSelect}
        options={options}
      >
        Hello
      </DotSplitButton>
    );
    const buttons = screen.getAllByRole('button');
    userEvent.click(buttons[1]);
    const listItems = screen.getAllByRole('menuitem');
    userEvent.click(listItems[0]);
    expect(onSelect).toHaveBeenCalledTimes(1);
  });

  it('should not allow me to click disabled button', () => {
    const onClick = jest.fn();
    render(
      <DotSplitButton
        ariaLabel="splitsville"
        disabled={true}
        onClick={onClick}
        options={options}
      >
        Hello
      </DotSplitButton>
    );
    const buttons = screen.getAllByRole('button');
    userEvent.click(buttons[0]);
    expect(onClick).toHaveBeenCalledTimes(0);
  });

  it('should left button have focus', () => {
    render(
      <DotSplitButton
        ariaLabel="splitsville"
        autoFocus={true}
        onSelect={onSelect}
        options={options}
      >
        Hello
      </DotSplitButton>
    );
    const buttons = screen.getAllByRole('button');
    expect(buttons[0]).toHaveFocus();
  });
});
