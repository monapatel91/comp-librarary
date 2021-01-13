import React, { MouseEvent } from 'react';
import { IconButton, Theme } from '@material-ui/core';
import styled, { css } from 'styled-components';

import { CommonProps } from '../CommonProps';
import { useStylesWithRootClass } from '../makeStylesWithRootClass';

import { DotIcon, IconFontSize } from '../icon/Icon';

export type IconButtonColor = 'default' | 'inherit' | 'primary' | 'secondary';
export type IconButtonSize = 'small' | 'medium';

const StyledIconButton = styled(IconButton)`
  ${({ theme }: { theme: Theme }) => css`
    &.MuiIconButton-root {
      padding: ${theme.spacing(1)}px;

      &.MuiIconButton-sizeSmall {
        padding: ${theme.spacing(1 * 0.25)}px;
      }
    }
  `}
`;

export interface IconButtonProps extends CommonProps {
  /** 'default', 'inherit', 'primary', 'secondary' */
  color?: IconButtonColor;
  /** If true, the button will be disabled. */
  disabled?: boolean;
  /** The icon to display on the button */
  iconId: string;
  /** Determines the size of the icon */
  fontSize?: IconFontSize;
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
  fontSize = 'default',
  onClick,
  titleTooltip,
  size = 'medium',
}: IconButtonProps) => {
  const rootClasses = useStylesWithRootClass('dot-icon-btn', className);

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
      <DotIcon fontSize={fontSize} icon={iconId} />
    </StyledIconButton>
  );
};

export default DotIconButton;
