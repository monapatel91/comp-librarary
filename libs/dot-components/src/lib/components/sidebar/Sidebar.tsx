import React, { useState } from 'react';
import { DotIconButton } from '../button/IconButton';
import { DotNavigation } from '../navigation/Navigation';
import { NavigationItemProps } from '../navigation/NavItem';
import { ReactComponent as LogoD } from '../../assets/logo_d.svg';
import { ReactComponent as LogoDigitalAi } from '../../assets/logo_digital_ai.svg';

import './Sidebar.scss';

export interface SidebarProps {
  backItem?: Array<NavigationItemProps>;
  brandDesc?: string;
  children?: JSX.Element;
  collapsable?: boolean;
  displayBrand?: boolean;
  goBack?: boolean;
  navItems?: Array<NavigationItemProps>;
  title?: string;
}

/**
 * @experimental This component is still in development
 */
export const DotSidebar = ({
  backItem = [],
  brandDesc,
  children = null,
  collapsable = false,
  displayBrand = true,
  goBack,
  navItems = [],
  title,
}: SidebarProps) => {
  const [open, updateOpen] = useState(true);

  return (
    <aside
      className={`dot-sidebar ${!open ? 'collapsed' : 'expanded'}`}
      data-testid="primaryNav"
    >
      {title && <h4>{title}</h4>}
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
      {children}
      {collapsable && (
        <div className="toggle-nav">
          <DotIconButton
            iconButtonSize="small"
            iconId="chevron-left"
            onClick={() => updateOpen(!open)}
          />
        </div>
      )}
      {displayBrand && (
        <div className="powered-by">
          <span className="desc">{brandDesc}</span>
          <LogoDigitalAi className="company-name" title="digital.ai" />
          <LogoD className="d-icon" title="digital.ai" />
        </div>
      )}
    </aside>
  );
};
