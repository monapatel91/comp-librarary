import { Dialog } from '@material-ui/core';
import styled, { css } from 'styled-components';

export const rootClassName = 'dot-dialog';

export const StyledDialog = styled(Dialog)`
  ${({ theme }) => css`
    &.${rootClassName} {
      .MuiDialog-paper {
        background-color: ${theme.palette.product === 'agility' &&
        theme.palette.layer.n50};
        min-width: 280px;
        max-height: 80vh;
        max-width: 80vw;
      }

      .MuiDialogTitle-root {
        align-items: center;
        display: flex;
        flex-wrap: nowrap;
        padding: ${theme.spacing(1, 2)};
        h2 {
          flex-grow: 1;
        }

        .dot-icon-button {
          margin-left: ${theme.spacing(1)}px;
        }
      }

      .dot-dialog-content {
        padding: ${theme.spacing(1, 2)};
        overflow-y: auto;
      }

      .dot-dialog-actions {
        padding: ${theme.spacing(2)};

        .cancel-button {
          color: inherit;
        }
      }
    }
  `}
`;
