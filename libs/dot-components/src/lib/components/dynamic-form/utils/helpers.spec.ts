import {
  checkIfHiddenControl,
  getControlValue,
  getFormDataFromInitialValues,
  getOutputFormData,
} from './helpers';
import { DynamicFormOutputData } from '../models';
import { getSampleFormState } from '../sample';
import { getDynamicFormConfig } from '../DynamicForm.stories.data';

describe('helper functions', () => {
  const data = {
    firstName: {
      value: '123',
    },
  };
  describe('checkIfHiddenControl', () => {
    const formValues = {
      firstName: 'firstName',
      lastName: 'lastName',
    };

    it('should return false when hidden is false', () => {
      const isHidden = checkIfHiddenControl(false, formValues);
      expect(isHidden).toBe(false);
    });
    it('should return false when hidden is undefined', () => {
      const isHidden = checkIfHiddenControl(undefined, formValues);
      expect(isHidden).toBe(false);
    });
    it('should return false when hidden condition does not match', () => {
      const isHidden = checkIfHiddenControl(
        (formValues: DynamicFormOutputData) =>
          formValues['firstName'] === '123',
        formValues
      );
      expect(isHidden).toBe(false);
    });
    it('should return false when exception occurs', () => {
      const isHidden = checkIfHiddenControl(
        (_formValues: DynamicFormOutputData) => {
          throw new Error();
        },
        formValues
      );
      expect(isHidden).toBe(false);
    });
    it('should return true when hidden is set to true', () => {
      const isHidden = checkIfHiddenControl(true, formValues);
      expect(isHidden).toBe(true);
    });
    it('should return true when hidden condition does satisfy all cases', () => {
      const isHidden = checkIfHiddenControl(
        (formValues: DynamicFormOutputData) =>
          formValues['firstName'] === 'firstName' &&
          formValues['lastName'] === 'lastName',
        formValues
      );
      expect(isHidden).toBe(true);
    });
  });
  describe('getControlValue', () => {
    it('should get correct value from data object', () => {
      const value = getControlValue<string>('firstName', data as never);
      expect(value).toBe(data.firstName.value);
    });
  });
  describe('getOutputFormData', () => {
    it('should return correct output data', () => {
      const formData = getOutputFormData(getSampleFormState());
      expect(formData).toEqual({
        customUserType: null,
        firstName: null,
        gender: 'male',
        hasVehicle: 'no',
        interests: [
          {
            title: 'Breathing',
          },
        ],
        isAccountActive: null,
        lastName: null,
        password: null,
        receive: null,
        terms: null,
        username: null,
        userType: 'Basic user',
        vehicleModel: null,
      });
    });
  });
  describe('getFormDataFromInitialValues', () => {
    it('should return object with correct initial values', () => {
      const initialValues = getFormDataFromInitialValues(
        getDynamicFormConfig()
      );
      expect(initialValues).toEqual({
        firstName: undefined,
        lastName: undefined,
        gender: 'male',
        username: undefined,
        password: undefined,
        userType: 'Basic user',
        customUserType: undefined,
        interests: [{ title: 'Breathing' }],
        hasVehicle: 'no',
        vehicleModel: undefined,
        receive: undefined,
        isAccountActive: undefined,
        undefined: undefined,
        terms: undefined,
      });
    });
  });
});
