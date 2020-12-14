import React from 'react';
import { DotNavigation } from '../navigation/Navigation';
import { NavigationItemProps } from '../navigation/NavItem';
import { DotIconButton } from '../button/IconButton';
import { ReactComponent as LogoDigitalAiWhite } from '../../assets/logo_digital_ai_white.svg';

import './Header.scss';

export interface HeaderProps {
  borderColor?: string;
  brand?: string;
  items: Array<NavigationItemProps>;
}

export const DotHeader = ({
  borderColor = '#74b941',
  brand,
  items,
}: HeaderProps) => {
  return (
    <header className="dot-header" style={{ borderBottomColor: borderColor }}>
      <DotIconButton iconId="menu" iconSize="small" />
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
