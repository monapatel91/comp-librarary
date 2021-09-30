import styled, { css } from 'styled-components';
import {
  agilityGreen,
  agilityLightGreen,
  n300,
} from '../../theme-provider/colors/light-theme-colors';

export const rootClassName = 'dot-sidebar';

export const StyledSidebar = styled.aside`
  ${({ theme }) => css`
    &.dot-sidebar {
      align-items: stretch;
      background: ${theme.palette.grey[50]};
      border-width: 0 1px;
      border-style: solid;
      border-color: ${theme.palette.product === 'agility'
        ? n300
        : theme.palette.grey[100]};
      box-shadow: ${theme.palette.product === 'agility' &&
      '0 0 5px rgba(0, 0, 0, 0.15)'};
      color: ${theme.palette.product === 'agility'
        ? theme.palette.layer.n700
        : theme.palette.grey[700]};
      display: flex;
      height: 100%;
      flex-direction: column;
      justify-content: space-between;
      letter-spacing: 0.01em;
      padding: ${theme.spacing(2)}px;
      width: 240px;
      -o-transition: width cubic-bezier(0.4, 0, 0.6, 1) 0.3s;
      -moz-transition: width cubic-bezier(0.4, 0, 0.6, 1) 0.3s;
      -webkit-transition: width cubic-bezier(0.4, 0, 0.6, 1) 0.3s;
      transition: width cubic-bezier(0.4, 0, 0.6, 1) 0.3s;

      header {
        align-items: center;
        border-bottom: 1px solid;
        border-bottom-color: ${theme.palette.product === 'agility'
          ? n300
          : theme.palette.grey[100]};
        display: flex;
        flex-shrink: 0;
        overflow: hidden;
        padding: ${theme.spacing(0, 0, 1)};
        white-space: nowrap;

        .dot-avatar {
          margin-right: ${theme.spacing(1)}px;
        }
      }

      .go-back {
        align-items: center;
        border-bottom: 1px solid;
        border-bottom-color: ${theme.palette.product === 'agility'
          ? n300
          : theme.palette.grey[100]};
        display: flex;

        .dot-icon {
          margin-right: ${theme.spacing(1)}px;
          width: 40px;
          height: 40px;
        }

        &:hover {
          background-color: ${theme.palette.grey[100]};
        }
      }

      hr.MuiDivider-root {
        background-color: ${theme.palette.product === 'agility'
          ? n300
          : theme.palette.grey[100]};
        margin: ${theme.spacing(2, 0)};
      }

      .MuiTypography-subtitle2 {
        border-bottom: 1px solid;
        border-bottom-color: ${theme.palette.product === 'agility'
          ? n300
          : theme.palette.grey[100]};
        margin: ${theme.spacing(0, 0, 1)};
      }

      ul.side-nav {
        flex-grow: 2;
        overflow-x: hidden;
        overflow-y: auto;
        padding: 0;

        .dot-list-item {
          height: 40px;
          padding: 0;
          margin-bottom: ${theme.spacing(1)}px;

          &:active,
          &:focus {
            background-color: ${theme.palette.product === 'agility' &&
            agilityLightGreen};
            border: ${theme.palette.product === 'agility'
              ? `1px solid ${agilityGreen}`
              : 'none'};
            border-radius: ${theme.palette.product === 'agility' && '4px'};
          }

          &:hover {
            background-color: ${theme.palette.product === 'agility' &&
            'transparent'};
            .dot-typography,
            .dot-icon i.dot-i:before {
              color: ${theme.palette.product === 'agility' &&
              theme.palette.secondary.main};
            }
          }

          .MuiTouchRipple-root {
            display: ${theme.palette.product === 'agility' && 'none'};
          }

          .dot-list-item-link .dot-icon {
            margin-right: ${theme.spacing(1)}px;
          }

          .dot-icon {
            border-radius: 50%;
            height: 40px;
            width: 40px;
          }
        }

        li.dot-list-item .dot-typography {
          white-space: nowrap;
        }
      }

      .toggle-nav {
        border-top: 1px solid;
        border-top-color: ${theme.palette.product === 'agility'
          ? n300
          : theme.palette.grey[100]};
        padding: ${theme.spacing(1)}px;
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
        border-top: 1px solid;
        border-top-color: ${theme.palette.product === 'agility'
          ? n300
          : theme.palette.grey[100]};
        color: ${theme.palette.grey[400]};
        display: flex;
        flex-direction: column;
        flex-shrink: 0;
        font-size: 12px;
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
  `}
`;
