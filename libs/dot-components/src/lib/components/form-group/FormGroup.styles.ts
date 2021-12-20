import { FormGroup } from '@mui/material';
import styled, { css } from 'styled-components';

export const rootClassName = 'dot-form-group';

export const StyledFormGroup = styled(FormGroup)`
  ${({ theme, row }) => css`
    &.${rootClassName} {
      & > * {
        margin: ${row ? `${theme.spacing(0.5)}` : 0};
      }
    }
  `}
`;
