import { FormControlLabel } from '@mui/material';
import styled from 'styled-components';

export const rootClassName = 'dot-form-control-label';

export const StyledFormControlLabel = styled(FormControlLabel)`
  &.${rootClassName} {
    .MuiFormControlLabel-label {
      margin-bottom: 0;
      padding: 0 0 0 4px;
    }
    &.MuiFormControlLabel-labelPlacementBottom {
      .MuiFormControlLabel-label {
        padding: 4px 0 0 0;
      }
    }
    &.MuiFormControlLabel-labelPlacementTop {
      .MuiFormControlLabel-label {
        padding: 0 0 4px 0;
      }
    }
    &.MuiFormControlLabel-labelPlacementStart {
      .MuiFormControlLabel-label {
        padding: 0 4px 0;
      }
    }
  }
`;
