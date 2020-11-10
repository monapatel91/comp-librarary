import React, { MouseEvent } from 'react';
import { Breadcrumbs, Link } from '@material-ui/core';
import './Breadcrumbs.scss';

export type LinkUnderlineOptions = 'always' | 'hover' | 'none';

export type BreadcrumbItem = {
  href?: string;
  onClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
  text: string;
  underline?: LinkUnderlineOptions;
};

export interface BreadcrumbProps {
  items: Array<BreadcrumbItem>;
  maxItems?: number;
}

export const DotBreadcrumbs = ({ items, maxItems = 3 }: BreadcrumbProps) => {
  return (
    <Breadcrumbs aria-label="breadcrumb" maxItems={maxItems} separator="›">
      {items.map((item: BreadcrumbItem, index: number) => {
        const { href, onClick, text, underline } = item;
        if (index === items.length - 1) {
          return (
            <span className="currentPage" key={index}>
              {text}
            </span>
          );
        } else {
          return (
            <Link
              color="inherit"
              href={href}
              key={index}
              onClick={(event: MouseEvent<HTMLAnchorElement>) =>
                onClick && onClick(event)
              }
              underline={underline}
            >
              {text}
            </Link>
          );
        }
      })}
    </Breadcrumbs>
  );
};

export default DotBreadcrumbs;
