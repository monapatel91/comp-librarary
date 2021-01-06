import React, { MouseEvent } from 'react';
import { IconButton } from '@material-ui/core';
import { DotIcon, IconFontSize } from '../icon/Icon';
import './IconButton.scss';

export type IconButtonColor = 'default' | 'inherit' | 'primary' | 'secondary';
export type IconButtonSize = 'small' | 'medium';

export interface IconButtonProps {
  /** Space delimited CSS classes to be attributed to the button. */
  classes?: string;
  /** 'default', 'inherit', 'primary', 'secondary' */
  color?: IconButtonColor;
  /** data attribute passed through for testing purposes ONLY */
  'data-testid'?: string;
  /** If true, the button will be disabled. */
  disabled?: boolean;
  /** Determines the size of the button and padding around the icon */
  iconButtonSize?: IconButtonSize;
  /** The icon to display on the button */
  iconId: string;
  /** Determines the size of the icon */
  iconSize?: IconFontSize;
  /** Event callback */
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  /** Help text to be displayed on icon hover */
  titleTooltip?: string;
}

/**
 * @experimental This component is still in development
 */
export const DotIconButton = ({
  classes,
  color = 'inherit',
  'data-testid': dataTestId,
  disabled = false,
  iconId,
  iconButtonSize = 'medium',
  iconSize = 'default',
  onClick,
  titleTooltip,
}: IconButtonProps) => {
  return (
    <IconButton
      classes={{ root: `dot-icon-btn ${iconButtonSize} ${classes}` }}
      color={color}
      data-testid={dataTestId}
      disabled={disabled}
      onClick={(event) => onClick && onClick(event)}
      size={iconButtonSize}
      title={titleTooltip}
    >
      <DotIcon fontSize={iconSize} icon={iconId} />
    </IconButton>
  );
};

export default DotIconButton;
