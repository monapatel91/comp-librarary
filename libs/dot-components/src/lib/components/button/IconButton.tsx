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
    &.dot-icon-btn {
      &.MuiIconButton-sizeSmall {
        padding: ${theme.spacing(1 * 0.25)}px;

        .dot-icon {
          height: 20px;
          width: 20px;
        }
      }

      .dot-icon {
        padding: 0;
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
      <DotIcon fontSize="small" icon={iconId} title={titleTooltip} />
    </StyledIconButton>
  );
};

export default DotIconButton;
