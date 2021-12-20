import styled, { css } from 'styled-components';

export const rootClassName = 'dot-card-footer';

export const StyledDiv = styled.div`
  ${({ theme }) => css`
    &.${rootClassName} {
      padding: ${theme.spacing(2)};
    }
  `}
`;
