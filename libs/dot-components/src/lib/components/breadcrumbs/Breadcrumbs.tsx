import React, { MouseEvent } from 'react';
import { Breadcrumbs, Link, Theme } from '@material-ui/core';
import styled, { css } from 'styled-components';
import DotIcon from '../icon/Icon';

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

const StyledBreadcrumbs = styled(Breadcrumbs)`
  ${({ theme }: { theme: Theme }) => css`
    .currentPage {
      color: ${theme.palette.grey[700]};
      cursor: default;
    }
    .MuiBreadcrumbs-li,
    .MuiBreadcrumbs-separator {
      color: ${theme.palette.grey[300]};
    }
    .MuiBreadcrumbs-separator {
      padding: 0;
      font-size: 12px;
      margin-bottom: 0;
    }
    .MuiLink-underlineHover {
      cursor: pointer;
    }
  `}
`;

/**
 * @experimental This component is still in development
 */
export const DotBreadcrumbs = ({
  className,
  items,
  maxItems = 3,
  'data-testid': dataTestId,
}: BreadcrumbProps) => {
  const rootClasses = useStylesWithRootClass('dot-breadcrumbs', className);

  return (
    <StyledBreadcrumbs
      className="dot-breadcrumbs"
      aria-label="breadcrumb"
      data-testid={dataTestId}
      maxItems={maxItems}
      separator={
        <DotIcon icon="chevron-right" iconClasses="MuiBreadcrumbs-separator" />
      }
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
              tabIndex={0}
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
    </StyledBreadcrumbs>
  );
};

export default DotBreadcrumbs;
