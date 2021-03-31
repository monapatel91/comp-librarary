import styled, { css } from 'styled-components';

export const rootClassName = 'vsm-hub-home-content';
export const containerClassName = 'vsm-hub-container';

export const StyledVsmHubHome = styled.main`
  ${({ theme }) => css`
    &.${rootClassName} {
      .resource-title {
        margin-bottom: ${theme.spacing(2)}px;
      }
      .MuiGrid-spacing-xs-2 {
        margin: 0;
      }
    }
  `}
`;

export const StyledContainer = styled.div`
  ${({ theme }) => css`
    &.${containerClassName} {
      display: flex;
      .item {
      }
    }
  `}
`;
