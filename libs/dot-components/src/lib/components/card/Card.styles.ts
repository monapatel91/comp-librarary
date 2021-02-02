import { Card } from '@material-ui/core';
import styled, { css } from 'styled-components';

export const rootClassName = 'dot-card';

export const StyledCard = styled(Card)`
  ${({ theme }) => css`
    &.dot-card {
      color: ${theme.palette.grey[400]};
      font-size: 12px;
      line-height: 14px;
      padding: ${theme.spacing(2)}px;

      .dot-card-header {
        display: flex;

        .dot-card-subheader {
          font-size: 12px;
          line-height: 14px;
        }

        .MuiCardHeader-root {
          flex-grow: 1;
          padding: 0;
        }

        .MuiCardHeader-action {
          margin: 0;
          align-self: flex-start;
        }
      }

      .dot-card-title {
        display: flex;
        align-items: center;
      }

      .dot-card-body {
        align-self: flex-end;
        display: flex;
        width: 100%;
        flex-wrap: nowrap;

        .dot-icon-btn.expand-button {
          margin-left: auto;
          transform: rotate(0deg);
          -o-transition: all ease-in-out 0.2s;
          -moz-transition: all ease-in-out 0.2s;
          -webkit-transition: all ease-in-out 0.2s;
          transition: all ease-in-out 0.2s;

          &.visible {
            transform: rotate(180deg);
          }
        }
      }

      .dot-card-actions {
        padding: ${theme.spacing(2, 0, 0)};
        width: 100%;
      }
    }
  `}
`;
