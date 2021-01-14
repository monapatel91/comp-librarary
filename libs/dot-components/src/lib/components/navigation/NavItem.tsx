import React, { Fragment, MouseEvent, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, MenuItem, Theme, Typography } from '@material-ui/core';
import styled, { css } from 'styled-components';
import { CommonProps } from '../CommonProps';
import { useStylesWithRootClass } from '../makeStylesWithRootClass';
import { ButtonSize, ButtonType, DotButton } from '../button/Button';
import { DotIconButton, IconButtonSize } from '../button/IconButton';
import { DotIcon, IconFontSize } from '../icon/Icon';

export type DirectionType = 'horizontal' | 'vertical';
export type IconPlacementType = 'first' | 'last';
export type NavItemType = 'divider' | 'link' | 'button';

export interface NavigationItemProps extends CommonProps {
  /** The size of the button */
  btnSize?: ButtonSize;
  /** The type of button */
  btnType?: ButtonType;
  /** determines the direction of the nav items 'horizontal' or 'vertical' */
  direction?: DirectionType;
  /** The ID of the icon to display on the nav item */
  iconId?: string;
  /** Determines the size of the button and padding around the icon */
  iconBtnSize?: IconButtonSize;
  /** Space delimited CSS classes to be attributed to the nav item icon. */
  iconClasses?: string;
  /** determines the position of the icon 'first' or 'last' */
  iconPlacement?: IconPlacementType;
  /** Determines the size of the icon and spacing around it */
  iconSize?: IconFontSize;
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

const StyledNavItemDivider = styled.li`
  ${({ theme }: { theme: Theme }) => css`
    .dot-nav-item {
      align-items: stretch;
      display: flex;
      margin: 0;
      padding: 0;

      &:not(.divider) {
        cursor: pointer;
      }

      &.vertical > a {
        flex-direction: column;

        .material-icons {
          margin: 0;
        }
      }

      * {
        align-self: center;
      }

      a {
        align-items: stretch;
        color: ${theme.palette.grey[700]};
        display: flex;
        flex-grow: 1;
        text-decoration: none;

        &:hover,
        &:focus,
        &.active {
          color: #74b941;
        }

        * {
          align-self: center;
        }

        span:not(.material-icons) {
          flex-grow: 1;
        }
      }

      .material-icons {
        max-height: ${theme.spacing(8)}px;
        object-fit: scale-down;

        &.first {
          margin-right: ${theme.spacing(1)}px;
        }

        &.last {
          margin-left: ${theme.spacing(1)}px;
          order: 4;
        }
      }
    }
  `}
`;

export const DotNavItem = ({
  btnSize = 'small',
  btnType,
  className,
  'data-testid': dataTestId,
  direction = 'horizontal',
  iconId,
  iconBtnSize = 'small',
  iconClasses,
  iconPlacement = 'first',
  iconSize,
  items = [],
  navOpen = true,
  onClick,
  text,
  textClasses,
  title,
  type = 'link',
  url,
}: NavigationItemProps) => {
  const rootClasses = useStylesWithRootClass('dot-nav-item', className);
  switch (type) {
    case 'divider':
      return (
        <DotNavItemDivider
          className={rootClasses}
          data-testid={dataTestId}
          text={text}
        />
      );
    case 'button':
      return (
        <DotNavItemButton
          btnSize={btnSize}
          btnType={btnType}
          className={rootClasses}
          data-testid={dataTestId}
          direction={direction}
          icon={icon}
          iconBtnSize={iconBtnSize}
          iconClasses={iconClasses}
          onClick={onClick}
          text={text}
          title={title}
        />
      );
    default:
      if (items.length > 0) {
        return (
          <DotNavItemMenu
            className={rootClasses}
            data-testid={dataTestId}
            direction={direction}
            icon={icon}
            iconBgColor={iconBgColor}
            iconClasses={iconClasses}
            iconPlacement={iconPlacement}
            iconSize={iconSize}
            iconType={iconType}
            items={items}
            navOpen={navOpen}
            text={text}
            textClasses={textClasses}
            title={title}
          />
        );
      } else {
        return (
          <DotNavItemLink
            className={rootClasses}
            data-testid={dataTestId}
            direction={direction}
            icon={icon}
            iconBgColor={iconBgColor}
            iconClasses={iconClasses}
            iconPlacement={iconPlacement}
            iconSize={iconSize}
            iconType={iconType}
            onClick={onClick}
            text={text}
            textClasses={textClasses}
            title={title}
            url={url}
          />
        );
      }
  }
};

export const DotNavItemDivider = ({
  className,
  'data-testid': dataTestId,
  text,
}: NavigationItemProps) => (
<<<<<<< HEAD
  <li className={`divider ${className}`} data-testid={dataTestId}>
    {text && <Typography variant="h5">{text}</Typography>}
=======
  <li className={`${className} divider`} data-testid={dataTestId}>
    {text && <h5>{text}</h5>}
>>>>>>> issue #115: updating nav items based on PR feedback
  </li>
);

export const DotNavItemButton = ({
  btnSize,
  btnType,
  className,
  'data-testid': dataTestId,
  direction,
  icon,
  iconBtnSize,
  iconClasses,
  onClick,
  text,
  title,
}: NavigationItemProps) => (
  <li className={`${className} ${direction}`} data-testid={dataTestId}>
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
        iconId={icon}
        onClick={(event) => onClick && onClick(event)}
        size={iconBtnSize}
        titleTooltip={title}
      />
    )}
  </li>
);

export const DotNavItemLink = ({
  className,
  'data-testid': dataTestId,
  direction,
  icon,
  iconBgColor,
  iconClasses,
  iconPlacement,
  iconSize,
  iconType,
  onClick,
  text,
  textClasses,
  title,
  url,
}: NavigationItemProps) => (
  <li className={`${className} ${direction}`} data-testid={dataTestId}>
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
          className={`${iconClasses} ${iconPlacement}`}
          iconType={iconType}
          title={title || text}
        />
      )}
      {text && (
        <Typography className={textClasses} variant="body1">
          {text}
        </Typography>
      )}
    </NavLink>
  </li>
);

export const DotNavItemMenu = ({
  className,
  'data-testid': dataTestId,
  direction,
  icon,
  iconBgColor,
  iconClasses,
  iconPlacement,
  iconSize,
  iconType,
  items,
  navOpen,
  title,
  text,
  textClasses,
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
              iconId={iconId}
              children={text}
              onClick={(event) => onClick && onClick(event)}
              size={btnSize}
              type={btnType}
            />
          ) : (
            <DotIconButton
              className={iconClasses}
              iconId={iconId}
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
              {iconId && (
                <DotIcon
                  fontSize={iconSize}
                  iconId={iconId}
                  title={title || text}
                />
              )}
              {text && <span className={textClasses}>{text}</span>}
              <DotIcon iconId="chevron-right" className="nav-arrow" />
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
                    {item.iconId && (
                      <DotIcon
                        data-testid="icon"
                        fontSize={iconSize}
                        iconId={item.iconId}
                        className={`${iconClasses} ${iconPlacement}`}
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
              {iconId && (
                <DotIcon
                  data-testid="link-icon"
                  fontSize={iconSize}
                  iconId={iconId}
                  className={`${iconClasses} ${iconPlacement}`}
                  title={title || text}
                />
              )}
              {item.text && (
                <Typography className={textClasses} variant="body1">
                  {item.text}
                </Typography>
              )}
            </NavLink>
          </MenuItem>
        ))}
      </Menu>
    </Fragment>
  );
};

export default DotNavItem;
