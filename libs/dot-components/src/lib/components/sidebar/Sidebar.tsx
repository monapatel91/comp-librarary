import React, { Fragment, useState } from 'react';
import { Typography } from '@material-ui/core';
import { AvatarProps, DotAvatar } from '../avatar/Avatar';
import { DotIconButton } from '../button/IconButton';
import { DotList } from '../list/List';
import { ListItemProps } from '../list/ListItem';
import { CommonProps } from '../CommonProps';
import { useStylesWithRootClass } from '../useStylesWithRootClass';
import { ReactComponent as LogoD } from '../../assets/logo_d.svg';
import { ReactComponent as LogoDigitalAi } from '../../assets/logo_digital_ai.svg';
import { rootClassName, StyledSidebar } from './Sidebar.styles';

export interface SidebarProps extends CommonProps {
  /** Component passed for back nav item */
  backItem?: Array<ListItemProps>;
  /** If displayBrand is true this text will be displayed above the Digital.ai branding */
  brandDesc?: string;
  /** If provided will display below the navItems */
  children?: JSX.Element;
  /** If true will display the expand/collapse icon button */
  collapsable?: boolean;
  /** If true will display Digital.ai branding at the bottom */
  displayBrand?: boolean;
  /** If true will display the go back nav item at the top of the sidebar */
  goBack?: boolean;
  /** Array of nav items */
  navItems?: Array<ListItemProps>;
  /** The text that is displayed at the top of the sidebar */
  title?: string;
  /** If provided, will display an avatar next to the title text */
  titleAvatarProps?: AvatarProps;
}

/** This is a custom component which is used for the sidebar */
export const DotSidebar = ({
  backItem = [],
  brandDesc,
  children,
  className,
  collapsable = false,
  'data-testid': dataTestId,
  displayBrand = true,
  goBack,
  navItems = [],
  title,
  titleAvatarProps,
}: SidebarProps) => {
  const [open, updateOpen] = useState(true);
  const rootClasses = useStylesWithRootClass(
    rootClassName,
    `${!open ? 'collapsed' : 'expanded'} ${className}`
  );

  return (
    <StyledSidebar
      className={rootClasses}
      data-testid={`primaryNav ${dataTestId}`}
    >
      {title && (
        <header>
          {open ? (
            <Fragment>
              <DotAvatar {...titleAvatarProps} />
              <Typography variant="h4">{title}</Typography>
            </Fragment>
          ) : (
            <DotAvatar {...titleAvatarProps} />
          )}
        </header>
      )}
      {goBack && <DotList className="go-back" items={backItem} />}
      {navItems.length > 0 && (
        <DotList
          ariaLabel="left navigation"
          className={`side-nav ${open}`}
          data-testid="sideNav"
          dense={true}
          items={navItems}
        />
      )}
      {children}
      {collapsable && (
        <div className="toggle-nav">
          <DotIconButton
            iconId="chevron-left"
            onClick={() => updateOpen(!open)}
          />
        </div>
      )}
      {displayBrand && (
        <div className="powered-by">
          <Typography className="desc" variant="body2">
            {brandDesc}
          </Typography>
          <LogoDigitalAi className="company-name" title="digital.ai" />
          <LogoD className="d-icon" title="digital.ai" />
        </div>
      )}
    </StyledSidebar>
  );
};
