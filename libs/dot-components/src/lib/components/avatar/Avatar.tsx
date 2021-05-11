import React, { MouseEvent, CSSProperties } from 'react';
import { CommonProps } from '../CommonProps';
import { useStylesWithRootClass } from '../useStylesWithRootClass';
import { rootClassName, StyledAvatar } from './Avatar.styles';
import { DotIcon } from '../icon/Icon';
import { DotTypography } from '../typography/Typography';

type AvatarSize = 'small' | 'medium' | 'large';
type AvatarType = 'image' | 'text' | 'icon';
type AvatarVariant = 'circular' | 'square';
type AvatarColor =
  | 'default'
  | 'green'
  | 'blue'
  | 'orange'
  | 'purple'
  | 'yellow'
  | 'red'
  | 'darkGrey'
  | 'lightGrey';

export interface AvatarProps extends CommonProps {
  /** Text displayed on hover */
  alt: string;
  /** Color for avatar (ignored if type is 'image') */
  color?: string;
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
  variant?: AvatarVariant;
  /** To be used to override syles inline */
  style?: CSSProperties;
}

export const DotAvatar = ({
  alt,
  className,
  color = 'default',
  'data-testid': dataTestId,
  iconId,
  imageSrc,
  onClick,
  size = 'medium',
  text = alt,
  type = 'image',
  variant = 'circular',
  style,
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
      color={color}
      classes={{ root: rootClasses, img: 'dot-img' }}
      data-testid={dataTestId}
      onClick={(event: MouseEvent) => (onClick ? onClick(event) : null)}
      src={type === 'image' ? imageSrc : null}
      variant={variant}
      style={style}
    >
      {type === 'icon' || (type === 'image' && !imageSrc) ? (
        <DotIcon
          data-testid={`${dataTestId}-icon`}
          iconId={iconId ? iconId : 'user'}
          fontSize={size === 'small' ? size : 'default'}
        />
      ) : type === 'text' ? (
        <DotTypography
          variant={
            size === 'small' ? 'caption' : size === 'large' ? 'h1' : 'h3'
          }
        >
          {parsedText()}
        </DotTypography>
      ) : null}
    </StyledAvatar>
  );
};
