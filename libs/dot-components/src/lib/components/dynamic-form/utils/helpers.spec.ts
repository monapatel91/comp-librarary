import {
  checkIfHiddenControl,
  getControlValue,
  getFormDataFromInitialValues,
  getOutputFormData,
} from './helpers';
import { DynamicFormOutputData } from '../models';
import { getSampleConfig, getSampleFormState } from '../sample';

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
        firstName: 'my first name',
        gender: null,
        hasMiddleName: 'no',
        hasVehicle: 'no',
        isMandatory: null,
        middleName: null,
        randomOption: [
          {
            title: 'Option 1',
          },
        ],
        receive: null,
        receiveNewsletters: null,
        vehicleModel: null,
      });
    });
  });
  describe('getFormDataFromInitialValues', () => {
    it('should return object with correct initial values', () => {
      const initialValues = getFormDataFromInitialValues(getSampleConfig());
      expect(initialValues).toEqual({
        firstName: 'my first name',
        gender: undefined,
        hasMiddleName: 'no',
        hasVehicle: 'no',
        isMandatory: undefined,
        middleName: undefined,
        randomOption: [{ title: 'Option 1' }],
      });
    });
  });
});
