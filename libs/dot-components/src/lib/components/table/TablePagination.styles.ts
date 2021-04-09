import { TablePagination } from '@material-ui/core';
import styled, { css } from 'styled-components';

export const rootClassName = 'dot-table-pagination';

export const StyledTablePagination = styled(TablePagination)`
  ${({ theme }) => css`
    &.${rootClassName} {
      border-top: 1px solid ${theme.palette.grey[200]};
    }
  `}
` as typeof TablePagination;
