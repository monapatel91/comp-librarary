import styled, { css } from 'styled-components';
import { DotForm } from '../form/Form';

export const rootClassName = 'dot-dynamic-form';

export const StyledDynamicForm = styled(DotForm)`
  ${() => css`
    &.${rootClassName} {
    }
  `}
`;
