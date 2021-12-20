import React from 'react';
import { AvatarGroup } from '@mui/material';
import { CommonProps } from '../CommonProps';
import { useStylesWithRootClass } from '../useStylesWithRootClass';
import { AvatarProps, DotAvatar } from '../avatar/Avatar';

export type AvatarGroupSpacing = 'medium' | 'small' | number;

export interface AvatarGroupProps extends CommonProps {
  /** Array of avatars displayed inside the group */
  avatars: Array<AvatarProps>;
  /** Max avatars to show before +x */
  max?: number;
  /** Spacing between avatars */
  spacing?: AvatarGroupSpacing;
}

export const DotAvatarGroup = ({
  ariaLabel,
  avatars,
  className,
  'data-testid': dataTestId,
  max = 3,
  spacing = 'medium',
}: AvatarGroupProps) => {
  const rootClasses = useStylesWithRootClass('dot-avatar-group', className);

  return (
    <AvatarGroup
      aria-label={ariaLabel}
      classes={{ root: rootClasses }}
      data-testid={dataTestId}
      max={max}
      spacing={spacing}
    >
      {avatars.map((avatar, index) => (
        <DotAvatar {...avatar} key={index} />
      ))}
    </AvatarGroup>
  );
};
