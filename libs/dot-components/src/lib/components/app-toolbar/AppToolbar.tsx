import React, { ReactNode, useEffect, useRef, useState } from 'react';
import { CommonProps } from '../CommonProps';
import { useStylesWithRootClass } from '../useStylesWithRootClass';
import { DotIconButton, IconButtonProps } from '../button/IconButton';
import { DotLink } from '../link/Link';
import { DotTypography } from '../typography/Typography';
import { ListItemProps } from '../list/List';
import { DotSidebar } from '../sidebar/Sidebar';
import { ReactComponent as LogoDigitalAiWhite } from '../../assets/logo_digital_ai_white.svg';
import {
  rootClassName,
  StyledAppToolbar,
  StyledMainMenu,
} from './AppToolbar.styles';

export interface AppToolbarProps extends CommonProps {
  /** If provided will display application logo */
  appLogo?: ReactNode;
  /** DEPRECATED, DO NOT USE */
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
  appName,
  appLogo,
  ariaLabel,
  avatar,
  borderColor,
  children,
  className,
  customLogo,
  'data-testid': dataTestId,
  navItems = [],
  mainMenu,
  mainMenuItems,
  mainMenuWidth = 240,
}: AppToolbarProps) => {
  const [menuOpen, updateMenuOpen] = useState(false);
  const showMainMenu = mainMenu || mainMenuItems;
  const mainMenuRef = useRef(null);
  const rootClasses = useStylesWithRootClass(rootClassName, `${className}`);
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

    // deprecation warning
    if (appName) {
      console.warn(
        'The use of `appName` is deprecated and will be removed in the next major release, please use either `children` or `appLogo` isntead.'
      );
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
          <div className="dot-main-menu-btn">
            <DotIconButton
              data-testid="main-menu-icon"
              iconId={menuOpen ? 'close' : 'menu'}
              iconSize="default"
              onClick={() => updateMenuOpen(!menuOpen)}
            />
          </div>
          <div className="divider" data-testid="divider"></div>
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
              {mainMenuItems ? (
                <DotSidebar
                  collapsable={false}
                  displayBrand={false}
                  goBack={false}
                  navItems={mainMenuItems}
                  nestedListType="menu"
                  width={mainMenuWidth}
                >
                  {mainMenu}
                </DotSidebar>
              ) : (
                mainMenu
              )}
            </div>
          </StyledMainMenu>
        </>
      )}
      <div className="dot-branding">
        <DotLink className="primary-logo" href="/">
          {customLogo ? customLogo : <LogoDigitalAiWhite title="digital.ai" />}
        </DotLink>
        {appLogo && <div className="app-logo">{appLogo}</div>}
        {appName && (
          <DotTypography className="dot-product-name">{appName}</DotTypography>
        )}
        {children && <div className="divider" data-testid="divider"></div>}
      </div>
      {children}
      <div className="dot-right-side">
        {navItems.length > 0 && (
          <nav>
            {navItems.map((item, index) => (
              <DotIconButton
                className={item.className}
                iconId={item.iconId}
                iconSize="default"
                onClick={(event) => item.onClick && item.onClick(event)}
                key={index}
                size="medium"
                titleTooltip={item.titleTooltip}
              />
            ))}
          </nav>
        )}
        {avatar && <div className="avatar-wrapper">{avatar}</div>}
      </div>
    </StyledAppToolbar>
  );
};
