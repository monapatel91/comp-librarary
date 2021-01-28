import React, { MouseEvent } from 'react';
import { Link } from '@material-ui/core';
import DotIcon from '../icon/Icon';
import { CommonProps } from '../CommonProps';
import { useStylesWithRootClass } from '../makeStylesWithRootClass';
import { rootClassName, StyledBreadcrumbs } from './Breadcrumbs.styles';

export type LinkUnderlineOptions = 'always' | 'hover' | 'none';

export type BreadcrumbItem = {
  href?: string;
  onClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
  text: string;
  underline?: LinkUnderlineOptions;
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
            <Link
              className="breadcrumb"
              color="inherit"
              href={href}
              key={index}
              onClick={(event: MouseEvent<HTMLAnchorElement>) =>
                onClick && onClick(event)
              }
              tabIndex={0}
              underline={underline}
            >
              {text}
            </Link>
          );
        }
      })}
    </StyledBreadcrumbs>
  );
};

export default DotBreadcrumbs;
