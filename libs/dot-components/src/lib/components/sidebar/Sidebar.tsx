import React, { Fragment } from 'react';
import { DotNavigation } from '../navigation/Navigation';
import { NavigationItemProps } from '../navigation/NavItem';
import { ReactComponent as LogoD } from '../../assets/logo_d.svg';
import { ReactComponent as LogoDigitalAi } from '../../assets/logo_digital_ai.svg';

import './Sidebar.scss';

export interface SidebarProps {
  backItem?: Array<NavigationItemProps>;
  goBack?: boolean;
  navOpen?: boolean;
  primaryItems?: Array<NavigationItemProps>;
  secondaryItems?: Array<NavigationItemProps>;
  subNavOpen?: boolean;
  title?: string;
  toggleItem?: Array<NavigationItemProps>;
}

export const DotSidebar = ({
  backItem,
  goBack,
  navOpen,
  primaryItems,
  secondaryItems = [],
  subNavOpen,
  title,
  toggleItem,
}: SidebarProps) => {
  return (
    <aside
      className={`dot-sidebar ${!navOpen ? 'collapsed' : 'expanded'}`}
      data-testid="primaryNav"
    >
      {title && <h4>{title}</h4>}
      {subNavOpen ? (
        <Fragment>
          {goBack && (
            <DotNavigation
              classes={`toggle-sub-nav`}
              direction="vertical"
              items={backItem}
            />
          )}
          <DotNavigation
            ariaLabel="second level navigation"
            classes="sub-nav dense"
            data-testid="secondLevelNav"
            direction="vertical"
            items={secondaryItems}
          />
        </Fragment>
      ) : (
        <DotNavigation
          ariaLabel="top level navigation"
          classes="top-level-nav dense"
          data-testid="topLevelNav"
          direction="vertical"
          items={primaryItems}
        />
      )}
      {toggleItem && (
        <DotNavigation
          classes={`toggle-nav`}
          direction="vertical"
          items={toggleItem}
        />
      )}
      <div className="powered-by">
        <span className="desc">Release orchestration powered by</span>
        <LogoDigitalAi className="company-name" title="digital.ai" />
        <LogoD className="d-icon" title="digital.ai" />
      </div>
    </aside>
  );
};
