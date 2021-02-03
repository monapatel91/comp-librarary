import styled from 'styled-components';

export const rootClassName = 'dot-table-container';

export const StyledTableContainer = styled.div`
  .dot-table-container {
    align-items: stretch;
    display: flex;
    flex-direction: column;
    justify-content: center;

    // while loading, change opacity and disable pointer events
    &.loading {
      .progress-container {
        display: block;
      }

      .dot-table,
      .dot-table-pagination {
        opacity: 0.4;
        pointer-events: none;
      }
    }

    .progress-container {
      align-self: center;
      display: none;
      flex-grow: 1;
      position: absolute;
      z-index: 10;
    }

    .dot-table {
      thead,
      th {
        font-weight: bold;
      }

      .empty-row td {
        text-align: center;
      }
    }
  }
`;
