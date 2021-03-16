import React, { MouseEvent } from 'react';
import DotIcon from '../icon/Icon';
import { DotLink, LinkUnderline } from '../link/Link';
import { CommonProps } from '../CommonProps';
import { useStylesWithRootClass } from '../useStylesWithRootClass';
import { rootClassName, StyledBreadcrumbs } from './Breadcrumbs.styles';

export type BreadcrumbItem = {
  href?: string;
  onClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
  text: string;
  underline?: LinkUnderline;
};

export interface BreadcrumbProps extends CommonProps {
  items: Array<BreadcrumbItem>;
  maxItems?: number;
}

export const DotBreadcrumbs = ({
  className,
  'data-testid': dataTestId,
  items,
  maxItems = 3,
}: BreadcrumbProps) => {
  const rootClasses = useStylesWithRootClass(rootClassName, className);

  return (
    <StyledBreadcrumbs
      aria-label="breadcrumb"
      classes={{ root: rootClasses }}
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
  );
};

export default DotBreadcrumbs;
