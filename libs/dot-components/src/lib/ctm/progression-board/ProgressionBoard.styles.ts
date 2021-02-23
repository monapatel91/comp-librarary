import styled, { css } from 'styled-components';

export const rootClassName = 'dot-progression-board';

export const StyledProgressionBoard = styled.div`
  ${({ theme }) => css`
    &.${rootClassName} {
      &.columns-wrapper {
        display: table;
        flex: 1;
        width: 100%;
      }

      .board-headers {
        background-color: ${theme.palette.background.default};
        border-bottom: 2px solid #fff;
        display: flex;
        flex-flow: row nowrap;
        margin: 0;
        overflow-x: visible;
        position: -webkit-sticky;
        position: sticky;
        top: 0;
        width: 100%;
        z-index: 2;

        .board-column-header {
          background-color: ${theme.palette.primary['100']};
          border-radius: 4px 4px 0 0;
          color: #244451;
          display: flex;
          flex: 1;
          flex-flow: column wrap;
          font-weight: 700;
          font-size: 16px;
          padding: ${theme.spacing(1.5, 2)};
          margin: 0 3px;
          min-width: 285px;
          text-align: left;
          word-break: break-word;
        }

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
            color: #00457c;
            padding: 8px 0;
          }

          .environments-content a {
            display: block;
          }
        }
      }

      #environments-board .board-headers {
        border-bottom: 1px dashed #31363e;
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
    }
  `}
`;
