import {
  DynamicFormConfig,
  DynamicFormControl,
  DynamicFormOutputData,
  DynamicFormState,
  DynamicFormStateData,
  HiddenControl,
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
  hidden: HiddenControl,
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
