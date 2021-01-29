import styled, { css } from 'styled-components';
import { TextField, InputAdornment } from '@material-ui/core';

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

export const StyledTextField = styled(TextField)`
  ${({ theme, InputProps }) => css`
    &.${rootClassName} {
      .MuiOutlinedInput-input {
      padding: ${
        InputProps.endAdornment
          ? `${theme.spacing(2.25, 1.5, 2.25, 0)}`
          : `${theme.spacing(2.25, 1.5)}`
      }; 
      }
      .MuiOutlinedInput-inputMarginDense {
        padding-top: ${theme.spacing(1.3)}px;
        padding-bottom: ${theme.spacing(1.3)}px;
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
        right: ${
          InputProps.endAdornment
            ? `${theme.spacing(5.5)}px`
            : `${theme.spacing(1.5)}px`
        };
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
