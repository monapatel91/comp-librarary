import { Theme } from '@material-ui/core';
import styled, { css } from 'styled-components';

export const rootClassName = 'dot-sidebar';

export const StyledSidebar = styled.aside`
  ${({ theme }: { theme: Theme }) => css`
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
      padding-top: ${theme.spacing(1) * 0.5}px;
      width: 240px;
      -o-transition: width cubic-bezier(0.4, 0, 0.6, 1) 0.3s;
      -moz-transition: width cubic-bezier(0.4, 0, 0.6, 1) 0.3s;
      -webkit-transition: width cubic-bezier(0.4, 0, 0.6, 1) 0.3s;
      transition: width cubic-bezier(0.4, 0, 0.6, 1) 0.3s;

      h3 {
        align-items: center;
        border-bottom: 1px solid ${theme.palette.grey[100]};
        display: flex;
        font-size: 14px;
        overflow: hidden;
        padding: ${theme.spacing(1, 2)};
        white-space: nowrap;

        .dot-avatar {
          margin-right: ${theme.spacing(1)}px;
        }
      }

      nav.go-back {
        border-bottom: 1px solid ${theme.palette.grey[100]};

        li a {
          color: ${theme.palette.grey[700]};
          font-size: 16px;
          padding: ${theme.spacing(1)}px;
        }
      }

      nav.side-nav {
        flex-grow: 2;
        overflow-x: hidden;
        overflow-y: auto;

        li {
          flex-grow: 2;

          &.divider {
            border-bottom: 1px solid ${theme.palette.grey[100]};
            margin: ${theme.spacing(1)}px 0 0;

            h5 {
              font-size: 12px;
              font-weight: normal;
              line-height: 36px;
              margin: 0;
              padding: 0 ${theme.spacing(2)}px;
            }
          }

          .dot-button {
            border-radius: 0;
            height: 44px;
            padding: 6px;

            &.active,
            &:hover,
            &:focus,
            &.Mui-focusVisible {
              background: ${theme.palette.grey[100]};
              color: ${theme.palette.grey[700]};
            }

            .MuiButton-label {
              .MuiButton-startIcon {
                margin: ${theme.spacing(0, 3, 0, 0)};
                padding-left: 10px;
              }

              .dot-icon {
                padding: 0;
              }
            }
          }

          a {
            height: 44px;
            padding: 6px;

            &.active,
            &:hover,
            &:focus {
              background: ${theme.palette.grey[100]};
              color: ${theme.palette.grey[700]};
            }

            p {
              flex-grow: 1;
            }

            .dot-icon {
              padding: 0;

              &.first {
                margin-right: ${theme.spacing(3)}px;
                padding-left: 10px;
              }
            }
          }
        }
      }

      .toggle-nav {
        border-top: 1px solid ${theme.palette.grey[100]};
        padding: ${theme.spacing(1)}px 6px 0;
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

        span.desc {
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

        h3 {
          padding: ${theme.spacing(1)}px;
        }

        nav li {
          .dot-button {
            /* needed to ensure the start icon aligns properly when collapsed */
            min-width: 240px;
          }

          &.divider h5 {
            opacity: 0;
          }
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
          span.desc {
            display: none;
          }

          .d-icon {
            display: block;
          }
        }
      }
    }

    .dot-flyout {
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
    }
  `}
`;
