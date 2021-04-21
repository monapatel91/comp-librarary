import styled, { css } from 'styled-components';

export const rootClassName = 'pb-phase-editor';

export const StyledProgressionBoardPhaseEditor = styled.div`
  ${({ theme }) => css`
    &.${rootClassName} {
      display: flex;
      flex-direction: column;
      height: 100%;
      overflow-y: hidden;

      .phases {
        display: flex;
        height: 100%;
        width: 100%;
        overflow-x: auto;

        .add-btn {
          align-self: flex-start;
          margin: ${theme.spacing(2, 0)};
        }
      }

      .configure-actions {
        display: flex;
        justify-content: flex-end;
      }
    }
  `}
`;
