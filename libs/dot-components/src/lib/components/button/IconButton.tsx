import React, { MouseEvent, useEffect } from 'react';
import { CommonProps } from '../CommonProps';
import { useStylesWithRootClass } from '../useStylesWithRootClass';
import { DotIcon, IconFontSize } from '../icon/Icon';
import { DotTooltip } from '../tooltip/Tooltip';
import { rootClassName, StyledIconButton } from './IconButton.styles';

export type IconButtonColor = 'default' | 'inherit' | 'primary' | 'secondary';
export type IconButtonSize = 'small' | 'medium';

export interface IconButtonProps extends CommonProps {
  /** 'default', 'inherit', 'primary', 'secondary' */
  color?: IconButtonColor;
  /** If true, the button will be disabled. */
  disabled?: boolean;
  /** If true, the ripple effect is disabled. */
  disableRipple?: boolean;
  /** The icon to display on the button */
  iconId: string;
  /** Determines the size of the icon itself and spacing around it */
  iconSize?: IconFontSize;
  /** Event callback */
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  /** Determines the size of the button and padding around the icon */
  size?: IconButtonSize;
  /** DEPRECATED, DO NOT USE */
  titleTooltip?: string;
  /** Help text to be displayed on icon hover */
  tooltip?: string;
}

export const DotIconButton = ({
  ariaLabel,
  className,
  color = 'inherit',
  'data-testid': dataTestId,
  disabled = false,
  disableRipple = false,
  iconId,
  iconSize = 'small',
  onClick,
  titleTooltip,
  tooltip,
  size = 'medium',
}: IconButtonProps) => {
  const rootClasses = useStylesWithRootClass(rootClassName, className);
  useEffect(() => {
    // deprecation warning
    if (titleTooltip) {
      console.warn(
        'The use of `titleTooltip` is deprecated and will be removed in the next major release, please use `tooltip` isntead.'
      );
    }
  }, []);
  return (
    <DotTooltip title={tooltip}>
      <StyledIconButton
        aria-label={ariaLabel}
        classes={{ root: rootClasses }}
        color={color}
        data-testid={dataTestId}
        disabled={disabled}
        disableRipple={disableRipple}
        onClick={(event) => onClick && onClick(event)}
        size={size}
      >
        <DotIcon
          data-testid="button-icon"
          fontSize={iconSize}
          iconId={iconId}
        />
      </StyledIconButton>
    </DotTooltip>
  );
};
