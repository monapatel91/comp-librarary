import styled, { css } from 'styled-components';

export const rootClassName = 'dot-dynamic-form';

export const StyledDynamicForm = styled.div`
  ${({ theme }) => css`
    &.${rootClassName} {
      margin: ${theme.spacing(2)}px;
    }
  `}
`;
