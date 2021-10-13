import styled, { css } from 'styled-components';

export const rootClassName = 'dynamic-form';

export const StyledDynamicForm = styled.div`
  ${() => css`
    &.${rootClassName} {
      margin: 16px;
    }
  `}
`;
