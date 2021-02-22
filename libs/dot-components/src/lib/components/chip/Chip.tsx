import React, { MouseEvent } from 'react';
import { useStylesWithRootClass } from '../useStylesWithRootClass';
import { CommonProps } from '../CommonProps';
import { rootClassName, StyledChip } from './Chip.styles';

export type ChipSize = 'medium' | 'small';

export interface ChipProps extends CommonProps {
  /** If provided, will display an avatar which takes precedence over icon */
  avatar?: JSX.Element;
  /** The text for the chip. */
  children: string;
  /** If true, the chip is clickable */
  isClickable?: boolean;
  /** If true, the chip is deletable */
  isDeletable?: boolean;
  /** If true, the chip is disabled */
  disabled?: boolean;
  /** If true, the chip is in error */
  error?: boolean;
  /** Event callback on click */
  onClick?: (event: MouseEvent) => void;
  /** Event callback when delete icon is clicked */
  onDelete?: (event: MouseEvent) => void;
  /** Determines the size of the chip 'medium' or 'small' */
  size?: ChipSize;
  /** The icon to display on the chip */
  startIcon?: JSX.Element;
}

export const DotChip = ({
  avatar,
  children,
  className,
  'data-testid': dataTestId,
  disabled = false,
  error = false,
  isClickable = false,
  isDeletable = true,
  onClick,
  onDelete,
  size = 'medium',
  startIcon,
}: ChipProps) => {
  const errorClass = error ? 'Mui-error' : '';
  const rootClasses = useStylesWithRootClass(
    rootClassName,
    className,
    errorClass
  );

  return (
    <StyledChip
      avatar={avatar}
      classes={{ root: rootClasses }}
      clickable={isClickable}
      color="default"
      data-testid={dataTestId}
      disabled={disabled}
      icon={avatar ? null : startIcon}
      label={children}
      onClick={(event) => onClick && onClick(event)}
      onDelete={
        isDeletable && onDelete ? (event) => onDelete(event) : undefined
      }
      size={size}
      variant="outlined"
    />
  );
};
