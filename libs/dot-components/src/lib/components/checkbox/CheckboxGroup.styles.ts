import styled, { css } from 'styled-components';
import { rootClassName as formControlLabelClass } from '../form-controls/FormControlLabel.styles';

export const rootClassName = 'dot-checkbox-group';
export const wrapperClassName = 'dot-checkbox-group-wrapper';
export const checkboxListClassName = 'dot-checkbox-list';
export const checkboxListItemClassName = 'dot-checkbox-list-item';

export const StyledCheckboxGroup = styled.div`
  ${({ theme }) => css`{
    &.${wrapperClassName} {
      .${rootClassName} {
        width: 100%;
      }

      .MuiFormLabel-root {
        display: inline;
        width: 100%;
      }

      .${checkboxListClassName} {
        list-style: none;
        margin-top: 0;
        padding-left: ${theme.spacing(2.5)}px;

        .${formControlLabelClass} {
          margin: 0;
        }
      }
    }
  `}
`;
