import React from 'react';
import { Theme } from '@material-ui/core';
import styled, { css } from 'styled-components';
import { CommonProps } from '../CommonProps';
import { useStylesWithRootClass } from '../makeStylesWithRootClass';
import { IconFontSize } from '../icon/Icon';
import { DirectionType, DotNavItem, NavigationItemProps } from './NavItem';

const StyledNavigation = styled.nav`
  ${({ theme }: { theme: Theme }) => css`
    .dot-navigation {
      ul,
      li {
        display: flex;
        margin: 0;
        padding: 0;
      }

      ul {
        flex-direction: column;

        &.horizontal {
          flex-direction: row;

          li a {
            padding: 0 ${theme.spacing(2)}px;
          }
        }

        &.vertical {
          li a {
            padding: ${theme.spacing(1 * 0.5, 0)}px;
          }
        }
      }
    }
  `}
`;

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
  const rootClasses = useStylesWithRootClass('dot-navigation', className);
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
              navOpen={isOpen}
            />
          );
        })}
      </ul>
    </StyledNavigation>
  );
};

export default DotNavigation;
