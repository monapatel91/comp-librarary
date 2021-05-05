import styled, { css } from 'styled-components';

export const rootClassName = 'application-drawer-header';

export const StyledApplicationDrawerHeader = styled.div`
  ${({ theme }) => css`
    &.${rootClassName} {
      padding: ${theme.spacing(0, 1, 0, 2)};
      display: flex;
      align-items: center;
      height: 90px;
      box-shadow: inset 0px -1px 0px ${theme.palette.progressionBoard.boardColumnHeader};

      .application-icon {
        flex-shrink: 0;
        margin: ${theme.spacing(0, 2, 0, 0)};
      }

      .header-title {
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        flex-grow: 1;
      }
    }
  `}
`;
