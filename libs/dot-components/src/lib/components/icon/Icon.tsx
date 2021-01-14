import React from 'react';
import { Icon, Theme } from '@material-ui/core';
import styled, { css } from 'styled-components';
import { CommonProps } from '../CommonProps';
import { useStylesWithRootClass } from '../makeStylesWithRootClass';
import '../../fonts/font-icon/style.scss';

export type IconFontSize = 'inherit' | 'default' | 'small';

const StyledIcon = styled(Icon)`
<<<<<<< HEAD
  ${({ theme }: { theme: Theme }) => css`
    &.dot-icon {
      align-items: center;
=======
  ${({ theme, iconBgColor }: { theme: Theme; iconBgColor: string }) => css`
    &.dot-icon {
      align-items: center;
      background-color: ${iconBgColor ? iconBgColor : theme.palette.grey[100]}
>>>>>>> issue #116: update Icon to be styled component
      box-sizing: content-box;
      display: flex;
      font-size: 18px;
      height: 24px;
      justify-content: center;
      padding: ${theme.spacing(1)}px;
      width: 24px;

      &.MuiIcon-fontSizeLarge {
        font-size: 28px;
        height: 35px;
        width: 35px;
      }
      &.MuiIcon-fontSizeSmall {
        font-size: 16px;
        height: 20px;
        width: 20px;
      }
<<<<<<< HEAD
=======

      &.transparent {
        background: transparent;
      }
      &.circle {
        border-radius: 50%;
      }
      &.square {
        border-radius: 4px;
      }
>>>>>>> issue #116: update Icon to be styled component
    }
  `}
`;

export interface IconProps extends CommonProps {
  /** Determines the size of the icon and spacing around it */
  fontSize?: IconFontSize;
  /** The ID of the icon to display on the button */
<<<<<<< HEAD
  iconId: string;
=======
  icon: string;
  /** The background color of the icon container */
  iconBgColor?: string;
  /** Determines the background color and shape of containing element */
  iconType?: IconType;
>>>>>>> issue #116: update Icon to be styled component
  /** Tooltip text displayed on hover */
  title?: string;
}

/** This component wraps the Icon component from @material-ui. */
export const DotIcon = ({
  className,
<<<<<<< HEAD
<<<<<<< HEAD
  'data-testid': dataTestId,
  fontSize = 'default',
  iconId,
  title = '',
}: IconProps) => {
  const rootClasses = useStylesWithRootClass('dot-icon', className);
=======
  'data-testid': dataTestId = 'icon',
=======
  'data-testid': dataTestId,
>>>>>>> issue #116: addressing PR feedback
  fontSize = 'default',
  icon,
  iconType = 'transparent',
  title = '',
}: IconProps) => {
  const rootClasses = useStylesWithRootClass(
    'dot-icon',
    `${iconType} ${className}`
  );
>>>>>>> issue #116: update Icon to be styled component

  return (
    <StyledIcon
      aria-hidden="false"
      classes={{ root: rootClasses }}
      data-testid={dataTestId}
      fontSize={fontSize}
      title={title}
    >
<<<<<<< HEAD
      <i className={`icon-${iconId}`} />
=======
      <i className={`icon-${icon}`} />
>>>>>>> issue #116: update Icon to be styled component
    </StyledIcon>
  );
};

export default DotIcon;
