import React, { Fragment, useState } from 'react';
import { DotNavigation } from '../navigation/Navigation';
import { NavigationItemProps } from '../navigation/NavItem';
import { DotDrawer } from '../drawer/Drawer';
import { DotIconButton } from '../button/IconButton';
import { ReactComponent as LogoDigitalAiWhite } from '../../assets/logo_digital_ai_white.svg';

import './AppToolbar.scss';

export interface AppToolbarProps {
  avatar?: JSX.Element;
  borderColor?: string;
  brand?: string;
  children?: JSX.Element;
  items?: Array<NavigationItemProps>;
  mainMenu?: JSX.Element;
}

export const DotAppToolbar = ({
  avatar = null,
  borderColor = '#74b941',
  brand,
  children = null,
  items = [],
  mainMenu = null,
}: AppToolbarProps) => {
  const [menuOpen, updateMenuOpen] = useState(false);

  return (
    <header
      className="dot-app-toolbar"
      style={{ borderBottomColor: borderColor }}
    >
      {mainMenu && (
        <Fragment>
          <DotIconButton
            iconId={menuOpen ? 'close' : 'menu'}
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
        <a href="/">
          <LogoDigitalAiWhite title="digital.ai" />
        </a>
        {brand && <span className="dot-product-name">{brand}</span>}
      </div>
      {children}
      <DotNavigation
        classes="dot-admin-nav"
        direction="horizontal"
        iconSize="small"
        items={items}
      />
      {avatar}
    </header>
  );
};
