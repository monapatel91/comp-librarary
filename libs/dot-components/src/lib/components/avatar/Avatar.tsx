import React, { ReactNode } from 'react';
import { Avatar, createStyles, Theme, Typography } from '@material-ui/core';
import { Variant } from '@material-ui/core/styles/createTypography';

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

const styles = (theme: Theme) =>
  createStyles({
    root: {
      height: (props: { size: AvatarSize }) => {
        switch (props.size) {
          case 'small':
            return theme.spacing(avatarSpacing.small);

          case 'large':
            return theme.spacing(avatarSpacing.large);

          default:
            return theme.spacing(avatarSpacing.medium);
        }
      },
      width: (props: { size: AvatarSize }) => {
        switch (props.size) {
          case 'small':
            return theme.spacing(avatarSpacing.small);

          case 'large':
            return theme.spacing(avatarSpacing.large);

          default:
            return theme.spacing(avatarSpacing.medium);
        }
      },
    },
  });

export interface AvatarProps extends CommonProps {
  /** Text displayed on hover */
  alt: string;
  /** The ID of the icon to display on the avatar */
  iconId?: string;
  /** Source for the image used for the avatar */
  imageSrc?: string;
  /** Size of avatar displayed */
  size?: AvatarSize;
  /** The text to be displayed. Only the first 2 letters will be displayed. */
  text?: string;
  /** The type of the avatar */
  type?: AvatarType;
  /** The shape of the avatar */
  variant?: 'circle' | 'square';
}

// TODO: need to use src or srcSet in order to utilize alt text prop
export const DotAvatar = ({
  alt,
  className,
  'data-testid': dataTestId,
  iconId,
  imageSrc,
  size = 'medium',
  text,
  type = 'image',
  variant = 'circle',
}: AvatarProps) => {
  const classes = useStylesWithRootClass('dot-avatar', styles, className, {
    size,
  });

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
      child = <DotIcon icon={iconId} fontSize={iconFontSize} />;
      break;

    case 'image':
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
    <Avatar
      alt={alt}
      data-testid={dataTestId}
      classes={{ ...classes }}
      variant={variant}
      src={imageSrc}
    >
      {child}
    </Avatar>
  );
};

export default DotAvatar;
