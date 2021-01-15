import React from 'react';
import { Icon, Theme } from '@material-ui/core';
import styled, { css } from 'styled-components';
import { CommonProps } from '../CommonProps';
import { useStylesWithRootClass } from '../makeStylesWithRootClass';
import '../../fonts/font-icon/style.scss';

export type IconFontSize = 'inherit' | 'default' | 'small';

const StyledIcon = styled(Icon)`
  ${({ theme }: { theme: Theme }) => css`
    &.dot-icon {
      align-items: center;
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
    }
  `}
`;

export interface IconProps extends CommonProps {
  /** Determines the size of the icon and spacing around it */
  fontSize?: IconFontSize;
  /** The ID of the icon to display on the button */
  icon: string;
  /** Tooltip text displayed on hover */
  title?: string;
}

/** This component wraps the Icon component from @material-ui. */
export const DotIcon = ({
  className,
  'data-testid': dataTestId,
  fontSize = 'default',
  icon,
  title = '',
}: IconProps) => {
  const rootClasses = useStylesWithRootClass('dot-icon', className);

  return (
    <StyledIcon
      aria-hidden="false"
      classes={{ root: rootClasses }}
      data-testid={dataTestId}
      fontSize={fontSize}
      title={title}
    >
      <i className={`icon-${icon}`} />
    </StyledIcon>
  );
};

export default DotIcon;
