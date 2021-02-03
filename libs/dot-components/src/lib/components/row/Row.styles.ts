import styled, { css } from 'styled-components';

export const rootClassName = 'dot-row';

export const StyledRow = styled.div`
  ${({ theme }) => css`
    &.dot-row {
      align-items: center;
      border-radius: 4px;
      border: 1px solid ${theme.palette.grey[300]};
      display: flex;
      justify-content: space-between;
      margin-bottom: ${theme.spacing(1)}px;
      padding: ${theme.spacing(1.5, 2)};

      .dot-icon {
        margin-right: ${theme.spacing(1)}px;
      }

      .text {
        flex-grow: 2;
        font-family: 'LatoBold', sans-serif;
        font-size: 16px;
        line-height: 19px;
      }
    }
  `}
`;
