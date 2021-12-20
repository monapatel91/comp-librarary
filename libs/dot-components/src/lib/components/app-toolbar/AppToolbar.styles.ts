import styled, { css } from 'styled-components';
import { levelFourth } from '../../theme-provider/common/variables';
import { n400 } from '../../theme-provider/colors/light-theme-colors';
import { DotDrawer } from '../drawer/Drawer';

export const rootClassName = 'dot-app-toolbar';
export const denseClassName = 'dense';

export const StyledMainMenu = styled(DotDrawer)`
  ${() => css`
    &.dot-main-menu {
      &.${denseClassName} .dot-drawer-paper {
        top: 48px;

        .dot-sidebar {
          height: calc(100vh - 48px);
        }
      }

      .dot-drawer-paper {
        top: 64px;
        padding: 0;

        .dot-sidebar {
          height: calc(100vh - 64px);
        }
      }
    }
  `}
`;

export const StyledAppToolbar = styled.header`
  ${({ theme }) => css`
    &.${rootClassName} {
      align-items: center;
      background: ${theme.palette.product === 'agility'
        ? theme.palette.agilityInterface.headerBg
        : theme.palette.grey[700]};
      border-bottom: 4px solid ${theme.palette.grey[100]};
      box-sizing: border-box;
      color: ${theme.palette.grey[0]};
      display: flex;
      height: 64px;
      padding: ${theme.spacing(1.5, 2, 1.5, 0)};
      position: fixed;
      width: 100%;
      z-index: ${levelFourth};
      top: 0;
      left: 0;
      right: 0;

      &.${denseClassName} {
        height: 48px;

        .divider {
          height: 32px;
        }
      }

      .divider {
        height: 36px;
        width: 1px;
        background: ${n400};
      }

      .dot-icon-btn {
        border: ${theme.palette.product === 'agility' && 'none'};
        color: ${theme.palette.grey[100]};

        &:hover,
        &:active,
        &:focus {
          background: ${theme.palette.product === 'agility' &&
          theme.palette.agilityInterface.topBarIconHoverBg};
        }
      }

      .dot-main-menu-btn {
        padding: ${theme.spacing(0, 1)};
        text-align: center;
      }

      .dot-branding {
        align-items: center;
        display: flex;
        padding: ${theme.spacing(0, 2)};

        .primary-logo,
        .app-logo {
          margin-right: ${theme.spacing(1.5)};
        }

        .primary-logo,
        .dot-app-logo {
          display: flex;
          max-width: 200px;
          svg,
          img {
            max-height: 36px;
            max-width: 200px;
          }
        }

        a {
          line-height: 0;
        }

        .dot-product-name {
          color: ${theme.palette.grey[100]};
          font-size: 18px;
          margin: ${theme.spacing(0, 1.5)};
        }

        .divider {
          margin-left: ${theme.spacing(2)};
        }
      }

      div.dot-right-side {
        display: flex;
        flex-grow: 2;
        justify-content: flex-end;
      }

      .avatar-wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        button.dot-avatar:focus-visible {
          box-shadow: 0px 0px 0px 3px ${theme.palette.layer.n900},
            0px 0px 0px 5px ${theme.palette.layer.n0};
        }
      }
    }
  `}
`;
