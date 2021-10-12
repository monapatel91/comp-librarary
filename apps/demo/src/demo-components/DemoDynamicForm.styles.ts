import styled, { css } from 'styled-components';

export const rootClassName = 'demo-dynamic-form';

export const StyledDemoDynamicForm = styled.div`
  ${({ theme }) => css`
    &.${rootClassName} {
      .is-mandatory {
        width: 100%;
      }
    }
  `}
`;
