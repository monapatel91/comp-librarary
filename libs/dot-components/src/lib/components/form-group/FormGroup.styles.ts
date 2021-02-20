import { FormGroup } from '@material-ui/core';
import styled, { css } from 'styled-components';

export const rootClassName = 'dot-form-group';

export const StyledFormGroup = styled(FormGroup)`
  ${({ theme, row }) => css`
    &.${rootClassName} {
      & > * {
        margin: ${row ? `${theme.spacing(0.5)}px` : 0};
      }
    }
  `}
`;
