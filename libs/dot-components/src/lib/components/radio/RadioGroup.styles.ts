import { FormControl, RadioGroup } from '@material-ui/core';
import styled, { css } from 'styled-components';
import { rootClassName as formControlLabelClass } from '../form-controls/FormControlLabel.styles';

export const groupClassName = 'dot-radio-group';
export const rootClassName = 'dot-radio-control';
export const groupLabelClassName = 'dot-radio-group-label';
export const startAdornmentClassName = 'dot-start-adornment';
export const endAdornmentClassName = 'dot-end-adornment';
export const placementClassName = 'dot-';

export const StyledRadioGroup = styled(RadioGroup)`
  ${({ theme }) => css`{
    &.${groupClassName} {
      padding-left: ${theme.spacing(2.5)}px;

      .${formControlLabelClass} {
        margin: 0;
      }
    }
  `}
`;

export const StyledFormControl = styled(FormControl)`
  &.${rootClassName} {
    .MuiFormLabel-root {
      width: 100%;
      line-height: 24px;
      margin-bottom: 4px;
      display: flex;
      align-items: center;
      .${endAdornmentClassName} {
        padding-left: 4px;
      }
      .${startAdornmentClassName} {
        padding-right: 4px;
      }
    }
    &.${`${placementClassName}start`} {
      .MuiFormHelperText-root,
      .MuiFormLabel-root {
        display: flex;
        flex-direction: row-reverse;
      }
    }
    &.${`${placementClassName}bottom`} {
      .MuiFormHelperText-root,
      .MuiFormLabel-root {
        display: flex;
        justify-content: center;
      }
    }
  }
` as typeof FormControl;
