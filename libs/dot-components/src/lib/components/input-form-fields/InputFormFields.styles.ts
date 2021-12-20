import styled, { css } from 'styled-components';
import { TextField, InputAdornment } from '@mui/material';
import { agilityGreen } from '../../theme-provider/colors/light-theme-colors';

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
      .MuiInputBase-root {
        background: ${
          theme.palette.product === 'agility' && theme.palette.layer.n0
        }
      }
      .MuiInputBase-input {
        box-sizing: content-box;
      }
      .MuiOutlinedInput-notchedOutline {
        border-color: ${
          theme.palette.product === 'agility' && theme.palette.layer.n100
        }
      }
      .MuiOutlinedInput-input {
        padding: ${
          InputProps.startAdornment ? `18px 12px 18px 0px` : `18px 12px`
        };
      }
      .MuiOutlinedInput-inputMarginDense {
        padding-top: 10.5px;
        padding-bottom: 10.5px;
      }
      .MuiOutlinedInput-inputMultiline {
        padding: 0;
      }
    }
    &.${rootSelectClassName}, &.${rootClassName} {
      .dot-adornment-icon .dot-icon i {
        margin-top: -2px;
      }
      .MuiFormLabel-root.Mui-focused {
        color: ${
          theme.palette.product === 'agility' && theme.palette.layer.n700
        }
      }
      select.dot-select {
        background: ${
          theme.palette.product === 'agility' && theme.palette.layer.n0
        };
      }
      .MuiSelect-select:focus {
        background-color: transparent;
      }
      .Mui-error .${adornmentIconClassName} {
          color: ${theme.palette.error[500]};
      }
      .MuiSelect-icon {
        right: ${InputProps.endAdornment ? `44px` : `12px`};
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
        padding-left: 12px;
      }
      .MuiOutlinedInput-adornedEnd {
        padding-right: 12px;
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
      .Mui-focused .MuiOutlinedInput-notchedOutline {
        border-color: ${theme.palette.product === 'agility' && agilityGreen};
      }
  `}
`;
