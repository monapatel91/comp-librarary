import React, { MouseEvent } from 'react';
import { CommonProps } from '../CommonProps';
import { useStylesWithRootClass } from '../makeStylesWithRootClass';
import { DotIcon } from '../icon/Icon';
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
  /** Event callback */
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  /** Help text to be displayed on icon hover */
  titleTooltip?: string;
  /** Determines the size of the button and padding around the icon */
  size?: IconButtonSize;
}

/** This component wraps the IconButton component from @material-ui. */
export const DotIconButton = ({
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

export default DotIconButton;
