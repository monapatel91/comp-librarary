import React from 'react';
import { CommonProps } from '../CommonProps';
import { useStylesWithRootClass } from '../useStylesWithRootClass';
import { IconFontSize } from '../icon/Icon';
import { DirectionType, DotNavItem, NavigationItemProps } from './NavItem';
import { rootClassName, StyledNavigation } from './Navigation.styles';

export interface NavigationProps extends CommonProps {
  /** aria-label passed to the navigation component */
  ariaLabel?: string;
  /** determines the direction of the nav container 'horizontal' or 'vertical' */
  direction?: DirectionType;
  /** Determines the size of the icon and spacing around it */
  iconSize?: IconFontSize;
  /** used to inform the flyout menu if applicable */
  isOpen?: boolean;
  /** Array of nav items to be displayed */
  items: Array<NavigationItemProps>;
}

/** This is a custom navigation component */
export const DotNavigation = ({
  ariaLabel,
  className,
  'data-testid': dataTestId,
  direction = 'horizontal',
  iconSize,
  isOpen,
  items,
}: NavigationProps) => {
  const rootClasses = useStylesWithRootClass(rootClassName, className);
  return (
    <StyledNavigation
      aria-label={ariaLabel}
      className={rootClasses}
      data-testid={dataTestId}
    >
      <ul className={direction}>
        {items.map((item: NavigationItemProps, index: number) => {
          return (
            <DotNavItem
              {...item}
              iconSize={iconSize}
              key={index}
              menuDirection={direction}
              navOpen={isOpen}
            />
          );
        })}
      </ul>
    </StyledNavigation>
  );
};

export default DotNavigation;
