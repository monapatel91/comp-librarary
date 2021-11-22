import {
  DynamicFormConfig,
  DynamicFormControl,
  DynamicFormOutputData,
  DynamicFormState,
  DynamicFormStateData,
  ControlCondition,
} from '../models';
import { DATA_CONTROLS } from '../constants';

export const getControlValue = <T extends unknown>(
  controlName: string,
  data: DynamicFormStateData
): T => {
  return controlName in data && (data[controlName].value as T);
};

export const getOutputFormData = (formState: DynamicFormState) => {
  const outputData: DynamicFormOutputData = {};
  for (const dataKey in formState.data) {
    outputData[dataKey] = formState.data[dataKey].value;
  }
  return outputData;
};

export const checkIfHiddenControl = (
  hidden: ControlCondition,
  formValues: DynamicFormOutputData
) => {
  if (!hidden) return false;
  if (typeof hidden === 'boolean') return hidden;
  try {
    return hidden(formValues);
  } catch (e) {
    return false;
  }
};

export const checkIfDisabledControl = (
  disabled: ControlCondition,
  formValues: DynamicFormOutputData
) => {
  if (!disabled) return false;
  if (typeof disabled === 'boolean') return disabled;
  try {
    return disabled(formValues);
  } catch (e) {
    return false;
  }
};

export const getFormDataFromInitialValues = (config: DynamicFormConfig) => {
  const formValues: DynamicFormOutputData = {};
  config.controls.forEach(
    ({ controlName, initialValue, controlType }: DynamicFormControl) => {
      // Skip non-data controls (ignore buttons and other non-relevant elements)
      // or hidden elements
      if (!DATA_CONTROLS.includes(controlType)) return;
      formValues[controlName] = initialValue ? initialValue : undefined;
    }
  );
  return formValues;
};
