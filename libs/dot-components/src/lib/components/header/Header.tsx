import React from 'react';
import { DotNavigation } from '../navigation/Navigation';
import { NavigationItemProps } from '../navigation/NavItem';
import { ReactComponent as LogoDigitalAiWhite } from '../../assets/logo_digital_ai_white.svg';

import './Header.scss';

export interface HeaderProps {
  items: Array<NavigationItemProps>;
  logo?: JSX.Element;
}

export const DotHeader = ({ items, logo }: HeaderProps) => {
  return (
    <header className="dot-header">
      {logo ? logo : <LogoDigitalAiWhite className="logo" title="digital.ai" />}
      <DotNavigation
        classes="admin-nav"
        direction="horizontal"
        iconSize="small"
        items={items}
      />
    </header>
  );
};
