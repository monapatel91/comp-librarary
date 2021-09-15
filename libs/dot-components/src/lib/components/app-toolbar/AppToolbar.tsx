import React, { ReactNode, useEffect, useRef, useState } from 'react';
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
  /** If provided will overwrite `mainMenuItems` and display within the main menu drawer */
  mainMenu?: ReactNode;
  /** If provided will display the menu items within the main menu drawer */
  mainMenuItems?: Array<ListItemProps>;
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
  mainMenu,
  mainMenuItems = [],
  mainMenuWidth = 240,
}: AppToolbarProps) => {
  const [menuOpen, updateMenuOpen] = useState(false);
  const showMainMenu = mainMenu || mainMenuItems;
  const mainMenuRef = useRef(null);
  const rootClasses = useStylesWithRootClass(
    rootClassName,
    `dense ${className}`
  );
  const mainMenuClasses = useStylesWithRootClass(
    'dot-main-menu',
    menuOpen ? 'open' : ''
  );

  useEffect(() => {
    const handleInsideMenuClick = (event: Event) => {
      const targetEl = event.target as HTMLElement;
      const clickInsideMenu = mainMenuRef.current?.contains(targetEl);
      const hasLink = targetEl.closest('a')?.hasAttribute('href');

      if (clickInsideMenu && hasLink) {
        updateMenuOpen(false);
      }
    };

    if (mainMenuRef?.current) {
      mainMenuRef.current.addEventListener('click', handleInsideMenuClick);

      return () => {
        mainMenuRef.current.removeEventListener('click', handleInsideMenuClick);
      };
    }
  }, []);

  return (
    <StyledAppToolbar
      aria-label={ariaLabel}
      className={rootClasses}
      data-testid={dataTestId}
      style={{ borderBottomColor: borderColor }}
    >
      {showMainMenu && (
        <>
          <DotIconButton
            className="hamburger"
            data-testid="main-menu-icon"
            iconId={menuOpen ? 'close' : 'menu'}
            onClick={() => updateMenuOpen(!menuOpen)}
            size="small"
          />
          <StyledMainMenu
            anchor="left"
            className={mainMenuClasses}
            data-testid="main-menu"
            onClose={() => updateMenuOpen(false)}
            open={menuOpen}
            width={mainMenuWidth + 'px'}
            variant="persistent"
          >
            <div ref={mainMenuRef}>
              {mainMenu ? (
                mainMenu
              ) : (
                <DotSidebar
                  collapsable={false}
                  displayBrand={false}
                  goBack={false}
                  navItems={mainMenuItems}
                  nestedListType="menu"
                />
              )}
            </div>
          </StyledMainMenu>
        </>
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
