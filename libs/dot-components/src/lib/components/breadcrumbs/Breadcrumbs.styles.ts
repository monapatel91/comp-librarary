import { Breadcrumbs } from '@material-ui/core';
import styled, { css } from 'styled-components';

export const rootClassName = 'dot-breadcrumbs';

export const StyledBreadcrumbs = styled(Breadcrumbs)`
  ${({ theme }) => css`
    &.${rootClassName} {
      margin-bottom: 0;

      .MuiBreadcrumbs-ol {
        flex-wrap: nowrap;
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

      .MuiBreadcrumbs-li:last-child {
        overflow: hidden;
        text-overflow: ellipsis;
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
