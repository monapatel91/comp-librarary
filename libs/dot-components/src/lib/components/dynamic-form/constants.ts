/* Array of control types for which we manage form state */
import { DynamicFormControlType, DynamicFormStateItem } from './models';

export const DATA_CONTROLS: DynamicFormControlType[] = [
  'dot-autocomplete',
  'dot-input-text',
  'dot-input-select',
  'dot-checkbox',
  'dot-checkbox-group',
  'dot-radio-group',
];

/* Array of control types for which don't have error state so validation doesn't make any sense */
export const DATA_CONTROLS_WITHOUT_VALIDATION: DynamicFormControlType[] = [
  'dot-checkbox',
];

export const INITIAL_STATE_ITEM: DynamicFormStateItem = {
  value: null,
  isValid: false,
  isTouched: false,
  errorMessage: null,
};
