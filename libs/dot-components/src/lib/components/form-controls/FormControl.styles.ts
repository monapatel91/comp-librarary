import { FormControl } from '@mui/material';
import styled, { css } from 'styled-components';

export const rootClassName = 'dot-form-group';
export const groupLabelClassName = 'dot-form-group-label';
export const startAdornmentClassName = 'dot-start-adornment';
export const endAdornmentClassName = 'dot-end-adornment';

export const StyledFormControl = styled(FormControl)`
  ${({ theme }) => css`
    &.${rootClassName} {
      .MuiFormLabel-root {
        width: 100%;
        line-height: 24px;
        margin-bottom: ${theme.spacing(0.5)}px;
        display: flex;
        align-items: center;
        .${endAdornmentClassName} {
          padding-left: ${theme.spacing(0.5)}px;
        }
        .${startAdornmentClassName} {
          padding-right: ${theme.spacing(0.5)}px;
        }
      }
      &.dot-start {
        .MuiFormHelperText-root,
        .MuiFormLabel-root {
          display: flex;
          flex-direction: row-reverse;
        }
      }
      &.dot-bottom {
        .MuiFormHelperText-root,
        .MuiFormLabel-root {
          display: flex;
          justify-content: center;
        }
      }
    }
  `}
` as typeof FormControl;
