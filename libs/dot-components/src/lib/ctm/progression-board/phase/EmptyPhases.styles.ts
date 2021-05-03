import styled, { css } from 'styled-components';

export const rootClassName = 'empty-phases';

export const StyledEmptyPhases = styled.div`
  ${({ theme }) => css`
    &.${rootClassName} {
      display: flex;
      height: 100%;
      width: 100%;
      overflow-x: auto;
      position: relative;

      .empty-phase {
        background-color: ${theme.palette.progressionBoard.boardColumn};
        border-radius: ${theme.spacing(1, 1, 0, 0)};
        overflow: hidden;
        margin: ${theme.spacing(0, 0.5)};
        min-width: 310px;
        max-width: 460px;
        flex-grow: 1;

        .header {
          align-items: center;
          background-color: ${theme.palette.progressionBoard.boardColumnHeader};
          display: flex;
          height: ${theme.spacing(7)}px;

          .header-title {
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            flex-grow: 1;
            padding: ${theme.spacing(0, 2)};
          }
        }

        .content-divider {
          background-color: ${theme.palette.background.default};
          height: ${theme.spacing(0.25)}px;
        }
      }

      .empty-state {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        z-index: 1;

        img {
          max-width: 400px;
        }
      }
    }
  `}
`;
