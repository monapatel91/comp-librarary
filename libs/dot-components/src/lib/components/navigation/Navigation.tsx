import React from 'react';
import { IconFontSize } from '../icon/Icon';
import { DirectionType, DotNavItem, NavigationItemProps } from './NavItem';

import './Navigation.scss';

export interface NavigationProps {
  /** aria-label passed to the navigation component */
  ariaLabel?: string;
  /** Space delimited CSS classes to be attributed to the nav container. */
  classes?: string;
  /** data attribute passed through for testing purposes ONLY */
  'data-testid'?: string;
  /** determines the direction of the nav container 'horizontal' or 'vertical' */
  direction?: DirectionType;
  /** Determines the size of the icon and spacing around it */
  iconSize?: IconFontSize;
  /** used to inform the flyout menu if applicable */
  isOpen?: boolean;
  /** Array of nav items to be displayed */
  items: Array<NavigationItemProps>;
}

/**
 * @experimental This component is still in development
 */
export const DotNavigation = ({
  ariaLabel,
  classes,
  'data-testid': dataTestId,
  direction = 'horizontal',
  iconSize,
  isOpen,
  items,
}: NavigationProps) => {
  return (
    <nav
      aria-label={ariaLabel}
      className={`dot-navigation ${classes}`}
      data-testid={dataTestId}
    >
      <ul className={direction}>
        {items.map((item: NavigationItemProps, index: number) => {
          return (
            <DotNavItem
              {...item}
              iconSize={iconSize}
              key={index}
              navOpen={isOpen}
            />
          );
        })}
      </ul>
    </nav>
  );
};

export default DotNavigation;
