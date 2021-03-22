import { TablePagination } from '@material-ui/core';
import styled from 'styled-components';

export const rootClassName = 'dot-table-pagination';

export const StyledTablePagination = styled(TablePagination)`
  &.${rootClassName} {
  }
` as typeof TablePagination;
