import React, { MouseEvent } from 'react';
import { useStylesWithRootClass } from '../useStylesWithRootClass';
import { CommonProps } from '../CommonProps';
import { DotAvatar } from '../avatar/Avatar';
import { DotIcon } from '../icon/Icon';
import { rootClassName, StyledChip } from './Chip.styles';

export type ChipColor = 'default' | 'primary' | 'secondary';
export type ChipSize = 'medium' | 'small';
export type ChipVariant = 'default' | 'outlined';

export interface ChipProps extends CommonProps {
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

/**
 * @experimental This component is still in development
 */
export const DotChip = ({
  avatar,
  className,
  clickable,
  color,
  'data-testid': dataTestId,
  deletable = true,
  disabled = false,
  iconId,
  onClick,
  onDelete,
  label,
  size = 'medium',
  variant = 'outlined',
}: ChipProps) => {
  const rootClasses = useStylesWithRootClass(rootClassName, className);

  return (
    <StyledChip
      avatar={avatar ? <DotAvatar size="small" alt={label} /> : undefined}
      classes={{ root: rootClasses }}
      clickable={clickable}
      color={color}
      data-testid={dataTestId}
      disabled={disabled}
      icon={iconId !== undefined ? <DotIcon iconId={iconId} /> : undefined}
      label={label}
      onClick={(event) => onClick && onClick(event)}
      onDelete={deletable && onDelete ? (event) => onDelete(event) : undefined}
      size={size}
      variant={variant}
    />
  );
};

export default DotChip;
