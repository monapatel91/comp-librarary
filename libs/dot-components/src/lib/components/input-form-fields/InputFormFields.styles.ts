import styled, { css } from 'styled-components';
import { Theme, TextField, InputAdornment } from '@material-ui/core';
import { InputTextProps } from './InputFormFields.propTypes';

export const rootClassName = 'dot-text-field';
export const rootSelectClassName = 'dot-select-field';
export const warningClassName = 'dot-warning';
export const adornmentIconClassName = 'dot-adornment-icon';

export const StyledAdornment = styled(InputAdornment)`
  .dot-icon {
    font-size: 24px;
    height: 24px;
    padding: 0;
    width: 24px;
  }
`;

export const StyledTextField = styled(TextField)<InputTextProps>`
  ${({ theme }: { theme: Theme }) => css`
    &.${rootClassName} {
      .MuiOutlinedInput-input {
      padding: ${({ startIcon }: InputTextProps) => (startIcon ? `${theme.spacing(2.25, 1.5, 2.25, 0)}` : `${theme.spacing(2.25, 1.5)}`)}; 
      }
    }
    &.${rootSelectClassName}, &.${rootClassName} {
      .MuiSelect-select:focus {
        background-color: transparent;
      }
      .Mui-error {
        .${adornmentIconClassName} {
          color: ${theme.palette.error[500]};
        }
      }
      .MuiSelect-icon {
        right: ${({ endIcon }: InputTextProps) => (endIcon ? '44px' : '12px')};
      }
      &.${warningClassName} {
        .MuiOutlinedInput-notchedOutline {
          border-color: ${theme.palette.warning[500]};
      }
      .MuiInputLabel-outlined.MuiInputLabel-shrink {
        color: ${theme.palette.grey[700]};
      }
      .${adornmentIconClassName} {
          color: ${theme.palette.warning[500]};
        }
      }
      .MuiOutlinedInput-adornedStart {
        padding-left: ${theme.spacing(1.5)}px;
      }
      .MuiOutlinedInput-adornedEnd {
        padding-right: ${theme.spacing(1.5)}px;
      }
      .MuiFormHelperText-root {
        font-size: ${theme.typography.body2.fontSize}px;
        margin: ${theme.spacing(0, 0, 0, 2)};
        display: flex;
        align-items: flex-end;
        &:not(.Mui-error) {
          color: ${theme.palette.grey[700]};
        }
    }
`}
`;
