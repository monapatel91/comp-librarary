import styled, { css } from 'styled-components';
import { DotDrawer } from '../drawer/Drawer';

export const rootClassName = 'dot-app-toolbar';

export const StyledMainMenu = styled(DotDrawer)`
  ${({ theme }) => css`
    &.dot-main-menu .dot-drawer-paper {
      padding: ${theme.spacing(6, 0, 0)};
    }
  `}
`;

export const StyledAppToolbar = styled.header`
  ${({ theme }) => css`
    &.dot-app-toolbar {
      align-items: center;
      background: ${theme.palette.grey[700]};
      border-bottom: 4px solid ${theme.palette.grey[100]};
      color: ${theme.palette.grey[0]};
      display: flex;
      height: 64px;
      padding-left: ${theme.spacing(0.5)}px;
      position: fixed;
      width: 100%;
      z-index: 9999;
      top: 0;
      left: 0;
      right: 0;
      &.dense {
        height: 48px;

        .dot-icon-btn {
          margin-right: ${theme.spacing(3)}px;
          padding: ${theme.spacing(0.25)}px;

          &.hamburger {
            margin-left: 10px;
            margin-right: ${theme.spacing(0.5)}px;
          }
        }

        .dot-button {
          padding: ${theme.spacing(0.5, 1)};
          margin-right: ${theme.spacing(2)}px;
        }
      }

      .dot-branding {
        align-items: center;
        display: flex;
        margin-left: ${theme.spacing(1.5)}px;

        &.hamburger {
          margin-left: ${theme.spacing(1)}px;
        }

        a {
          line-height: 0;
        }

        .dot-product-name {
          color: ${theme.palette.grey[100]};
          font-size: 18px;
          margin: ${theme.spacing(0, 1.5)};
        }
      }

      .dot-icon-btn {
        color: ${theme.palette.grey[100]};
        margin-right: ${theme.spacing(1)}px;
        padding: ${theme.spacing(1.5)}px;
      }

      div.dot-right-side {
        display: flex;
        flex-grow: 2;
        justify-content: flex-end;
      }

      .dot-avatar {
        margin: ${theme.spacing(0, 2, 0, 1)};
      }
    }
  `}
`;
