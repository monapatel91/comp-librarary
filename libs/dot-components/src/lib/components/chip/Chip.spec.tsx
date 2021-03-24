import React from 'react';
import { renderWithTheme as render } from '../../testing-utils/RenderWithTheme';
import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import { DotChip, ChipProps } from './Chip';
import { DotAvatar } from '../avatar/Avatar';
import { DotIcon } from '../icon/Icon';

describe('DotChip', () => {
  const avatar = (
    <DotAvatar alt="Batman" size="small" data-testid="test-avatar" />
  );
  const startIcon = <DotIcon iconId="home" data-testid="test-icon" />;

  it('should have unchanged API', () => {
    const onClick = jest.fn();
    const onDelete = jest.fn();
    const props = {
      avatar: avatar,
      children: 'My Chip',
      isClickable: true,
      isDeletable: true,
      disabled: false,
      error: false,
      onClick: onClick,
      onDelete: onDelete,
      size: 'medium',
      startIcon: <DotIcon iconId="home" />,
    };
    const chipProps: ChipProps = {
      avatar: avatar,
      children: 'My Chip',
      isClickable: true,
      isDeletable: true,
      disabled: false,
      error: false,
      onClick: onClick,
      onDelete: onDelete,
      size: 'medium',
      startIcon: <DotIcon iconId="home" />,
    };
    expect(chipProps).toEqual(props);
  });

  it('should render with all props', () => {
    render(
      <DotChip
        avatar={avatar}
        className="custom-test-class"
        data-testid="test-chip"
        disabled
        error
        size="small"
      >
        Hello
      </DotChip>
    );
    const avatarTestId = screen.getByTestId('test-avatar');
    const chipTestId = screen.getByTestId('test-chip');
    expect(avatarTestId).toBeVisible();
    expect(chipTestId).toHaveClass('custom-test-class');
    expect(chipTestId).toHaveClass('Mui-disabled');
    expect(chipTestId).toHaveClass('Mui-error');
    expect(chipTestId).toHaveClass('MuiChip-sizeSmall');
  });

  it('should give avatar precedence over startIcon', () => {
    const { baseElement } = render(
      <DotChip avatar={avatar} startIcon={startIcon}>
        Hello
      </DotChip>
    );
    const avatarTestId = screen.getByTestId('test-avatar');
    expect(avatarTestId).toBeVisible();
  });

  it('should render startIcon if no avatar', () => {
    render(<DotChip startIcon={startIcon}>Hello</DotChip>);
    expect(screen.getByTestId('test-icon')).toBeVisible();
  });

  it('should allow the user to click if clickable', () => {
    const onClick = jest.fn();
    render(
      <DotChip isClickable={true} onClick={onClick}>
        Hello
      </DotChip>
    );

    const chip = screen.getByRole('button');
    userEvent.click(chip);
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('should not display the delete icon if not deletable', () => {
    const { baseElement } = render(
      <DotChip isDeletable={false}>Hello</DotChip>
    );
    const deleteIcon = baseElement.querySelector('.MuiChip-deleteIcon');
    expect(deleteIcon).not.toBeTruthy();
  });

  it('should display the delete icon if deletable', () => {
    const onDelete = jest.fn();
    const { baseElement } = render(
      <DotChip isDeletable={true} onDelete={onDelete}>
        Hello
      </DotChip>
    );
    const deleteIcon = baseElement.querySelector('.MuiChip-deleteIcon');
    expect(deleteIcon).toBeTruthy();
    userEvent.click(deleteIcon);
    expect(onDelete).toHaveBeenCalledTimes(1);
  });
});
