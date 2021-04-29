import styled, { css } from 'styled-components';

export const rootClassName = 'waiting-phase';

export const StyledWaitingPhase = styled.li`
  ${({ theme }) => css`
    &.${rootClassName} {
      background-color: ${theme.palette.progressionBoard.boardColumn};
      display: flex;
      flex: 1;
      flex-flow: column wrap;
      margin: 0 3px;
      min-height: 30px;
      min-width: 285px;
      padding: ${theme.spacing(1)}px;

      .waiting-card {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-end;
        border: 1px solid ${theme.palette.progressionBoard.cardBorder};
        background-color: ${theme.palette.progressionBoard.boardColumn};
        margin: ${theme.spacing(1)}px;
        padding: ${theme.spacing(0, 2, 3)};
        border-radius: ${theme.spacing(1)}px;
        min-width: 110px;
        height: 144px;
        text-align: center;

        .waiting-icon {
          padding: ${theme.spacing(0, 0, 3, 0)};
        }
      }
    }
  `}
`;
