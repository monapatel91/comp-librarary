import {
  checkIfHiddenControl,
  getControlValue,
  getInitialFormState,
} from './helpers';
import { getSampleConfig } from './sample';

describe('dynamic form helper functions', () => {
  const data = {
    firstName: {
      value: '123',
    },
  };

  describe('getControlValue', () => {
    it('should get correct value from data object', () => {
      const value = getControlValue<string>('firstName', data as never);
      expect(value).toBe(data.firstName.value);
    });
  });
  describe('checkIfHiddenControl', () => {
    const formData = {
      firstName: {
        value: 'firstName',
      },
      lastName: {
        value: 'lastName',
      },
    };

    it('should return false when hidden is false', () => {
      const isHidden = checkIfHiddenControl(false, formData as never);
      expect(isHidden).toBe(false);
    });
    it('should return false when hidden is undefined', () => {
      const isHidden = checkIfHiddenControl(undefined, formData as never);
      expect(isHidden).toBe(false);
    });
    it('should return false when hidden condition does not match', () => {
      const isHidden = checkIfHiddenControl(
        [{ controlName: 'firstName', controlValue: '123' }],
        formData as never
      );
      expect(isHidden).toBe(false);
    });
    it('should return true when hidden is set to true', () => {
      const isHidden = checkIfHiddenControl(true, formData as never);
      expect(isHidden).toBe(true);
    });
    it('should return true when hidden condition does satisfy all cases', () => {
      const isHidden = checkIfHiddenControl(
        [
          { controlName: 'firstName', controlValue: formData.firstName.value },
          { controlName: 'lastName', controlValue: formData.lastName.value },
        ],
        formData as never
      );
      expect(isHidden).toBe(true);
    });
  });
  describe('getInitialFormState', () => {
    it('should return correct initial state based on a given form config with live validation', () => {
      const sampleConfig = getSampleConfig();
      const initialFormState = getInitialFormState(sampleConfig, true);
      expect(initialFormState).toEqual({
        data: {
          firstName: {
            errorMessage: null,
            isTouched: true,
            isValid: true,
            value: 'my first name',
          },
          hasMiddleName: {
            errorMessage: null,
            isTouched: true,
            isValid: true,
            value: 'no',
          },
          isMandatory: {
            errorMessage: null,
            isTouched: false,
            isValid: true,
            value: null,
          },
          middleName: {
            errorMessage: null,
            isTouched: false,
            isValid: true,
            value: null,
          },
          randomOption: {
            errorMessage: null,
            isTouched: false,
            isValid: false,
            value: [
              {
                title: 'Option 1',
              },
            ],
          },
        },
        isValid: false,
      });
    });
    it('should return correct initial state based on a given form config without live validation', () => {
      const sampleConfig = getSampleConfig();
      const initialFormState = getInitialFormState(sampleConfig, false);
      expect(initialFormState).toEqual({
        data: {
          firstName: {
            errorMessage: null,
            isTouched: false,
            isValid: false,
            value: 'my first name',
          },
          hasMiddleName: {
            errorMessage: null,
            isTouched: false,
            isValid: true,
            value: 'no',
          },
          isMandatory: {
            errorMessage: null,
            isTouched: false,
            isValid: true,
            value: null,
          },
          middleName: {
            errorMessage: null,
            isTouched: false,
            isValid: true,
            value: null,
          },
          randomOption: {
            errorMessage: null,
            isTouched: false,
            isValid: false,
            value: [
              {
                title: 'Option 1',
              },
            ],
          },
        },
        isValid: false,
      });
    });
  });
});
