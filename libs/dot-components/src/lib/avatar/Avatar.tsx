import React from 'react';
import { Avatar } from '@material-ui/core';

import './Avatar.scss';

export interface AvatarProps {
  /** Text displayed on hover */
  alt?: string;
  /** Space delimited CSS classes to be attributed to the avatar. */
  classes?: string;
  /** Size of avatar displayed */
  size?: 'small' | 'medium';
}

// TODO: need to use src or srcSet in order to utilize alt text prop
export const DotAvatar = ({ alt, classes, size = 'medium' }: AvatarProps) => {
  return (
    <Avatar alt={alt} classes={{ root: `dot-avatar ${size} ${classes}` }} />
  );
};

export default DotAvatar;
