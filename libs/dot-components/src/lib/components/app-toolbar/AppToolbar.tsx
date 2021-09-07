import React, { Fragment, ReactNode, useEffect, useState } from 'react';
import { CommonProps } from '../CommonProps';
import { useStylesWithRootClass } from '../useStylesWithRootClass';
import { DotIconButton, IconButtonProps } from '../button/IconButton';
import { DotLink } from '../link/Link';
import { ListItemProps } from '../list/List';
import { DotSidebar } from '../sidebar/Sidebar';
import { ReactComponent as LogoDigitalAiWhite } from '../../assets/logo_digital_ai_white.svg';
import {
  rootClassName,
  StyledAppToolbar,
  StyledMainMenu,
} from './AppToolbar.styles';
import { DotTypography } from '../typography/Typography';

export interface AppToolbarProps extends CommonProps {
  /** Product name displayed next to Digital.ai logo */
  appName?: string;
  /** User avatar component */
  avatar?: ReactNode;
  /** Control the bottom border of the toolbar, accepts any valid  */
  borderColor?: string;
  /** JSX Element that is displayed between the logo and right nav */
  children?: ReactNode;
  /** Allow to display custom logo */
  customLogo?: ReactNode;
<<<<<<< HEAD
  /** If provided will display a custom component within the main menu drawer */
  mainMenuChildren?: ReactNode;
  /** If provided will display the menu items within the main menu drawer */
  mainMenuItems?: Array<ListItemProps>;
=======
  /** If provided will display a hamburger main menu drawer */
  mainMenu?: ReactNode;
>>>>>>> b7373e61 (D-18421: troubleshooting hamburger navigation not closing on page change)
  /** If true, main menu will be displayed */
  mainMenuOpen?: boolean;
  /** Width of main menu drawer if mainMenu provided, defaults to 240px */
  mainMenuWidth?: number;
  /** Array of nav items to be displayed on the right side */
  navItems?: Array<IconButtonProps>;
}

export const DotAppToolbar = ({
  ariaLabel,
  avatar,
  borderColor,
  appName,
  children,
  className,
  customLogo,
  'data-testid': dataTestId,
  navItems = [],
<<<<<<< HEAD
  mainMenuChildren,
  mainMenuItems,
=======
  mainMenu,
>>>>>>> b7373e61 (D-18421: troubleshooting hamburger navigation not closing on page change)
  mainMenuOpen = false,
  mainMenuWidth = 240,
}: AppToolbarProps) => {
  const rootClasses = useStylesWithRootClass(
    rootClassName,
    `dense ${className}`
  );
  const [menuOpen, updateMenuOpen] = useState(mainMenuOpen);
<<<<<<< HEAD
  const showMainMenu = mainMenuChildren || mainMenuItems;
=======

  console.log(`open: ${menuOpen}`);
>>>>>>> b7373e61 (D-18421: troubleshooting hamburger navigation not closing on page change)

  return (
    <StyledAppToolbar
      aria-label={ariaLabel}
      className={rootClasses}
      data-testid={dataTestId}
      style={{ borderBottomColor: borderColor }}
    >
      {showMainMenu && (
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
            width={mainMenuWidth + 'px'}
          >
            <DotSidebar
              children={mainMenuChildren}
              collapsable={false}
              displayBrand={false}
              goBack={false}
              navItems={mainMenuItems}
              nestedListType="menu"
            />
          </StyledMainMenu>
        </Fragment>
      )}
      <div className={`dot-branding ${showMainMenu ? 'hamburger' : ''}`}>
        <DotLink href="/">
          {customLogo ? customLogo : <LogoDigitalAiWhite title="digital.ai" />}
        </DotLink>
        {appName && (
          <DotTypography className="dot-product-name">{appName}</DotTypography>
        )}
      </div>
      {children}
      <div className="dot-right-side">
        {navItems.length > 0 && (
          <nav>
            {navItems.map((item, index) => (
              <DotIconButton
                className={item.className}
                iconId={item.iconId}
                onClick={(event) => item.onClick && item.onClick(event)}
                key={index}
                size={item.size}
                titleTooltip={item.titleTooltip}
              />
            ))}
          </nav>
        )}
        {avatar}
      </div>
    </StyledAppToolbar>
  );
};
