import React from 'react';
import { Avatar } from '@material-ui/core';

import './Avatar.scss';

import { CommonProps } from '../CommonProps';

export interface AvatarProps extends CommonProps {
  /** Text displayed on hover */
  alt?: string;
  /** Size of avatar displayed */
  size?: 'small' | 'medium';
}

// TODO: need to use src or srcSet in order to utilize alt text prop
export const DotAvatar = ({
  alt,
  className,
  'data-testid': dataTestId,
  size = 'medium',
}: AvatarProps) => {
  return (
    <Avatar
      alt={alt}
      data-testid={dataTestId}
      classes={{ root: `dot-avatar ${size} ${className}` }}
    />
  );
};

export default DotAvatar;
