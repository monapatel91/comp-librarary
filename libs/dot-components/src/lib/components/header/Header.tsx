import React, { Fragment, useState } from 'react';
import { DotNavigation } from '../navigation/Navigation';
import { NavigationItemProps } from '../navigation/NavItem';
import { DotDrawer } from '../drawer/Drawer';
import { DotIconButton } from '../button/IconButton';
import { ReactComponent as LogoDigitalAiWhite } from '../../assets/logo_digital_ai_white.svg';

import './Header.scss';

export interface HeaderProps {
  borderColor?: string;
  brand?: string;
  items: Array<NavigationItemProps>;
  mainMenu?: JSX.Element;
}

export const DotHeader = ({
  borderColor = '#74b941',
  brand,
  items,
  mainMenu = null,
}: HeaderProps) => {
  const [menuOpen, updateMenuOpen] = useState(false);

  return (
    <header className="dot-header" style={{ borderBottomColor: borderColor }}>
      {mainMenu && (
        <Fragment>
          <DotIconButton
            iconId="menu"
            iconSize="small"
            onClick={() => updateMenuOpen(!menuOpen)}
          />
          <DotDrawer
            anchor="left"
            classes="dot-main-menu"
            onClose={() => updateMenuOpen(false)}
            open={menuOpen}
          >
            {mainMenu}
          </DotDrawer>
        </Fragment>
      )}
      <div className="dot-branding">
        <LogoDigitalAiWhite title="digital.ai" />
        {brand && <span className="dot-product-name">{brand}</span>}
      </div>
      <DotNavigation
        classes="dot-admin-nav"
        direction="horizontal"
        iconSize="small"
        items={items}
      />
    </header>
  );
};
