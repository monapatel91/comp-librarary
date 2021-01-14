import React, { MouseEvent } from 'react';
import { Breadcrumbs, Link, Theme } from '@material-ui/core';
import styled, { css } from 'styled-components';
import DotIcon from '../icon/Icon';
import { CommonProps } from '../CommonProps';
import { useStylesWithRootClass } from '../makeStylesWithRootClass';

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

const StyledBreadcrumbs = styled(Breadcrumbs)`
  ${({ theme }: { theme: Theme }) => css`
    &.dot-breadcrumbs {
      .MuiBreadcrumbs-li,
      .separator {
        color: ${theme.palette.grey[300]};
        margin: 0;
      }
      .separator {
        font-size: 12px;
        width: 20px;
        height: 20px;
        padding: 0;
      }
      .breadcrumb {
        padding: ${theme.spacing(0.5, 2)};
      }
      .MuiBreadcrumbs-separator {
        margin: 0;
      }
      .MuiLink-underlineHover {
        cursor: pointer;
      }
    }
    .breadcrumb {
      padding: ${theme.spacing(0.5)}px ${theme.spacing(2)}px;
    }
    .current-page {
      color: ${theme.palette.grey[700]};
      cursor: default;
    }
  `}
`;

export const DotBreadcrumbs = ({
  className,
  'data-testid': dataTestId,
  items,
  maxItems = 3,
}: BreadcrumbProps) => {
  const rootClasses = useStylesWithRootClass('dot-breadcrumbs', className);

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
