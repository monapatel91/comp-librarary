import styled, { css } from 'styled-components';
import { DotDialog } from '../../../components';

export const rootClassName = 'sc-server-list';

export const StyledPayloadDialog = styled(DotDialog)`
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

      .payload-url-input {
        margin: ${theme.spacing(3, 0, 0)};
      }
    }
  `}
`;

export const StyledScServerList = styled.div`
  ${({ theme }) => css`
    &.${rootClassName} {
      width: 100%;

      .source-control {
        margin: ${theme.spacing(0, 0, 1)};
      }

      .payload-dialog {
        .dialog-content {
          padding: ${theme.spacing(5, 3)};
        }
      }
    }
  `}
`;
