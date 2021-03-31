import styled, { css } from 'styled-components';

export const rootClassName = 'vsm-hub-product-container';

export const StyledProducts = styled.div`
  ${({ theme }) => css`
    &.${rootClassName} {
    }
    .MuiGrid-spacing-xs-2 {
      margin: 0;
    }
    .resource-title {
      margin-bottom: ${theme.spacing(2)}px;
    }
  `}
`;
