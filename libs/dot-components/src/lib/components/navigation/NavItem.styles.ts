import { Theme } from '@material-ui/core';
import styled, { css } from 'styled-components';

export const rootClassName = 'dot-nav-item';

export const StyledNavItemDivider = styled.li`
  &.dot-nav-item {
    align-items: stretch;
    display: flex;
    margin: 0;
    padding: 0;

    * {
      align-self: center;
    }
  }
`;

export const StyledNavItem = styled.li`
  ${({ theme }: { theme: Theme }) => css`
    &.dot-nav-item {
      align-items: stretch;
      display: flex;
      margin: 0;
      padding: 0;
      cursor: pointer;

      &.vertical > a {
        flex-direction: column;

        .dot-icon {
          margin: 0;
        }
      }

      * {
        align-self: center;
      }

      .dot-button {
        justify-content: flex-start;
        padding: ${theme.spacing(1)}px;

        .MuiButton-startIcon {
          margin: ${theme.spacing(0, 1, 0, 0)};
        }

        .MuiButton-endIcon {
          display: flex;
          flex-grow: 1;
          justify-content: flex-end;
        }
      }

      a {
        color: ${theme.palette.grey[700]};
        display: flex;
        flex-grow: 1;
        padding: ${theme.spacing(1)}px;
        text-decoration: none;

        &:hover,
        &:focus,
        &.active {
          background: ${theme.palette.grey[50]};
        }

        * {
          align-self: center;
        }

        p {
          margin-bottom: 0;
        }

        .dot-icon {
          max-height: ${theme.spacing(8)}px;
          object-fit: scale-down;
          padding: 0;

          &.first {
            margin-right: ${theme.spacing(1)}px;
          }

          &.last {
            margin-left: ${theme.spacing(1)}px;
            order: 4;
          }
        }
      }
    }
  `}
`;
