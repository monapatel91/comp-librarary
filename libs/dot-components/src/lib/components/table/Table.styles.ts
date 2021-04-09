import { Paper, TableContainer } from '@material-ui/core';
import styled, { css } from 'styled-components';

export const rootClassName = 'dot-table';

export const StyledPaper = styled(Paper)`
  ${({ theme }) => css`
    &.dot-table {
      border: 1px solid ${theme.palette.grey[200]};

      // while loading, change opacity, disable pointer events
      // and hide pagination.
      &.loading {
        opacity: 0.4;
        pointer-events: none;
        .dot-table-pagination {
          display: none;
        }
      }
    }
  `}
`;

export const StyledTableContainer = styled(TableContainer)`
  ${({ theme }) => css`
    &.dot-table-container {
      border-radius: 4px;
      align-items: stretch;
      flex-direction: column;
      justify-content: center;

      tr:hover {
        background-color: ${theme.palette.grey[50]};
      }

      tr:last-child td {
        border-bottom: none;
      }

      table {
        thead,
        th {
          font-weight: 700;
        }

        .empty-row td {
          text-align: center;
        }

        .Mui-selected:not(:hover) {
          background-color: ${theme.palette.grey[200]};
        }

        .MuiTableRow-head {
          height: 56px;
        }

        .MuiTableCell-root {
          border-bottom: 1px solid ${theme.palette.grey[200]};
        }

        .MuiTableRow-root {
          height: 52px;
        }

        .MuiTableCell-body {
          padding-top: 0;
          padding-bottom: 0;
        }
      }
    }
  `}
`;
