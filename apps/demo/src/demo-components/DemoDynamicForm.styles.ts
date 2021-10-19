import styled, { css } from 'styled-components';

export const rootClassName = 'demo-dynamic-form';

export const StyledDemoDynamicForm = styled.div`
  ${() => css`
    &.${rootClassName} {
      .options {
        display: flex;
        margin: 16px 16px;
        gap: 32px;
      }

      .divider {
        margin: 16px 0 32px;
      }
    }
  `}
`;
