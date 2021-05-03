import React, { KeyboardEvent, useEffect, useState } from 'react';
import { DotIcon } from '../icon/Icon';
import { DotLink, LinkUnderline } from '../link/Link';
import { CommonProps } from '../CommonProps';
import { useStylesWithRootClass } from '../useStylesWithRootClass';
import { rootClassName, StyledBreadcrumbs } from './Breadcrumbs.styles';
import { DotMenu } from '../menu/Menu';

export type BreadcrumbItem = {
  href?: string;
  // Using React.MouseEvent here rather than importing MouseEvent from 'react'
  // because component is also using the native MouseEvent in clickListener.
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
  text: string;
  underline?: LinkUnderline;
};

export interface BreadcrumbProps extends CommonProps {
  expansionMenu?: boolean;
  items: Array<BreadcrumbItem>;
  maxItems?: number;
}

export const DotBreadcrumbs = ({
  className,
  'data-testid': dataTestId,
  expansionMenu = false,
  items,
  maxItems = 3,
}: BreadcrumbProps) => {
  const rootClasses = useStylesWithRootClass(rootClassName, className);

  const [anchorEl, setAnchorEl] = useState<null | Element>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const clickListener = (event: MouseEvent) => {
    event.stopPropagation();
    setMenuOpen((currentMenuOpen) => {
      return !currentMenuOpen;
    });
  };

  const getExpandElement = () => {
    const elements = document.getElementsByClassName('MuiBreadcrumbs-ol');
    return elements.length === 1
      ? elements[0].getElementsByClassName('MuiButtonBase-root')[0]
      : null;
  };

  useEffect(() => {
    if (expansionMenu) {
      const expandElement = getExpandElement();
      if (expandElement) {
        setAnchorEl(expandElement);
        expandElement.addEventListener('click', clickListener);
        return () => {
          expandElement.removeEventListener('click', clickListener);
        };
      }
    }
  }, []);

  const getMenuItems = () => {
    return items.slice(1, items.length - 2).map((item, index) => {
      const itemChildren = (
        <DotLink
          className="breadcrumb"
          color="inherit"
          href={item.href}
          key={index}
          onClick={item.onClick}
          tabIndex={0}
          underline={item.underline}
        >
          {item.text}
        </DotLink>
      );
      return { children: itemChildren, key: index.toString() };
    });
  };

  const menuItems = items.length > maxItems ? getMenuItems() : null;

  const onMenuLeave = (event: KeyboardEvent | React.MouseEvent) => {
    setMenuOpen(false);
  };

  return (
    <>
      <StyledBreadcrumbs
        aria-label="breadcrumb"
        classes={{
          root: rootClasses,
          ol: 'dot-ol',
          li: 'dot-li',
        }}
        data-testid={dataTestId}
        itemsAfterCollapse={2}
        maxItems={maxItems}
        separator={<DotIcon iconId="chevron-right" className="separator" />}
      >
        {items.map((item: BreadcrumbItem, index: number) => {
          const { href, onClick, text, underline } = item;
          if (index === items.length - 1) {
            return (
              <span className="breadcrumb current-page" key={index}>
                {text}
              </span>
            );
          } else {
            return (
              <DotLink
                className="breadcrumb"
                color="inherit"
                href={href}
                key={index}
                onClick={onClick}
                tabIndex={0}
                underline={underline}
              >
                {text}
              </DotLink>
            );
          }
        })}
      </StyledBreadcrumbs>
      <DotMenu
        anchorEl={anchorEl}
        id="expand-menu"
        menuItems={menuItems}
        menuPlacement="bottom-start"
        onLeave={onMenuLeave}
        open={menuOpen}
      />
    </>
  );
};
