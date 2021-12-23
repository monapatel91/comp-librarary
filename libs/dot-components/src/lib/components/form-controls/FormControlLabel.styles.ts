import { FormControlLabel } from '@mui/material';
import styled, { css } from 'styled-components';

export const rootClassName = 'dot-form-control-label';

export const StyledFormControlLabel = styled(FormControlLabel)`
  ${({ theme }) => css`
    &.${rootClassName} {
      .MuiFormControlLabel-label {
        margin-bottom: 0;
        padding: ${theme.spacing(0, 0, 0, 0.5)};
      }
      &.MuiFormControlLabel-labelPlacementBottom {
        .MuiFormControlLabel-label {
          padding: ${theme.spacing(0.5, 0, 0, 0)};
        }
      }
      &.MuiFormControlLabel-labelPlacementTop {
        .MuiFormControlLabel-label {
          padding: ${theme.spacing(0, 0, 0.5, 0)};
        }
      }
      &.MuiFormControlLabel-labelPlacementStart {
        .MuiFormControlLabel-label {
          padding: ${theme.spacing(0, 0.5, 0)};
        }
      }
    }
  `}
`;
