import React, { MouseEvent } from 'react';
import { Typography } from '@material-ui/core';
import { CommonProps } from '../CommonProps';
import { useStylesWithRootClass } from '../useStylesWithRootClass';
import { rootClassName, StyledAvatar } from './Avatar.styles';
import { DotIcon } from '../icon/Icon';

type AvatarSize = 'small' | 'medium' | 'large';
type AvatarType = 'image' | 'text' | 'icon';

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
  const rootClasses = useStylesWithRootClass(rootClassName, className);

  const parsedText = () => {
    const textArray = text.split(' ');

    if (textArray.length > 1) {
      const firstInitial = textArray[0].slice(0, 1);
      const secondInitial = textArray[1].slice(0, 1);

      return `${firstInitial}${secondInitial}`;
    } else {
      return text ? text.slice(0, 1) : '';
    }
  };

  return (
    <StyledAvatar
      alt={alt}
      className={size}
      classes={{ root: rootClasses }}
      data-testid={dataTestId}
      onClick={(event) => (onClick ? onClick(event) : null)}
      src={type === 'image' ? imageSrc : null}
      variant={variant}
    >
      {type === 'icon' || (type === 'image' && !imageSrc) ? (
        <DotIcon
          data-testid={`${dataTestId}-icon`}
          iconId={iconId ? iconId : 'user'}
          fontSize={size === 'small' ? size : 'default'}
        />
      ) : type === 'text' ? (
        <Typography
          variant={
            size === 'small' ? 'caption' : size === 'large' ? 'h1' : 'h3'
          }
        >
          {parsedText()}
        </Typography>
      ) : null}
    </StyledAvatar>
  );
};
