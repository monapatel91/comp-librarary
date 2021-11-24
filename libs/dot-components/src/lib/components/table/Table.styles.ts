import { Paper, TableContainer } from '@material-ui/core';
import styled, { css } from 'styled-components';
import { DotMenu } from '../menu/Menu';

export const rootClassName = 'dot-table';

export const StyledPaper = styled(Paper)`
  ${({ theme }) => css`
    &.${rootClassName} {
      background: ${theme.palette.product === 'agility' &&
      theme.palette.layer.n50};
      border: 1px solid
        ${theme.palette.product === 'agility'
          ? theme.palette.layer.n100
          : theme.palette.grey[200]};

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
        background-color: ${theme.palette.product === 'agility'
          ? theme.palette.agilityInterface.fixedCol
          : theme.palette.grey[50]};
      }

      tr:last-child td {
        border-bottom: none;
      }

      table {
        width: 100%;
        thead,
        th {
          font-weight: 700;
          &.MuiTableCell-alignCenter > span.MuiTableSortLabel-root {
            padding-left: 26px;
          }
        }
        thead > tr > th:last-child {
          text-align: right;
        }
        tbody > tr > td.noWrap,
        tbody > tr > td.actionItems {
          max-width: 0;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        tbody > tr > td.actionItems {
          text-overflow: clip;
          text-align: right;
        }
        .empty-row td {
          text-align: center;
        }

        .Mui-selected:not(:hover) {
          background-color: ${theme.palette.product === 'agility'
            ? theme.palette.agilityInterface.fixedCol
            : theme.palette.grey[200]};
        }

        .MuiTableRow-head {
          height: 56px;
        }

        .MuiTableCell-root {
          border-bottom: 1px solid
            ${theme.palette.product === 'agility'
              ? theme.palette.layer.n100
              : theme.palette.grey[200]};

          &.MuiTableCell-stickyHeader {
            background: ${theme.palette.product === 'agility' &&
            theme.palette.layer.n50};
          }
        }

        .MuiTableRow-root {
          height: 52px;
        }

        .MuiTableCell-body {
          padding-top: 0;
          padding-bottom: 0;
        }
        .action-cell-wrapper {
          width: 100%;
        }
      }
    }
  `}
`;

export const StyledMenu = styled(DotMenu)`
  .dot-ul > li {
    padding: 0;
    > button {
      width: 100%;
      margin: 0;
    }
  }
`;
