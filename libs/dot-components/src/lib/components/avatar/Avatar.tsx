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
  /** Used for the root node; button is used when onClick is passed. */
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
  /** Tooltip for avatar */
  tooltip?: string;
  /** The type of the avatar */
  type?: AvatarType;
  /** The shape of the avatar */
  variant?: AvatarVariant;
}

interface AvatarContentProps {
  'data-testid'?: string;
  iconId?: string;
  imageSrc?: string;
  size: AvatarSize;
  text: string;
  type: AvatarType;
}

const AvatarContent = ({
  'data-testid': dataTestId,
  iconId,
  imageSrc,
  size,
  text,
  type,
}: AvatarContentProps) => {
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

  if (type === 'icon' || (type === 'image' && !imageSrc)) {
    return (
      <DotIcon
        data-testid={`${dataTestId}-icon`}
        fontSize={getIconFontSizeFromAvatarSize()}
        iconId={iconId || 'user'}
      />
    );
  }

  if (type === 'text') {
    return (
      <DotTypography
        variant={size === 'small' ? 'caption' : getHeadingFromAvatarSize()}
      >
        {parsedText()}
      </DotTypography>
    );
  }

  return null;
};

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
  variant,
  style,
}: AvatarProps) => {
  const rootClasses = useStylesWithRootClass(rootClassName, className);

  const getAvatarColor = (): AvatarColor => {
    if (color) return color;
    if (text && text !== alt) return getAvatarColorForInputText(text);
    return 'default';
  };

  return (
    <DotTooltip title={tooltip}>
      <StyledAvatar
        alt={alt}
        aria-label={ariaLabel}
        className={size}
        classes={{ root: rootClasses, img: 'dot-img' }}
        color={getAvatarColor()}
        component={onClick ? 'button' : component}
        data-testid={dataTestId}
        onClick={(event: MouseEvent) => (onClick ? onClick(event) : null)}
        src={type === 'image' ? imageSrc : null}
        style={style}
        variant={variant}
      >
        <AvatarContent
          data-testid={dataTestId}
          iconId={iconId}
          imageSrc={imageSrc}
          text={text}
          type={type}
          size={size}
        />
      </StyledAvatar>
    </DotTooltip>
  );
};
