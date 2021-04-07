import styled, { css } from 'styled-components';
import { rootClassName as formGroupClass } from '../form-controls/FormControl.styles';
import { rootClassName as formControlLabelClass } from '../form-controls/FormControlLabel.styles';
import {
  rootClassName as textFieldClass,
  rootSelectClassName as selectFieldClass,
} from '../input-form-fields/InputFormFields.styles';
import { rootClassName as checkboxGroupClass } from '../checkbox/CheckboxGroup.styles';
import { groupClassName as radioGroupClass } from '../radio/RadioGroup.styles';

export const rootClassName = 'dot-form';

export const StyledForm = styled.form`
  ${({ theme }) => css`
    &.${rootClassName} {
      margin: ${theme.spacing(3, 0)};

      .${formGroupClass},
        .${formControlLabelClass},
        .${textFieldClass},
        .${selectFieldClass} {
        margin: ${theme.spacing(1, 0)};
      }

      .${checkboxGroupClass}, .${radioGroupClass} {
        .${formControlLabelClass} {
          margin: 0;
        }
      }
    }
  `}
`;
