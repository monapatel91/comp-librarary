import styled, { css } from 'styled-components';

export const rootClassName = 'capabilities-container';

export const StyledCapabilities = styled.div`
  ${({ theme }) => css`
    &.${rootClassName} {
      .dot-card {
        margin-bottom: ${theme.spacing(2)};
      }
      .list-header {
        max-width: 200px;
      }
      .capabilities-title {
        margin-bottom: ${theme.spacing(2)};
      }
      .horizontal-card {
        display: flex;
        justify-content: space-between;
        align-content: center;
        .center {
          display: flex;
          justify-content: center;
          align-items: center;
          .dot-button {
            margin: ${theme.spacing(1)};
          }
        }
      }
    }
  `}
`;
