import styled, { css } from 'styled-components';

export const rootClassName = 'sc-server-list';

export const StyledScServerList = styled.div`
  ${({ theme }) => css`
    &.${rootClassName} {
      width: 100%;

      .source-control {
        margin: ${theme.spacing(0, 0, 1)};
      }
    }
  `}
`;
