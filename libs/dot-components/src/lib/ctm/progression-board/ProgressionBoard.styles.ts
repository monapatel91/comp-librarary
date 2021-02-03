import styled, { css } from 'styled-components';

export const rootClassName = 'dot-progression-board';

export const StyledProgressionBoard = styled.div`
  ${({ theme }) => css`
    .board,
    .board-headers {
      display: flex;
      flex-flow: row nowrap;
      margin: 0;
      background-color: #fff;
      overflow-x: visible;

      .board-column {
        display: flex;
        flex-flow: column wrap;
        flex: 1;
        margin: 0 3px;
        background-color: lighten(#438098, 50%);
      }
    }

    ul.board {
      padding: 0;
    }

    .board-column-header,
    .board-column {
      min-width: 285px;
    }

    .columns-wrapper {
      display: table;
      flex: 1;
      width: 100%;
    }

    .board-headers {
      width: 100%;
      position: -webkit-sticky;
      position: sticky;
      top: 0;
      z-index: 2;

      .delivery-category {
        border-top: 8px solid transparent;
        border-radius: 8px 8px 0 0;
      }

      .delivery-category-developing {
        border-top-color: #ea6c02;
      }

      .delivery-category-packaged {
        border-top-color: #005293;
      }

      .board-column-header {
        display: flex;
        flex-flow: column wrap;
        flex: 1;
        font-weight: 700;
        padding: 12px 20px 10px 20px;
        margin: 0 3px;
        border-radius: 4px 4px 0 0;
        font-size: 1.5em;
        text-align: left;
        word-break: break-word;
        background-color: lighten(#438098, 50%);
        color: darken(#438098, 20%);
      }
    }

    #env {
      .filter-text {
        display: flex;

        input {
          padding: 10px;
        }
      }
    }

    .environments {
      .board {
        flex-flow: column;

        .board-row {
          border-bottom: 1px dashed #31363e;
          display: flex;

          &:last-child {
            border: none;
          }
        }

        .package-name-label {
          text-align: center;
          justify-content: center;
          font-size: 18px;
          font-weight: 700;
          color: darken(#005293, 15%);
          padding: 8px 0;
        }

        .environments-content {
          a {
            display: block;
          }
        }
      }
    }

    #environments-board .board-headers {
      border-bottom: 1px dashed #31363e;
    }

    .progression .board-column {
      min-height: 30px;
      padding: 10px;
    }

    .progression-content-container {
      overflow: auto;
      height: 80vh;
      display: flex;
      margin: 0 auto;

      .in-progress,
      [data-component='EmptyState'],
      #delivered {
        flex: 1 auto;
      }
    }
  `}
`;
