import styled, { css } from 'styled-components';

export const rootClassName = 'dot-pb-application-drawer';

export const StyledProgressionBoardAppFormDrawer = styled.div`
  ${({ theme }) => css`
    &.${rootClassName} {
      .drawer-content {
        height: 100%;
        overflow-y: auto;
        padding: ${theme.spacing(0, 2)};
      }
    }
  `}
`;
