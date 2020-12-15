import React from 'react';
import { Avatar, createStyles, Theme } from '@material-ui/core';

import { CommonProps } from '../CommonProps';
import { useStylesWithRootClass } from '../makeStylesWithRootClass';

type AvatarSize = 'small' | 'medium';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      height: (props: { size: AvatarSize }) => {
        switch (props.size) {
          case 'small':
            return theme.spacing(3);

          default:
            return theme.spacing(4);
        }
      },
      width: (props: { size: AvatarSize }) => {
        switch (props.size) {
          case 'small':
            return theme.spacing(3);

          default:
            return theme.spacing(4);
        }
      },
    },
  });

export interface AvatarProps extends CommonProps {
  /** Text displayed on hover */
  alt?: string;
  /** Size of avatar displayed */
  size?: AvatarSize;
}

// TODO: need to use src or srcSet in order to utilize alt text prop
export const DotAvatar = ({
  alt,
  className,
  'data-testid': dataTestId,
  size = 'medium',
}: AvatarProps) => {
  const classes = useStylesWithRootClass('dot-avatar', styles, className, {
    size,
  });

  return <Avatar alt={alt} data-testid={dataTestId} classes={{ ...classes }} />;
};

export default DotAvatar;
