import styled, { css } from 'styled-components';
import { levelFourth } from '../../theme-provider/common/variables';
import { n400 } from '../../theme-provider/colors/light-theme-colors';
import { DotDrawer } from '../drawer/Drawer';

export const rootClassName = 'dot-app-toolbar';

export const StyledMainMenu = styled(DotDrawer)`
  ${() => css`
    &.dot-main-menu .dot-drawer-paper {
      top: 64px;
      padding: 0;
      .dot-sidebar {
        height: calc(100vh - 64px);
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

      .divider {
        height: 36px;
        width: 1px;
        background: ${n400};
      }

      .dot-icon-btn {
        color: ${theme.palette.grey[100]};
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
          margin-right: ${theme.spacing(1.5)}px;
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
          margin-left: 6px;
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
      }
    }
  `}
`;
