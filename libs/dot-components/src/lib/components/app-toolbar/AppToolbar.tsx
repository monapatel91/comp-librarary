import React, { Fragment, useState } from 'react';
import { Typography } from '@material-ui/core';
import { CommonProps } from '../CommonProps';
import { useStylesWithRootClass } from '../useStylesWithRootClass';
import { DotNavigation } from '../navigation/Navigation';
import { NavigationItemProps } from '../navigation/NavItem';
import { DotIconButton } from '../button/IconButton';
import { DotLink } from '../link/Link';
import { ReactComponent as LogoDigitalAiWhite } from '../../assets/logo_digital_ai_white.svg';
import {
  rootClassName,
  StyledAppToolbar,
  StyledMainMenu,
} from './AppToolbar.styles';
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
  avatar,
  borderColor,
  appName,
  children,
  className,
  'data-testid': dataTestId,
  navItems = [],
  mainMenu,
}: AppToolbarProps) => {
  const rootClasses = useStylesWithRootClass(
    rootClassName,
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
        <DotLink href="/">
          <LogoDigitalAiWhite title="digital.ai" />
        </DotLink>
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
