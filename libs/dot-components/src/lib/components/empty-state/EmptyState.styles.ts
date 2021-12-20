import styled, { css } from 'styled-components';

export const rootClassName = 'dot-empty-state';

export const StyledEmptyState = styled.div`
  ${({ theme }) => css`
    &.dot-empty-state {
      margin: 0 auto;
      max-width: 600px;
      text-align: center;

      .empty-state-image {
        min-height: 239px;
        margin-bottom: ${theme.spacing(5)};
      }

      h2 {
        margin-bottom: ${theme.spacing(1)};
      }

      .dot-button {
        margin-top: ${theme.spacing(4)};
      }
    }
  `}
`;
