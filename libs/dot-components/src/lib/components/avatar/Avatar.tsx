import React, { MouseEvent, CSSProperties } from 'react';
import { CommonProps } from '../CommonProps';
import { useStylesWithRootClass } from '../useStylesWithRootClass';
import { rootClassName, StyledAvatar } from './Avatar.styles';
import { DotIcon, IconFontSize } from '../icon/Icon';
import { DotTypography, TypographyVariant } from '../typography/Typography';
import { DotTooltip } from '../tooltip/Tooltip';
import { getAvatarColorForInputText } from '../helpers';

export type AvatarSize = 'small' | 'medium' | 'large';
export type AvatarType = 'image' | 'text' | 'icon';
export type AvatarVariant = 'circular' | 'square';
export type AvatarColor =
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
  color?: AvatarColor;
  /** To render avatar as button or other element type */
  component?: string;
  /** The ID of the icon to display on the avatar */
  iconId?: string;
  /** Source for the image used for the avatar */
  imageSrc?: string;
  /** Event callback */
  onClick?: (event: MouseEvent) => void;
  /** Size of avatar displayed */
  size?: AvatarSize;
  /** To be used to override styles inline */
  style?: CSSProperties;
  /** The text to be displayed. Only the first 2 letters will be displayed. */
  text?: string;
  /** The type of the avatar */
  type?: AvatarType;
  /** Tooltip for avatar */
  tooltip?: string;
  /** The shape of the avatar */
  variant?: AvatarVariant;
}

export const DotAvatar = ({
  alt,
  ariaLabel,
  className,
  component = 'div',
  color,
  'data-testid': dataTestId,
  iconId,
  imageSrc,
  onClick,
  size = 'medium',
  text = alt,
  type = 'image',
  tooltip,
  variant = 'circular',
  style,
}: AvatarProps) => {
  const rootClasses = useStylesWithRootClass(rootClassName, className);

  const getAvatarColor = (): AvatarColor => {
    if (color) return color;
    if (text && text !== alt) return getAvatarColorForInputText(text);
    return 'default';
  };

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

  const getHeadingFromAvatarSize = (): TypographyVariant =>
    size === 'large' ? 'h1' : 'h3';

  const getIconFontSizeFromAvatarSize = (): IconFontSize =>
    size === 'small' ? size : 'medium';

  return (
    <DotTooltip title={tooltip}>
      <StyledAvatar
        alt={alt}
        aria-label={ariaLabel}
        className={size}
        color={getAvatarColor()}
        component={onClick ? 'button' : component}
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
            fontSize={getIconFontSizeFromAvatarSize()}
          />
        ) : type === 'text' ? (
          <DotTypography
            variant={size === 'small' ? 'caption' : getHeadingFromAvatarSize()}
          >
            {parsedText()}
          </DotTypography>
        ) : null}
      </StyledAvatar>
    </DotTooltip>
  );
};
