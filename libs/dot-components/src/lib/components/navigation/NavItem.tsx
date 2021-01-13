import React, { Fragment, MouseEvent, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, MenuItem } from '@material-ui/core';
import { ButtonSize, ButtonType, DotButton } from '../button/Button';
import { DotIconButton, IconButtonSize } from '../button/IconButton';
import { DotIcon, IconFontSize, IconType } from '../icon/Icon';

export type DirectionType = 'horizontal' | 'vertical';
export type IconPlacementType = 'first' | 'last';
export type NavItemType = 'divider' | 'link' | 'button';

export interface NavigationItemProps {
  /** The size of the button */
  btnSize?: ButtonSize;
  /** The type of button */
  btnType?: ButtonType;
  /** determines the direction of the nav items 'horizontal' or 'vertical' */
  direction?: DirectionType;
  /** The ID of the icon to display on the nav item */
  icon?: string;
  /** The background color of the icon container */
  iconBgColor?: string;
  /** Determines the size of the button and padding around the icon */
  iconBtnSize?: IconButtonSize;
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
  /** Used to inform the flyout menu if the navigaton is collapsed or not */
  navOpen?: boolean;
  /** Event callback */
  onClick?: (event: MouseEvent) => void;
  /** The text displayed on the nav item */
  text?: string;
  /** Space delimited CSS classes to be attributed to the nav item text. */
  textClasses?: string;
  /** The tooltip text displayed on the nav item icon hover */
  title?: string;
  /** Specify what type of navigation item "divider", "link", "button" */
  type?: NavItemType;
  /** URL which the nav item links to */
  url?: string;
}

export const DotNavItem = ({
  btnSize = 'small',
  btnType,
  direction = 'horizontal',
  icon,
  iconBgColor,
  iconBtnSize = 'small',
  iconClasses,
  iconPlacement = 'first',
  iconSize,
  iconType,
  items = [],
  navOpen = true,
  onClick,
  text,
  textClasses,
  title,
  type = 'link',
  url,
}: NavigationItemProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [open, setOpen] = useState(false);

  const handleMenuClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setOpen(false);
  };

  switch (type) {
    case 'divider':
      return <li className="divider">{text && <h5>{text}</h5>}</li>;
    case 'button':
      return (
        <li className={direction}>
          {text ? (
            <DotButton
              iconId={icon}
              label={text}
              onClick={(event) => onClick && onClick(event)}
              size={btnSize}
              type={btnType}
            />
          ) : (
            <DotIconButton
              className={iconClasses}
              fontSize={iconSize}
              iconId={icon}
              onClick={(event) => onClick && onClick(event)}
              size={iconBtnSize}
              titleTooltip={title}
            />
          )}
        </li>
      );
    default:
      if (items.length > 0) {
        return (
          <Fragment>
            <li
              className={`has-subnav ${direction}`}
              onClick={(event) => handleMenuClick(event)}
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
              <DotIcon icon="chevron-right" iconClasses="nav-arrow" />
            </li>
            <Menu
              anchorEl={anchorEl}
              classes={{ paper: `dot-flyout ${!navOpen ? 'collapsed' : ''}` }}
              keepMounted
              open={open}
              onClose={handleMenuClose}
            >
              {items.map((item: NavigationItemProps, index: number) => (
                <MenuItem key={index} onClick={handleMenuClose}>
                  <NavLink exact to={item.url} title={item.text}>
                    {item.icon && (
                      <DotIcon
                        fontSize={iconSize}
                        icon={item.icon}
                        iconBgColor={iconBgColor}
                        iconClasses={`${iconClasses} ${iconPlacement}`}
                        iconType={iconType}
                        title={item.title || item.text}
                      />
                    )}
                    {item.text && (
                      <span className={textClasses}>{item.text}</span>
                    )}
                  </NavLink>
                </MenuItem>
              ))}
            </Menu>
          </Fragment>
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
  }
};

export default DotNavItem;
