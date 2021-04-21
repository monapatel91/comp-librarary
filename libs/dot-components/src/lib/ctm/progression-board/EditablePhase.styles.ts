import styled, { css } from 'styled-components';

export const rootClassName = 'editable-phase';

export const StyledEditablePhase = styled.div`
  ${({ theme }) => css`
    &.${rootClassName} {
      background-color: ${theme.palette.progressionBoard.boardColumn};
      border-radius: ${theme.spacing(1, 1, 0, 0)};
      margin: ${theme.spacing(1, 1)};
      overflow: hidden;
      min-width: 310px;
      max-width: 460px;
      width: 100%;

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

        .editable-phase-name {
          padding: ${theme.spacing(0, 1 / 2, 0, 1)};

          .MuiInputBase-root {
            background-color: ${theme.palette.background.default};
            margin-bottom: 0;
          }
          flex-grow: 1;
        }

        .delete-btn {
          margin: ${theme.spacing(0, 1 / 2, 0, 0)};
        }
      }

      .content-divider {
        background-color: ${theme.palette.background.default};;
        height: ${theme.spacing(1 / 4)}px;
      }
  `}
`;
