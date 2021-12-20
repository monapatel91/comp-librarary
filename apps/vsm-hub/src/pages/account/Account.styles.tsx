import { DotInputText } from '@digital-ai/dot-components';
import { TableCell } from '@mui/material';
import styled, { css } from 'styled-components';

export const rootClassName = 'vsm-input';
export const tableCellClassName = 'vsm-table-cell';

export const StyledVsmInput = styled(DotInputText)`
  ${({ theme }) => css`
    &.${rootClassName} {
      margin: ${theme.spacing(1, 0, 1, 0)};
    }
  `}
`;

export const StyledTableCell = styled(TableCell)`
  ${({ theme }) => css`
    &.${tableCellClassName} {
      .action-buttons {
        display: flex;
        justify-content: flex-end;
        & > * {
          margin: 0 4px;
        }
      }
    }
  `}
`;
