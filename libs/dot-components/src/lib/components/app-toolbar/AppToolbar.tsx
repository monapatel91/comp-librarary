import React, { Fragment, useState } from 'react';
import styled, { css } from 'styled-components';
import { Theme, Typography } from '@material-ui/core';
import { CommonProps } from '../CommonProps';
import { useStylesWithRootClass } from '../makeStylesWithRootClass';
import { DotNavigation } from '../navigation/Navigation';
import { NavigationItemProps } from '../navigation/NavItem';
import { DotDrawer } from '../drawer/Drawer';
import { DotIconButton } from '../button/IconButton';
import { ReactComponent as LogoDigitalAiWhite } from '../../assets/logo_digital_ai_white.svg';

const StyledMainMenu = styled(DotDrawer)`
  ${({ theme }: { theme: Theme }) => css`
    &.dot-main-menu .dot-drawer-paper {
      padding: ${theme.spacing(6, 0, 0)};
    }
  `}
`;

const StyledAppToolbar = styled.header`
  ${({ theme }: { theme: Theme }) => css`
    &.dot-app-toolbar {
      align-items: center;
      background: ${theme.palette.grey[700]};
      border-bottom: 4px solid #649a3d;
      color: ${theme.palette.grey[0]};
      display: flex;
      height: 64px;
      padding-left: ${theme.spacing(0.5)}px;
      position: fixed;
      width: 100%;
      z-index: 9999;

      &.dense {
        height: 48px;

        .dot-icon-btn {
          margin-right: ${theme.spacing(3)}px;
          padding: ${theme.spacing(0.25)}px;

          &.hamburger {
            margin-left: 10px;
            margin-right: ${theme.spacing(0.5)}px;
          }
        }

        .dot-button {
          padding: ${theme.spacing(0.5, 1)};
          margin-right: ${theme.spacing(2)}px;
        }
      }

      .dot-branding {
        align-items: center;
        display: flex;
        margin-left: ${theme.spacing(1.5)}px;

        &.hamburger {
          margin-left: ${theme.spacing(1)}px;
        }

        a {
          line-height: 0;
        }

        .dot-product-name {
          color: ${theme.palette.grey[100]};
          font-size: 18px;
          margin: ${theme.spacing(0, 1.5)};
        }
      }

      .dot-icon-btn {
        color: ${theme.palette.grey[100]};
        margin-right: ${theme.spacing(1)}px;
        padding: ${theme.spacing(1.5)}px;

        &.hamburger {
        }
      }

      nav.dot-admin-nav {
        display: flex;
        flex-grow: 2;
        justify-content: flex-end;

        ul.horizontal li a {
          background: transparent;
          color: ${theme.palette.grey[100]};
          padding: 0;
        }
      }

      .dot-avatar {
        margin: ${theme.spacing(0, 2, 0, 1)};
      }
    }
  `}
`;

export interface AppToolbarProps extends CommonProps {
  /** User avatar component */
  avatar?: JSX.Element;
  /** Control the bottom border of the toolbar, accepts any valid  */
  borderColor?: string;
  /** Product name displayed next to Digital.ai logo */
  appName?: string;
  /** JSX Element that is displayed between the logo and right nav */
  children?: JSX.Element;
  /** Array of nav items to be displayed on the right side */
  navItems?: Array<NavigationItemProps>;
  /** If provided will display a hamburger main menu drawer */
  mainMenu?: JSX.Element;
}

export const DotAppToolbar = ({
  avatar = null,
  borderColor,
  appName,
  children = null,
  className,
  'data-testid': dataTestId,
  navItems = [],
  mainMenu = null,
}: AppToolbarProps) => {
  const rootClasses = useStylesWithRootClass(
    'dot-app-toolbar',
    `dense ${className}`
  );
  const [menuOpen, updateMenuOpen] = useState(false);

  return (
    <StyledAppToolbar
      className={rootClasses}
      data-testid={dataTestId}
      style={{ borderBottomColor: borderColor }}
    >
      {mainMenu && (
        <Fragment>
          <DotIconButton
            className="hamburger"
            iconId={menuOpen ? 'close' : 'menu'}
            onClick={() => updateMenuOpen(!menuOpen)}
            size="small"
          />
          <StyledMainMenu
            anchor="left"
            className="dot-main-menu"
            onClose={() => updateMenuOpen(false)}
            open={menuOpen}
          >
            {mainMenu}
          </StyledMainMenu>
        </Fragment>
      )}
      <div className={`dot-branding ${mainMenu ? 'hamburger' : ''}`}>
        <a href="/">
          <LogoDigitalAiWhite title="digital.ai" />
        </a>
        {appName && (
          <Typography className="dot-product-name">{appName}</Typography>
        )}
      </div>
      {children}
      <DotNavigation
        className="dot-admin-nav"
        direction="horizontal"
        items={navItems}
      />
      {avatar}
    </StyledAppToolbar>
  );
};
