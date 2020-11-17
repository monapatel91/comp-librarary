import React, { MouseEvent } from 'react';
import { NavLink } from 'react-router-dom';
import { DotIcon, IconFontSize, IconType } from '../icon/Icon';

export type DirectionType = 'horizontal' | 'vertical';
export type IconPlacementType = 'first' | 'last';

export interface NavigationItemProps {
  /** determines the direction of the nav items 'horizontal' or 'vertical' */
  direction?: DirectionType;
  /** The ID of the icon to display on the nav item */
  icon?: string;
  /** The background color of the icon container */
  iconBgColor?: string;
  /** Space delimited CSS classes to be attributed to the nav item icon. */
  iconClasses?: string;
  /** determines the position of the icon 'first' or 'last' */
  iconPlacement?: IconPlacementType;
  /** Determines the size of the icon and spacing around it */
  iconSize?: IconFontSize;
  /** Determines the background color and shape of containing element */
  iconType?: IconType;
  /** Event callback */
  onClick?: (event: MouseEvent) => void;
  /** The text displayed on the nav item */
  text?: string;
  /** Space delimited CSS classes to be attributed to the nav item text. */
  textClasses?: string;
  /** The tooltip text displayed on the nav item icon hover */
  title?: string;
  /** URL which the nav item links to */
  url: string;
}

export const DotNavItem = ({
  direction = 'horizontal',
  onClick,
  icon,
  iconBgColor,
  iconClasses,
  iconPlacement = 'first',
  iconSize = 'default',
  iconType,
  text,
  textClasses,
  title,
  url,
}: NavigationItemProps) => {
  return (
    <li className={direction}>
      <NavLink
        exact
        to={url}
        onClick={(event) => onClick && onClick(event)}
        title={text}
      >
        {icon && (
          <DotIcon
            fontSize={iconSize}
            icon={icon}
            iconBgColor={iconBgColor}
            iconClasses={`${iconClasses} ${iconPlacement}`}
            iconType={iconType}
            title={title || text}
          />
        )}
        {text && <span className={textClasses}>{text}</span>}
      </NavLink>
    </li>
  );
};

export default DotNavItem;
