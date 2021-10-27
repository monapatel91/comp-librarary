/* Array of control types for which we manage form state */
import { DynamicFormControlType, DynamicFormStateItem } from './models';

export const DATA_CONTROLS: DynamicFormControlType[] = [
  'dot-autocomplete',
  'dot-checkbox',
  'dot-checkbox-group',
  'dot-input-select',
  'dot-input-text',
  'dot-radio-group',
  'dot-switch',
];

/* Array of control types for which we don't have error state so validation doesn't make any sense */
export const DATA_CONTROLS_WITHOUT_VALIDATION: DynamicFormControlType[] = [
  'dot-checkbox',
  'dot-switch',
];

export const INITIAL_STATE_ITEM: DynamicFormStateItem = {
  errorMessage: null,
  isTouched: false,
  isValid: false,
  value: null,
};
