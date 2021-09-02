import styled, { css } from 'styled-components';

export const rootClassName = 'dot-sidebar';

export const StyledSidebar = styled.aside`
  ${({ theme }) => css`
    &.dot-sidebar {
      align-items: stretch;
      background: ${theme.palette.grey[50]};
      border-right: 1px solid ${theme.palette.grey[100]};
      color: ${theme.palette.grey[700]};
      display: flex;
      height: 100%;
      flex-direction: column;
      justify-content: space-between;
      letter-spacing: 0.01em;
      padding-top: ${theme.spacing(0.5)}px;
      width: 240px;
      -o-transition: width cubic-bezier(0.4, 0, 0.6, 1) 0.3s;
      -moz-transition: width cubic-bezier(0.4, 0, 0.6, 1) 0.3s;
      -webkit-transition: width cubic-bezier(0.4, 0, 0.6, 1) 0.3s;
      transition: width cubic-bezier(0.4, 0, 0.6, 1) 0.3s;

      header {
        align-items: center;
        border-bottom: 1px solid ${theme.palette.grey[100]};
        display: flex;
        flex-shrink: 0;
        overflow: hidden;
        padding: ${theme.spacing(1, 2)};
        white-space: nowrap;

        .dot-avatar {
          margin-right: ${theme.spacing(1)}px;
        }
      }

      .go-back {
        align-items: center;
        border-bottom: 1px solid ${theme.palette.grey[100]};
        display: flex;
        padding-top: 6px;
        padding-bottom: 6px;

        .dot-icon {
          margin-right: ${theme.spacing(1)}px;
          padding: 12px;
        }

        &:hover {
          background-color: ${theme.palette.grey[100]};
        }
      }

      hr.MuiDivider-root {
        background-color: ${theme.palette.grey[100]};
        margin: ${theme.spacing(1, 0)};
      }

      ul.side-nav {
        flex-grow: 2;
        overflow-x: hidden;
        overflow-y: auto;

        .dot-list-item {
          height: 44px;
        }

        li.dot-list-item .dot-typography {
          white-space: nowrap;
        }
      }

      .toggle-nav {
        border-top: 1px solid ${theme.palette.grey[100]};
        padding: ${theme.spacing(1, 0.75, 0)};
        text-align: right;

        .dot-icon {
          transform: rotate(0deg);
          -o-transition: all cubic-bezier(0.4, 0, 0.2, 1) 0.3s;
          -moz-transition: all cubic-bezier(0.4, 0, 0.2, 1) 0.3s;
          -webkit-transition: all cubic-bezier(0.4, 0, 0.2, 1) 0.3s;
          transition: all cubic-bezier(0.4, 0, 0.2, 1) 0.3s;
        }
      }

      .powered-by {
        border-top: 1px solid ${theme.palette.grey[100]};
        color: ${theme.palette.grey[400]};
        display: flex;
        flex-direction: column;
        flex-shrink: 0;
        font-size: 12px;
        margin: ${theme.spacing(1)}px;
        overflow: hidden;
        padding: ${theme.spacing(1)}px;

        p.desc {
          white-space: nowrap;
        }

        .company-name {
          margin-top: ${theme.spacing(1)}px;
        }

        .d-icon {
          display: none;
        }
      }

      &.collapsed {
        width: 56px;
        -o-transition: all cubic-bezier(0.4, 0, 0.6, 1) 0.3s;
        -moz-transition: all cubic-bezier(0.4, 0, 0.6, 1) 0.3s;
        -webkit-transition: all cubic-bezier(0.4, 0, 0.6, 1) 0.3s;
        transition: all cubic-bezier(0.4, 0, 0.6, 1) 0.3s;

        header {
          padding: ${theme.spacing(1)}px;
        }

        .go-back .MuiTypography-root {
          display: none;
        }

        ul.side-nav li.MuiListSubheader-root .MuiTypography-root {
          opacity: 0;
        }

        .toggle-nav {
          align-self: center;

          .dot-icon {
            transform: rotate(180deg);
            -o-transition: all cubic-bezier(0.4, 0, 0.2, 1) 0.3s;
            -moz-transition: all cubic-bezier(0.4, 0, 0.2, 1) 0.3s;
            -webkit-transition: all cubic-bezier(0.4, 0, 0.2, 1) 0.3s;
            transition: all cubic-bezier(0.4, 0, 0.2, 1) 0.3s;
          }
        }

        .powered-by {
          align-items: center;

          .company-name,
          p.desc {
            display: none;
          }

          .d-icon {
            display: block;
          }
        }
      }
    }

    /* .dot-flyout {
      margin: 10px 0 0 190px;
      width: 248px;

      &.collapsed {
        margin-left: 36px;
      }

      li {
        &.active,
        &:hover,
        &:focus {
          background: ${theme.palette.grey[100]};
        }
      }

      a {
        align-items: center;
        color: ${theme.palette.grey[700]};
        display: flex;
        &.active,
        &:hover,
        &:focus {
          background: transparent;
        }
      }
    } */
  `}
`;
