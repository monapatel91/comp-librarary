import React, { MouseEvent } from 'react';
import { Chip } from '@material-ui/core';
import { DotAvatar } from '../avatar/Avatar';
import { DotIcon } from '../icon/Icon';
import './Chip.scss';

export type ChipColor = 'default' | 'primary' | 'secondary';
export type ChipSize = 'medium' | 'small';
export type ChipVariant = 'default' | 'outlined';

export interface ChipProps {
  /** If provided, will display an avatar which takes precedence over icon */
  avatar?: boolean;
  /** determines the color of chip 'default', 'primary' or 'secondary' */
  color?: ChipColor;
  /** If true, the chip is clickable */
  clickable?: boolean;
  /** If true, the chip is deletable */
  deletable?: boolean;
  /** If true, the chip is disabled */
  disabled?: boolean;
  /** The icon to display on the chip */
  iconId?: string;
  /** The text displayed on the chip */
  label: string;
  /** Event callback on click */
  onClick?: (event: MouseEvent) => void;
  /** Event callback when delete icon is clicked */
  onDelete?: (event: MouseEvent) => void;
  /** Determines the size of the chip 'medium' or 'small' */
  size?: ChipSize;
  /** determines the style of chip displayed 'outlined' or 'default' */
  variant?: ChipVariant;
}

export const DotChip = ({
  avatar,
  clickable,
  color,
  deletable = true,
  disabled = false,
  iconId,
  onClick,
  onDelete,
  label,
  size = 'medium',
  variant = 'outlined',
}: ChipProps) => {
  return (
    <Chip
      avatar={avatar ? <DotAvatar size="small" /> : undefined}
      className="dot-chip"
      clickable={clickable}
      color={color}
      disabled={disabled}
      icon={iconId !== undefined ? <DotIcon icon={iconId} /> : undefined}
      label={label}
      onClick={(event) => onClick && onClick(event)}
      onDelete={deletable && onDelete ? (event) => onDelete(event) : undefined}
      size={size}
      variant={variant}
    />
  );
};

export default DotChip;
