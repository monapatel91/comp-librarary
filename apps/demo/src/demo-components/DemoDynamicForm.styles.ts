import styled, { css } from 'styled-components';

export const rootClassName = 'demo-dynamic-form';

export const StyledDemoDynamicForm = styled.div`
  ${() => css`
    &.${rootClassName} {
      margin: 20px;
    }
  `}
`;
