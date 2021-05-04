import styled, { css } from 'styled-components';
import { DotDialog } from '../../../components';

export const rootClassName = 'payload-url-dialog';

export const StyledPayloadUrlDialog = styled(DotDialog)`
  ${({ theme }) => css`
    .MuiDialog-paper {
      width: 464px;
    }

    .MuiDialogTitle-root {
      margin: ${theme.spacing(1, 1)};
    }

    .MuiDialogActions-root {
      margin: ${theme.spacing(0, 2)};
    }

    .dialog-content {
      margin: ${theme.spacing(2, 1)};

      .dialog-text-1 {
        margin: ${theme.spacing(0, 0, 2, 0)};
      }

      .pu-input {
        margin: ${theme.spacing(3, 0, 0)};
      }
    }
  `}
`;
