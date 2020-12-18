import React, { useState } from 'react';
import { DotNavigation } from '../navigation/Navigation';
import { NavigationItemProps } from '../navigation/NavItem';
import { ReactComponent as LogoD } from '../../assets/logo_d.svg';
import { ReactComponent as LogoDigitalAi } from '../../assets/logo_digital_ai.svg';

import './Sidebar.scss';

export interface SidebarProps {
  backItem?: Array<NavigationItemProps>;
  company?: string;
  goBack?: boolean;
  navItems?: Array<NavigationItemProps>;
}

export const DotSidebar = ({
  backItem = [],
  company,
  goBack,
  navItems = [],
}: SidebarProps) => {
  const [open, updateOpen] = useState(true);

  const toggleItem: Array<NavigationItemProps> = [
    {
      icon: 'chevron-left',
      onClick: () => updateOpen(!open),
      title: 'Toggle Nav',
      url: '/',
    },
  ];

  return (
    <aside
      className={`dot-sidebar ${!open ? 'collapsed' : 'expanded'}`}
      data-testid="primaryNav"
    >
      {company && <h4>{company}</h4>}
      {goBack && (
        <DotNavigation
          classes="go-back"
          direction="vertical"
          items={backItem}
        />
      )}
      <DotNavigation
        ariaLabel="left navigation"
        classes="side-nav dense"
        data-testid="sideNav"
        direction="vertical"
        isOpen={open}
        items={navItems}
      />
      <DotNavigation
        classes="toggle-nav"
        direction="vertical"
        items={toggleItem}
      />
      <div className="powered-by">
        <span className="desc">Release orchestration powered by</span>
        <LogoDigitalAi className="company-name" title="digital.ai" />
        <LogoD className="d-icon" title="digital.ai" />
      </div>
    </aside>
  );
};
