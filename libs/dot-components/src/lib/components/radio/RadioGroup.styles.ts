import { RadioGroup } from '@mui/material';
import styled, { css } from 'styled-components';
import { rootClassName as formControlLabelClass } from '../form-controls/FormControlLabel.styles';

export const rootClassName = 'dot-radio-group';
export const wrapperClassName = 'dot-radio-group-wrapper';

export const StyledRadioGroupWrapper = styled.div`
  &.${wrapperClassName} {
    .MuiFormControl-root {
      width: 100%;
    }
    .MuiFormLabel-root {
      display: inline;
      width: 100%;
    }
  }
`;

export const StyledRadioGroup = styled(RadioGroup)`
  ${({ theme }) => css`{
    &.${rootClassName} {
      padding-left: ${theme.spacing(2.5)}px;

      .${formControlLabelClass} {
        margin: 0;
      }
    }
  `}
`;
