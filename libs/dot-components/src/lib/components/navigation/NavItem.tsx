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
  /** determines the direction of the nav container 'horizontal' or 'vertical' */
  menuDirection?: DirectionType;
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
  &.dot-nav-item {
    align-items: stretch;
    display: flex;
    margin: 0;
    padding: 0;

    * {
      align-self: center;
    }
  }
`;

const StyledNavItem = styled.li`
  ${({ theme }: { theme: Theme }) => css`
    &.dot-nav-item {
      align-items: stretch;
      display: flex;
      margin: 0;
      padding: 0;
      cursor: pointer;

      &.vertical > a {
        flex-direction: column;

        .dot-icon {
          margin: 0;
        }
      }

      * {
        align-self: center;
      }

      .dot-button {
        justify-content: flex-start;
        padding: ${theme.spacing(1)}px;

        .MuiButton-startIcon {
          margin: ${theme.spacing(0, 1, 0, 0)};
        }

        .MuiButton-endIcon {
          display: flex;
          flex-grow: 1;
          justify-content: flex-end;
        }
      }

      a {
        color: ${theme.palette.grey[700]};
        display: flex;
        flex-grow: 1;
        padding: ${theme.spacing(1)}px;
        text-decoration: none;

        &:hover,
        &:focus,
        &.active {
          background: ${theme.palette.grey[50]};
        }

        * {
          align-self: center;
        }

        p {
          margin-bottom: 0;
        }

        .dot-icon {
          max-height: ${theme.spacing(8)}px;
          object-fit: scale-down;
          padding: 0;

          &.first {
            margin-right: ${theme.spacing(1)}px;
          }

          &.last {
            margin-left: ${theme.spacing(1)}px;
            order: 4;
          }
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
  menuDirection,
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
          iconId={iconId}
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
            iconId={iconId}
            iconClasses={iconClasses}
            iconPlacement={iconPlacement}
            iconSize={iconSize}
            items={items}
            menuDirection={menuDirection}
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
            iconId={iconId}
            iconClasses={iconClasses}
            iconPlacement={iconPlacement}
            iconSize={iconSize}
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
  <StyledNavItemDivider
    className={`divider ${className}`}
    data-testid={dataTestId}
  >
    {text && <Typography variant="h5">{text}</Typography>}
  </StyledNavItemDivider>
);

export const DotNavItemButton = ({
  btnSize,
  btnType,
  className,
  'data-testid': dataTestId,
  direction,
  iconId,
  iconBtnSize,
  iconClasses,
  onClick,
  text,
  title,
}: NavigationItemProps) => (
  <StyledNavItem
    className={`${className} ${direction}`}
    data-testid={dataTestId}
  >
    {text ? (
      <DotButton
        onClick={(event) => onClick && onClick(event)}
        size={btnSize}
        startIcon={<DotIcon data-testid="icon" iconId={iconId} />}
        type={btnType}
      >
        {text}
      </DotButton>
    ) : (
      <DotIconButton
        className={iconClasses}
        iconId={iconId}
        onClick={(event) => onClick && onClick(event)}
        size={iconBtnSize}
        titleTooltip={title}
      />
    )}
  </StyledNavItem>
);

export const DotNavItemLink = ({
  className,
  'data-testid': dataTestId,
  direction,
  iconId,
  iconClasses,
  iconPlacement,
  iconSize,
  onClick,
  text,
  textClasses,
  title,
  url,
}: NavigationItemProps) => (
  <StyledNavItem
    className={`${className} ${direction}`}
    data-testid={dataTestId}
  >
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
      {text && (
        <Typography className={textClasses} variant="body1">
          {text}
        </Typography>
      )}
    </NavLink>
  </StyledNavItem>
);

export const DotNavItemMenu = ({
  className,
  'data-testid': dataTestId,
  direction,
  iconId,
  iconClasses,
  iconPlacement,
  iconSize,
  items,
  menuDirection,
  navOpen,
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

  return (
    <Fragment>
      <StyledNavItem
        className={`${className} ${direction} has-subnav`}
        data-testid={dataTestId}
      >
        <DotButton
          disableRipple={true}
          endIcon={
            <DotIcon
              className="nav-arrow"
              data-testid="link-icon"
              iconId={
                menuDirection === 'horizontal'
                  ? 'chevron-down'
                  : 'chevron-right'
              }
            />
          }
          fullWidth={true}
          onClick={handleMenuClick}
          startIcon={
            <DotIcon className="first" data-testid="icon" iconId={iconId} />
          }
          type="text"
        >
          {text}
        </DotButton>
      </StyledNavItem>
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
