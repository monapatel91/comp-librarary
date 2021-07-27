import styled, { css } from 'styled-components';

export const rootClassName = 'dot-snackbar-container';

export const StyledDotSnackbarContainer = styled.div`
  ${() => css`
    &.${rootClassName} {
      position: absolute;
      top: 0;
      width: 250px;
      height: auto;
      right: 0;
      & > div {
        position: relative;
      }
    }
  `}
`;
