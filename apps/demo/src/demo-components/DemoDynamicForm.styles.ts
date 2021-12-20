import styled, { css } from 'styled-components';

export const rootClassName = 'demo-dynamic-form';

export const StyledDemoDynamicForm = styled.div`
  ${({ theme }) => css`
    &.${rootClassName} {
      .options {
        display: flex;
        margin: ${theme.spacing(2, 2)};
        gap: ${theme.spacing(4)};
      }

      .divider {
        margin: ${theme.spacing(2, 0, 4)};
      }
    }
  `}
`;
