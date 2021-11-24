import styled, { css } from 'styled-components';

export const rootClassName = 'dot-dynamic-form';

export const StyledDynamicForm = styled.div`
  ${({ theme }) => css`
    &.${rootClassName} {
      margin: ${theme.spacing(2)}px;

      .wrapper-component {
        display: flex;
        gap: ${theme.spacing(0.5)}px;
      }

      .terms {
        display: flex;
        align-items: center;
        gap: ${theme.spacing(2)}px;

        .dot-icon {
          color: ${theme.palette.primary[500]};
        }
      }
    }
  `}
`;
