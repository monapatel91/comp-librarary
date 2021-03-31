import styled, { css } from 'styled-components';

export const rootClassName = 'dot-nav-list';
export const mainContentClassName = 'main-content';

export const StyledDotNavList = styled.main`
  ${({ theme }) => css`
    &.${rootClassName} {
      display: flex;
      flex-direction: row;
      height: calc(100vh - 48px);
      overflow: hidden;
      position: relative;
      top: 48px;
      width: 100vw;
      section {
        &.${mainContentClassName} {
          width: 100%;
          overflow: auto;
        }
      }
      .MuiTypography-root {
        text-align: left;
      }
    }
  `}
`;
