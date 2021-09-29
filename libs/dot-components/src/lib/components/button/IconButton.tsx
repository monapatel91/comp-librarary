import React, { MouseEvent } from 'react';
import { CommonProps } from '../CommonProps';
import { useStylesWithRootClass } from '../useStylesWithRootClass';
import { DotIcon, IconFontSize } from '../icon/Icon';
import { rootClassName, StyledIconButton } from './IconButton.styles';

export type IconButtonColor = 'default' | 'inherit' | 'primary' | 'secondary';
export type IconButtonSize = 'small' | 'medium';

export interface IconButtonProps extends CommonProps {
  /** 'default', 'inherit', 'primary', 'secondary' */
  color?: IconButtonColor;
  /** If true, the button will be disabled. */
  disabled?: boolean;
  /** The icon to display on the button */
  iconId: string;
  /** Determines the size of the icon itself and spacing around it */
  iconSize?: IconFontSize;
  /** Event callback */
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  /** Determines the size of the button and padding around the icon */
  size?: IconButtonSize;
  /** Help text to be displayed on icon hover */
  titleTooltip?: string;
}

export const DotIconButton = ({
  ariaLabel,
  className,
  color = 'inherit',
  'data-testid': dataTestId,
  disabled = false,
  iconId,
  iconSize = 'small',
  onClick,
  titleTooltip,
  size = 'medium',
}: IconButtonProps) => {
  const rootClasses = useStylesWithRootClass(rootClassName, className);

  return (
    <StyledIconButton
      aria-label={ariaLabel}
      classes={{ root: rootClasses }}
      color={color}
      data-testid={dataTestId}
      disabled={disabled}
      onClick={(event) => onClick && onClick(event)}
      size={size}
      title={titleTooltip}
    >
      <DotIcon
        data-testid="button-icon"
        fontSize={iconSize}
        iconId={iconId}
        title={titleTooltip}
      />
    </StyledIconButton>
  );
};
