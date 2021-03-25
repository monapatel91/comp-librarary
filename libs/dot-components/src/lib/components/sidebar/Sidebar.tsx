import React, { Fragment, MouseEvent, useState } from 'react';
import { Typography } from '@material-ui/core';
import { AvatarProps, DotAvatar } from '../avatar/Avatar';
import { DotIconButton } from '../button/IconButton';
import { DotList, ListItemProps } from '../list/List';
import { CommonProps } from '../CommonProps';
import { useStylesWithRootClass } from '../useStylesWithRootClass';
import { ReactComponent as LogoD } from '../../assets/logo_d.svg';
import { ReactComponent as LogoDigitalAi } from '../../assets/logo_digital_ai.svg';
import { rootClassName, StyledSidebar } from './Sidebar.styles';

export interface BackItemProps extends CommonProps {
  /** If provided, the icon ID which is displayed on the front of the list item */
  iconId?: string;
  /** Event callback */
  onClick: (event: MouseEvent) => void;
  /** Text which is displayed in the list item */
  text: string;
  /** The tooltip text displayed on hover */
  title?: string;
}

export interface SidebarProps extends CommonProps {
  /** props used by the back item */
  backItem?: BackItemProps;
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
  backItem,
  brandDesc,
  children,
  className,
  collapsable = false,
  'data-testid': dataTestId,
  displayBrand = true,
  goBack = false,
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
              <Typography classes={{ root: 'dot-typography' }} variant="h4">
                {title}
              </Typography>
            </Fragment>
          ) : (
            <DotAvatar {...titleAvatarProps} />
          )}
        </header>
      )}
      {goBack && backItem && (
        <div className="go-back">
          <DotIconButton
            iconId={backItem.iconId ? backItem.iconId : 'back'}
            onClick={backItem.onClick}
            titleTooltip={backItem.title || backItem.text}
          />
          <Typography variant="h4">{backItem.text}</Typography>
        </div>
      )}
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
          <Typography
            classes={{ root: 'dot-typography' }}
            className="desc"
            variant="body2"
          >
            {brandDesc}
          </Typography>
          <LogoDigitalAi className="company-name" title="digital.ai" />
          <LogoD className="d-icon" title="digital.ai" />
        </div>
      )}
    </StyledSidebar>
  );
};
