import { Breadcrumbs } from '@material-ui/core';
import styled, { css } from 'styled-components';

export const rootClassName = 'dot-breadcrumbs';

export const StyledBreadcrumbs = styled(Breadcrumbs)`
  ${({ theme }) => css`
    &.${rootClassName} {
      .MuiBreadcrumbs-ol {
        flex-wrap: nowrap;
        width: 500px; /* must have width set here */
      }
      .MuiBreadcrumbs-li,
      .separator {
        color: ${theme.palette.grey[300]};
        margin: 0;
        white-space: nowrap;
      }
      .separator {
        font-size: 12px;
        width: 20px;
        height: 20px;
        padding: 0;
      }
      .MuiBreadcrumbs-separator {
        margin: 0;
      }
      .MuiLink-underlineHover {
        cursor: pointer;
      }
    }
    .breadcrumb {
      padding: ${theme.spacing(0.5, 2)};
    }
    .current-page {
      color: ${theme.palette.grey[700]};
      cursor: default;
    }
  `}
`;
