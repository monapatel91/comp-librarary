import { Dialog } from '@material-ui/core';
import styled, { css } from 'styled-components';

export const rootClassName = 'dot-dialog';

export const StyledDialog = styled(Dialog)`
  ${({ theme }) => css`
    &.dot-dialog {
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
