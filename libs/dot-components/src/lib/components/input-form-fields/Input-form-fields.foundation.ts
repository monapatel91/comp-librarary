import { ReactNode } from 'react';
import styled, { css } from 'styled-components';
import { Theme, TextField } from '@material-ui/core';
import { CommonProps } from '../CommonProps';

export type inputMarginOptions = 'dense' | 'none' | 'normal';
export type adornmentPosition = 'start' | 'end';

export interface InputTextProps extends CommonProps {
  /** This prop helps users to fill forms faster */
  autoFocus?: boolean;
  /** Re */
  adornmentPosition?: adornmentPosition;
  /** If true, the label will be displayed in an error state. */
  error?: boolean;
  /** If true, the input will take up the full width of its container */
  fullWidth?: boolean;
  /** The helper text content. */
  helperText?: string;
  /** The helper text icon id */
  helperTextIconId?: string;
  /** id to identify the element, also used to create label "for" and helper text id attribute
   * values while it's optional, it is considered required for accessiblity best practice.
   */
  id?: string
  /** The label content. */
  label?: string;
  /** If dense or normal, will adjust vertical spacing of this and contained components. */
  margin?: inputMarginOptions;
  /** The name of input element */
  name: string;
  /** A function that should be executed when the value of the input changes */
  onChange?: (value: string) => void;
  /** If true, the label is displayed as required and the input element` will be required. */
  required: boolean;
  /** Type of input should be a valid HTML 5 input type
   * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#input_types
   */
  type?: string;
  /** If true, the label will be displayed in an warning state. */
  warning?: boolean;
}

export const rootClassName: string = 'dot-text-field';
export const warningClassName: string = 'dot-warning';

// styled components
export const StyletextField = styled(TextField)<InputTextProps>`
  ${({ theme }: { theme: Theme }) => css`
  &.${rootClassName} {
    .Mui-error {
      .helper-text-icon {
          color: ${theme.palette.error[500]};
      }
    }
    &.${warningClassName} {
      .MuiOutlinedInput-notchedOutline {
        border-color: ${theme.palette.warning[500]};
    }
    }
    .MuiInputBase-input {
      padding: ${theme.spacing(2.25, 2)};
    }
    .MuiFormHelperText-root {
      font-size: ${theme.typography.body2.fontSize}px;
      margin: ${theme.spacing(0, 0, 0, 2)};
      display: flex;
      align-items: flex-end;
      &:not(.Mui-error) {
        color: ${theme.palette.grey[400]};
      }
    .helper-text-icon {
      font-size: 14px;
      height: 14px;
      padding: 0;
      margin-right: ${theme.spacing(0.5)}px;
      width: 14px;
      }
  }
`}
`;
