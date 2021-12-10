import styled, { css } from 'styled-components';

export const rootClassName = 'dot-breadcrumbs-wrapper';
export const rootBreadcrumbsClassName = 'dot-breadcrumbs';

export const StyledBreadcrumbs = styled.div`
  ${({ theme }) => css`
    &.${rootClassName} {
      overflow: hidden;

      .dot-breadcrumbs-menu {
        .MuiMenuItem-root {
          padding: 0;
        }

        a.breadcrumb {
          width: 100%;
          padding: ${theme.spacing(0.5, 2)};
        }
      }

      .${rootBreadcrumbsClassName} {
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

        .breadcrumb {
          padding: ${theme.spacing(0.5, 2)};
        }

        .current-page {
          color: ${theme.palette.grey[700]};
          cursor: default;
        }
      }
    }
  `}
`;
