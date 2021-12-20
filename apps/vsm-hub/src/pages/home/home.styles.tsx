import styled, { css } from 'styled-components';

export const rootClassName = 'vsm-hub-home-content';
export const containerClassName = 'vsm-hub-container';

export const StyledVsmHubHome = styled.div`
  ${({ theme }) => css`
    &.${rootClassName} {
      margin: ${theme.spacing(3)};
      position: relative;
    }
  `}
`;

export const StyledSection = styled.div`
  &.section {
    position: relative;
    display: flex;
    height: 100%;
    width: 100%;
  }
`;

export const StyledContainer = styled.div`
  ${({ theme }) => css`
    &.${containerClassName} {
      .item {
      }
    }
  `}
`;
