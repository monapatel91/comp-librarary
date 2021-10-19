import styled, { css } from 'styled-components';

export const rootClassName = 'demo-dynamic-form';

export const StyledDemoDynamicForm = styled.div`
  ${() => css`
    &.${rootClassName} {
      .options {
        margin: 16px 16px;
      }

      .divider {
        margin: 16px 0 32px;
      }
    }
  `}
`;
