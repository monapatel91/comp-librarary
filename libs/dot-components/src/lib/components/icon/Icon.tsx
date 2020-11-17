import React from 'react';
import { Icon } from '@material-ui/core';
import './Icon.scss';
import '../../font-icon/style.scss';

export type IconType = 'circle' | 'square' | 'transparent';
export type IconFontSize = 'inherit' | 'default' | 'small' | 'large';

export interface IconProps {
  /** data attribute passed through for testing purposes ONLY */
  'data-testid'?: string;
  /** Determines the size of the icon and spacing around it */
  fontSize?: IconFontSize;
  /** The ID of the icon to display on the button */
  icon: string;
  /** The background color of the icon container */
  iconBgColor?: string;
  /** A series of space delimited CSS classes to be attributed to the button. */
  iconClasses?: string;
  /** Determines the background color and shape of containing element */
  iconType?: IconType;
  /** Tooltip text displayed on hover */
  title?: string;
}

export const sbFontSizeOptions = {
  Default: 'default',
  Small: 'small',
  Large: 'large',
};

export const DotIcon = ({
  fontSize = 'default',
  icon,
  iconBgColor,
  iconClasses = '',
  iconType = 'transparent',
  title = '',
  'data-testid': dataTestId = 'icon',
}: IconProps) => {
  return (
    <Icon
      aria-hidden="false"
      className={`dot-icon ${fontSize} ${iconType} ${iconClasses}`}
      data-testid={dataTestId}
      fontSize={fontSize}
      style={{ background: iconBgColor }}
      title={title}
    >
      <i className={`icon-${icon}`} />
    </Icon>
  );
};

export default DotIcon;
