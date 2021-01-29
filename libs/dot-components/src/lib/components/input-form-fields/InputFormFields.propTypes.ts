import { Theme } from '@material-ui/core';
import { CommonProps } from '../CommonProps';

export type inputMarginOptions = 'dense' | 'none' | 'normal';

export interface InputTextProps extends CommonProps {
  /** This prop helps users to fill forms faster */
  autoFocus?: boolean;
  /** default value of the input element */
  defaultValue?: string;
  /** Icon placed after the children. */
  endIcon?: JSX.Element;
  /** If true, the label will be displayed in an error state. */
  error?: boolean;
  /** If true, the input will take up the full width of its container */
  fullWidth?: boolean;
  /** The helper text content. */
  helperText?: string;
  /**
   * id to identify the element, also used to create label "for" and helper text id attribute
   * values while it's optional, it is considered required for accessiblity best practice.
   */
  id?: string;
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
  /** Icon placed before the children. */
  startIcon?: JSX.Element;
  /**
   * Type of input should be a valid HTML 5 input type
   * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#input_types
   */
  type?: string;
  /** If true, the label will be displayed in an warning state. */
  warning?: boolean;
}

export interface StyledInputFormFieldsProps extends InputTextProps {
  theme: Theme;
}