import styled, { css } from 'styled-components';
import { DotInputText } from '@digital-ai/dot-components';

export const rootClassName = 'dot-free-form-search';

export const StyledFreeFormSearch = styled(DotInputText)`
  ${({ theme }) => css`
    &.${rootClassName} {
      min-width: 250px;
      .MuiInputAdornment-root {
        margin-top: 4px;
      }
    }
  `}
`;
