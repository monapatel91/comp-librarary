import React, { MouseEvent, ReactNode, useEffect, useState } from 'react';
import { AvatarProps, DotAvatar } from '../avatar/Avatar';
import { DotIconButton } from '../button/IconButton';
import { DotList, ListItemProps, NestedListType } from '../list/List';
import { CommonProps } from '../CommonProps';
import { useStylesWithRootClass } from '../useStylesWithRootClass';
import { ReactComponent as LogoD } from '../../assets/logo_d.svg';
import { ReactComponent as LogoDigitalAi } from '../../assets/logo_digital_ai.svg';
import { rootClassName, StyledSidebar } from './Sidebar.styles';
import { DotTypography } from '../typography/Typography';
import { DotLink } from '../link/Link';
import { DotIcon } from '../icon/Icon';
import { DotAppLogo } from '../app-logo/AppLogo';
import { DotTooltip } from '../tooltip/Tooltip';

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

interface HeaderProps {
  displayAppLogo?: boolean;
  hasAppLogo?: boolean;
  isOpen?: boolean;
}

export interface SidebarProps extends CommonProps {
  /** If provided will display application logo */
  appLogo?: ReactNode;
  /** If provided will display application logo */
  appLogoSmall?: ReactNode;
  /** props used by the back item */
  backItem?: BackItemProps;
  /** If displayBrand is true this text will be displayed above the Digital.ai branding */
  brandDesc?: string;
  /** If provided will display below the navItems */
  children?: ReactNode;
  /** If true will display the expand/collapse icon button */
  collapsable?: boolean;
  /** If true will display appLogo provided at the top */
  displayAppLogo?: boolean;
  /** If true will display Digital.ai branding at the bottom */
  displayBrand?: boolean;
  /** If true will display the go back nav item at the top of the sidebar */
  goBack?: boolean;
  /** If 'menu' the nested list will be displayed as a flyout nav, else it will be an expand/collapse toggle list */
  nestedListType?: NestedListType;
  /** Array of nav items */
  navItems?: Array<ListItemProps>;
  /** If true, the sidebar is open. */
  open?: boolean;
  /** The text that is displayed at the top of the sidebar */
  title?: string;
  /** If provided, will display an avatar next to the title text */
  titleAvatarProps?: AvatarProps;
  /** Width of main menu drawer if mainMenu provided, defaults to 240px */
  width?: number;
}

const Brand = ({ brandDesc }: SidebarProps) => {
  return (
    <div className="powered-by">
      <DotTypography className="desc" variant="body2">
        {brandDesc}
      </DotTypography>
      {/* TO-DO: need logo for dark theme */}
      <DotTooltip title="digital.ai">
        <LogoDigitalAi className="company-name" />
      </DotTooltip>
      <DotTooltip title="digital.ai">
        <LogoD className="d-icon" />
      </DotTooltip>
    </div>
  );
};

const Header = ({
  appLogo,
  appLogoSmall,
  displayAppLogo,
  hasAppLogo,
  isOpen,
  title,
  titleAvatarProps,
}: HeaderProps & SidebarProps) => {
  const headerClasses = useStylesWithRootClass(
    displayAppLogo ? 'app-logo' : ''
  );

  return (
    <header className={headerClasses}>
      {hasAppLogo ? (
        <DotAppLogo
          appLogo={appLogo}
          appLogoSmall={appLogoSmall}
          smallOnly={!isOpen}
        />
      ) : (
        <>
          <DotAvatar {...titleAvatarProps} />
          {isOpen && <DotTypography variant="h4">{title}</DotTypography>}
        </>
      )}
    </header>
  );
};

export const DotSidebar = ({
  appLogo,
  appLogoSmall,
  ariaLabel,
  backItem,
  brandDesc,
  children,
  className,
  collapsable = false,
  'data-testid': dataTestId,
  displayAppLogo = false,
  displayBrand = true,
  goBack = false,
  navItems = [],
  nestedListType = 'expandable',
  open = true,
  title,
  titleAvatarProps,
  width = 240,
}: SidebarProps) => {
  const [isOpen, setIsOpen] = useState(open);
  const [sidebarWidth, setSidebarWidth] = useState(width);
  const hasAppLogo = appLogo !== null && displayAppLogo;
  const hasBackItem = goBack && backItem;
  const displayHeader = title || hasAppLogo;

  useEffect(() => {
    setIsOpen(open);
  }, [open]);

  useEffect(() => {
    setSidebarWidth(isOpen ? width : 58);
  }, [isOpen]);

  const collapseNav = () => {
    setIsOpen(!isOpen);
  };

  const sidebarClasses = useStylesWithRootClass(
    'side-nav',
    isOpen ? 'open' : ''
  );

  const rootClasses = useStylesWithRootClass(
    rootClassName,
    !isOpen ? 'collapsed' : '',
    className
  );

  return (
    <StyledSidebar
      aria-label={ariaLabel}
      className={rootClasses}
      data-testid={`primaryNav ${dataTestId ? dataTestId : ''}`}
      style={{ width: sidebarWidth }}
    >
      {displayHeader && (
        <Header
          appLogo={appLogo}
          appLogoSmall={appLogoSmall}
          displayAppLogo={displayAppLogo}
          hasAppLogo={hasAppLogo}
          isOpen={isOpen}
          title={title}
          titleAvatarProps={titleAvatarProps}
        />
      )}
      {hasBackItem && (
        <DotLink
          color="textPrimary"
          onClick={backItem.onClick}
          tooltip={backItem.title || backItem.text}
          underline="none"
        >
          <div className="go-back">
            <DotIcon
              data-testid="back-button"
              iconId={backItem.iconId ? backItem.iconId : 'back'}
            />
            <DotTypography variant="h4">{backItem.text}</DotTypography>
          </div>
        </DotLink>
      )}
      {navItems.length > 0 && (
        // TO-DO: defect with secondary open while sidebar collapsed
        <DotList
          ariaLabel="left navigation"
          className={sidebarClasses}
          data-testid="sideNav"
          dense={true}
          disablePadding={true}
          items={navItems}
          nestedDrawerLeftSpacing={sidebarWidth}
          nestedListType={nestedListType}
          width="100%"
        />
      )}
      {children}
      {collapsable && (
        <div className="toggle-nav">
          <DotTooltip title={isOpen ? 'Collapse' : 'Expand'}>
            <DotIconButton
              ariaLabel="collapse sidebar navigation"
              data-testid="toggle-nav"
              iconId={isOpen ? 'chevron-left' : 'chevron-right'}
              iconSize="small"
              onClick={collapseNav}
              size="small"
            />
          </DotTooltip>
        </div>
      )}
      {displayBrand && <Brand brandDesc={brandDesc} />}
    </StyledSidebar>
  );
};
