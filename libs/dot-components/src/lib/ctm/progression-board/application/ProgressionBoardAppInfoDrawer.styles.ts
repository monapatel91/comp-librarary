import styled, { css } from 'styled-components';

export const rootClassName = 'progression-board-app-info-drawer';

export const StyledProgressionBoardAppInfoDrawer = styled.div`
  ${({ theme }) => css`
    &.${rootClassName} {
      .application-edit {
        padding: ${theme.spacing(3, 2)};
      }
    }
  `}
`;
