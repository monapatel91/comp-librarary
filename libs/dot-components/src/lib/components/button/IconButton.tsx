import React, { MouseEvent } from 'react';
import { CommonProps } from '../CommonProps';
import { useStylesWithRootClass } from '../useStylesWithRootClass';
import { DotIcon } from '../icon/Icon';
import { rootClassName, StyledIconButton } from './IconButton.styles';

export type IconButtonColor = 'default' | 'inherit' | 'primary' | 'secondary';
export type IconButtonSize = 'small' | 'medium';

export interface IconButtonProps extends CommonProps {
  /** Defines a string value that labels the current element **/
  ariaLabel?: string;
  /** 'default', 'inherit', 'primary', 'secondary' */
  color?: IconButtonColor;
  /** If true, the button will be disabled. */
  disabled?: boolean;
  /** The icon to display on the button */
  iconId: string;
  /** Event callback */
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  /** Determines the size of the button and padding around the icon */
  size?: IconButtonSize;
  /** Help text to be displayed on icon hover */
  titleTooltip?: string;
}

/** This component wraps the IconButton component from @material-ui. */
export const DotIconButton = ({
  ariaLabel,
  className,
  color = 'inherit',
  'data-testid': dataTestId,
  disabled = false,
  iconId,
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
        fontSize="small"
        iconId={iconId}
        title={titleTooltip}
      />
    </StyledIconButton>
  );
};
