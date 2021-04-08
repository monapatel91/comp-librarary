import React, { Fragment, ReactNode, useState } from 'react';
import { CommonProps } from '../CommonProps';
import { useStylesWithRootClass } from '../useStylesWithRootClass';
import { DotIconButton, IconButtonProps } from '../button/IconButton';
import { DotLink } from '../link/Link';
import { ReactComponent as LogoDigitalAiWhite } from '../../assets/logo_digital_ai_white.svg';
import {
  rootClassName,
  StyledAppToolbar,
  StyledMainMenu,
} from './AppToolbar.styles';
import { DotTypography } from '../typography/Typography';
export interface AppToolbarProps extends CommonProps {
  /** User avatar component */
  avatar?: ReactNode;
  /** Control the bottom border of the toolbar, accepts any valid  */
  borderColor?: string;
  /** Product name displayed next to Digital.ai logo */
  appName?: string;
  /** JSX Element that is displayed between the logo and right nav */
  children?: ReactNode;
  /** Array of nav items to be displayed on the right side */
  navItems?: Array<IconButtonProps>;
  /** If provided will display a hamburger main menu drawer */
  mainMenu?: ReactNode;
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
