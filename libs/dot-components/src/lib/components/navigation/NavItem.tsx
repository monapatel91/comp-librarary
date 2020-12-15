import React, { Fragment, MouseEvent } from 'react';
import { NavLink } from 'react-router-dom';
import { DotIcon, IconFontSize, IconType } from '../icon/Icon';

export type DirectionType = 'horizontal' | 'vertical';
export type IconPlacementType = 'first' | 'last';

export interface NavigationItemProps {
  /** determines the direction of the nav items 'horizontal' or 'vertical' */
  direction?: DirectionType;
  /** If true will display a divider */
  divider?: boolean;
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
  /** Determines the nav items which will be displayed inside of a sub menu */
  items?: Array<NavigationItemProps>;
  /** Event callback */
  onClick?: (event: MouseEvent) => void;
  /** The text displayed on the nav item */
  text?: string;
  /** Space delimited CSS classes to be attributed to the nav item text. */
  textClasses?: string;
  /** The tooltip text displayed on the nav item icon hover */
  title?: string;
  /** URL which the nav item links to */
  url?: string;
}

export const DotNavItem = ({
  direction = 'horizontal',
  divider = false,
  onClick,
  icon,
  iconBgColor,
  iconClasses,
  iconPlacement = 'first',
  iconSize,
  iconType,
  items = [],
  text,
  textClasses,
  title,
  url,
}: NavigationItemProps) => {
  if (divider) {
    return <li className="divider">{title && <h5>{title}</h5>}</li>;
  } else if (items.length > 0) {
    return (
      <li className={`has-subnav ${direction}`}>
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
        <DotIcon icon="chevron-right" iconClasses="nav-arrow" />
        <ul className="flyout">
          {items.map((item: NavigationItemProps, index: number) => {
            return <DotNavItem {...item} iconSize={iconSize} key={index} />;
          })}
        </ul>
      </li>
    );
  } else {
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
  }
};

export default DotNavItem;
