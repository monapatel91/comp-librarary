import styled, { css } from 'styled-components';

export const rootClassName = 'dot-branding';

export const StyledBranding = styled.div`
  ${({ theme }) => css`
    &.${rootClassName} {
      display: flex;
      align-items: center;
      > * {
        margin: ${theme.spacing(0, 0.5, 0, 0.5)};
      }
    }
  `}
`;
