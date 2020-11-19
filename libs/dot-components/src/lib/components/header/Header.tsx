import React from 'react';
import { DotNavigation } from '../navigation/Navigation';
import { NavigationItemProps } from '../navigation/NavItem';
import { ReactComponent as LogoDigitalAiWhite } from '../../assets/logo_digital_ai_white.svg';

import './Header.scss';

export interface HeaderProps {
  brand: string;
  items: Array<NavigationItemProps>;
}

export const DotHeader = ({ brand, items }: HeaderProps) => {
  return (
    <header className="dot-header">
      <div className="dot-branding">
        <LogoDigitalAiWhite className="logo" title="digital.ai" />
        <span className="dot-product-name">{brand}</span>
      </div>
      <DotNavigation
        classes="admin-nav"
        direction="horizontal"
        iconSize="small"
        items={items}
      />
    </header>
  );
};
