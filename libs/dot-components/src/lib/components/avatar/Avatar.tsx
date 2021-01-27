import React, { MouseEvent, ReactNode } from 'react';
import { Avatar, Theme, Typography } from '@material-ui/core';
import { Variant } from '@material-ui/core/styles/createTypography';
import styled, { css } from 'styled-components';

import { CommonProps } from '../CommonProps';
import { useStylesWithRootClass } from '../makeStylesWithRootClass';
import { DotIcon, IconFontSize } from '../icon/Icon';

type AvatarSize = 'small' | 'medium' | 'large';
type AvatarType = 'image' | 'text' | 'icon';

const avatarSpacing = {
  small: 3,
  medium: 5,
  large: 7,
};

const StyledAvatar = styled(Avatar)`
  ${({ theme }: { theme: Theme }) => css`
    &.MuiAvatar-root {
      background-color: ${theme.palette.grey[100]};
      color: ${theme.palette.text.primary};

      &.small {
        height: ${theme.spacing(avatarSpacing.small)}px;
        width: ${theme.spacing(avatarSpacing.small)}px;
      }

      &.medium {
        height: ${theme.spacing(avatarSpacing.medium)}px;
        width: ${theme.spacing(avatarSpacing.medium)}px;
      }

      &.large {
        height: ${theme.spacing(avatarSpacing.large)}px;
        width: ${theme.spacing(avatarSpacing.large)}px;
      }
    }
  `}
`;

export interface AvatarProps extends CommonProps {
  /** Text displayed on hover */
  alt: string;
  /** The ID of the icon to display on the avatar */
  iconId?: string;
  /** Source for the image used for the avatar */
  imageSrc?: string;
  /** Event callback */
  onClick?: (event: MouseEvent) => void;
  /** Size of avatar displayed */
  size?: AvatarSize;
  /** The text to be displayed. Only the first 2 letters will be displayed. */
  text?: string;
  /** The type of the avatar */
  type?: AvatarType;
  /** The shape of the avatar */
  variant?: 'circle' | 'square';
}

export const DotAvatar = ({
  alt,
  className,
  'data-testid': dataTestId,
  iconId,
  imageSrc,
  onClick,
  size = 'medium',
  text,
  type = 'image',
  variant = 'circle',
}: AvatarProps) => {
  const rootClasses = useStylesWithRootClass('dot-avatar', className);

  // determine values for variables dependent on size
  let iconFontSize: IconFontSize;
  let textVariant: Variant;
  switch (size) {
    case 'small':
      iconFontSize = size;
      textVariant = 'caption';
      break;

    case 'medium':
      iconFontSize = 'default';
      textVariant = 'h3';
      break;

    case 'large':
      iconFontSize = 'default';
      textVariant = 'h1';
      break;
  }

  let child: ReactNode;
  switch (type) {
    case 'icon':
      child = (
        <DotIcon
          data-testid={`${dataTestId}-icon`}
          iconId={iconId ? iconId : 'user'}
          fontSize={iconFontSize}
        />
      );
      break;

    case 'image':
      if (!imageSrc) {
        child = (
          <DotIcon
            data-testid={`${dataTestId}-icon`}
            iconId={iconId ? iconId : 'user'}
            fontSize={iconFontSize}
          />
        );
      }
      break;

    case 'text':
      child = (
        <Typography variant={textVariant}>
          {text ? text.slice(0, 2) : ''}
        </Typography>
      );
      break;
  }

  return (
    <StyledAvatar
      alt={alt}
      className={size}
      classes={{ root: rootClasses }}
      data-testid={dataTestId}
      onClick={(event) => (onClick ? onClick(event) : null)}
      src={imageSrc}
      variant={variant}
    >
      {child}
    </StyledAvatar>
  );
};

export default DotAvatar;
