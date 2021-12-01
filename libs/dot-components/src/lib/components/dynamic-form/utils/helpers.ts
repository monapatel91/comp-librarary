import {
  ControlCondition,
  DisabledControlCondition,
  DynamicFormConfig,
  DynamicFormControl,
  DynamicFormOutputData,
  DynamicFormState,
  DynamicFormStateData,
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
  disabled: DisabledControlCondition,
  formValues: DynamicFormOutputData,
  isFormValid: boolean
) => {
  if (!disabled) return false;
  if (typeof disabled === 'boolean') return disabled;
  try {
    return disabled(formValues, isFormValid);
  } catch (e) {
    return false;
  }
};

const getInitialValueFromControl = ({
  controlType,
  initialValue,
}: DynamicFormControl) => {
  // Skip non-data controls (ignore buttons and other non-relevant elements)
  // or hidden elements
  if (!DATA_CONTROLS.includes(controlType)) return;
  return initialValue ? initialValue : undefined;
};

export const getFormDataFromInitialValues = (config: DynamicFormConfig) => {
  const formValues: DynamicFormOutputData = {};
  config.controls.forEach((control: DynamicFormControl) => {
    const { controlName, formSection, controlType } = control;
    // Check if there are section controls and grab initial values from those
    if (formSection && formSection.sectionControls) {
      formSection.sectionControls.forEach(
        (formSectionControl: DynamicFormControl) => {
          const {
            controlName: sectionControlName,
            controlType: sectionControlType,
          } = formSectionControl;
          if (!DATA_CONTROLS.includes(sectionControlType)) return;
          const sectionControlInitialValue =
            getInitialValueFromControl(formSectionControl);
          formValues[sectionControlName] = sectionControlInitialValue
            ? sectionControlInitialValue
            : undefined;
        }
      );
    }
    if (!DATA_CONTROLS.includes(controlType)) return;
    const initialValue = getInitialValueFromControl(control);
    formValues[controlName] = initialValue ? initialValue : undefined;
  });
  return formValues;
};
