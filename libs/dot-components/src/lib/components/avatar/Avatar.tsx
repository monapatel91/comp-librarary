import React from 'react';
import { Avatar, createStyles, Theme } from '@material-ui/core';

import { CommonProps } from '../CommonProps';
import { useStylesWithRootClass } from '../makeStylesWithRootClass';
import { DotIcon } from '../icon/Icon';

type AvatarSize = 'small' | 'medium' | 'large';

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
  alt?: string;
  /** The ID of the icon to display on the button */
  iconId?: string;
  /** Size of avatar displayed */
  size?: AvatarSize;
}

// TODO: need to use src or srcSet in order to utilize alt text prop
export const DotAvatar = ({
  alt,
  className,
  'data-testid': dataTestId,
  iconId,
  size = 'medium',
}: AvatarProps) => {
  const classes = useStylesWithRootClass('dot-avatar', styles, className, {
    size,
  });

  // currently the icon component calls medium "default"
  const iconSize = size === 'medium' ? 'default' : size;

  return (
    <Avatar alt={alt} data-testid={dataTestId} classes={{ ...classes }}>
      {iconId ? <DotIcon icon={iconId} fontSize={iconSize} /> : null}
    </Avatar>
  );
};

export default DotAvatar;
