import React from 'react';
import {
  checkIfDisabledControl,
  checkIfHiddenControl,
  getControlValue,
  getFormDataFromInitialValues,
  getOutputFormData,
} from './helpers';
import {
  DynamicFormConfig,
  DynamicFormControl,
  DynamicFormOutputData,
  DynamicFormSectionProps,
} from '../models';
import { getSampleFormState } from '../sample';
import { getDynamicFormConfig } from '../DynamicForm.stories.data';
import { ButtonProps } from '../../button/Button';
import { InputTextProps } from '../../input-form-fields/InputText';

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

  describe('checkIfDisabledControl', () => {
    const formValues = {
      gender: 'male',
      username: 'jwayne',
    };

    it("should return false when 'disabled' argument is false", () => {
      const isDisabled = checkIfDisabledControl(false, formValues, true);
      expect(isDisabled).toBe(false);
    });
    it("should return false when 'disabled' argument is undefined", () => {
      const isDisabled = checkIfDisabledControl(undefined, formValues, true);
      expect(isDisabled).toBe(false);
    });
    it("should return false when 'disabled' condition does not match", () => {
      const isDisabled = checkIfDisabledControl(
        (formValues: DynamicFormOutputData) =>
          formValues['gender'] === 'female',
        formValues,
        true
      );
      expect(isDisabled).toBe(false);
    });
    it("should return true when 'disabled' argument is false", () => {
      const isDisabled = checkIfDisabledControl(true, formValues, true);
      expect(isDisabled).toBe(true);
    });
    it("should return true when 'disabled' condition does satisfy all cases", () => {
      const isDisabled = checkIfDisabledControl(
        (formValues: DynamicFormOutputData, isFormValid: boolean) =>
          formValues['gender'] === 'male' &&
          formValues['username'] === 'jwayne' &&
          isFormValid,
        formValues,
        true
      );
      expect(isDisabled).toBe(true);
    });
    it("should return false when 'disabled' function throws an error", () => {
      const isDisabled = checkIfDisabledControl(
        (_formValues: DynamicFormOutputData, _isFormValid: boolean) => {
          throw new Error();
        },
        formValues,
        true
      );
      expect(isDisabled).toBe(false);
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
        terms: false,
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

    describe('with form section control', () => {
      const firstNameControl: DynamicFormControl = {
        controlName: 'firstName',
        controlProps: {
          label: 'First name',
        } as InputTextProps,
        controlType: 'dot-input-text',
      };

      const buttonControl: DynamicFormControl = {
        controlName: 'btnTest',
        controlProps: {
          children: 'My button',
        } as ButtonProps,
        controlType: 'dot-button',
      };
      const getFormConfig = (
        formSectionControls: DynamicFormControl[]
      ): DynamicFormConfig => ({
        controls: [
          {
            controlType: 'dot-form-section',
            formSection: {
              FormSectionComponent: ({
                sectionControls,
              }: DynamicFormSectionProps) => {
                return <div>{sectionControls}</div>;
              },
              sectionControls: formSectionControls,
            },
          },
        ],
      });

      it('should return object with undefined value for data control without initial value', () => {
        const config = getFormConfig([firstNameControl]);
        const initialValues = getFormDataFromInitialValues(config);
        expect(initialValues).toEqual({ firstName: undefined });
      });

      it('should return object with correct initial value for data control with defined initial value', () => {
        const initialValue = 'John';
        const customControl: DynamicFormControl = {
          ...firstNameControl,
          initialValue,
        };
        const config = getFormConfig([customControl]);
        const initialValues = getFormDataFromInitialValues(config);
        expect(initialValues).toEqual({ firstName: initialValue });
      });

      it('should return object without non-data controls', () => {
        const config = getFormConfig([buttonControl]);
        const initialValues = getFormDataFromInitialValues(config);
        expect(initialValues).toEqual({});
      });
    });
  });
});
