import React from 'react';
import { DynamicFormState } from './models';

export const getSampleFormState = (): DynamicFormState => ({
  data: {
    customUserType: {
      errorMessage: null,
      hidden: expect.any(Function),
      isTouched: false,
      isValid: false,
      value: null,
    },
    firstName: {
      errorMessage: null,
      isTouched: false,
      isValid: false,
      value: null,
    },
    gender: {
      errorMessage: null,
      isTouched: true,
      isValid: true,
      value: 'male',
    },
    hasVehicle: {
      errorMessage: null,
      isTouched: true,
      isValid: true,
      value: 'no',
    },
    interests: {
      errorMessage: 'Pick at least 2 options',
      isTouched: true,
      isValid: false,
      value: [
        {
          title: 'Breathing',
        },
      ],
    },
    isAccountActive: {
      errorMessage: null,
      isTouched: false,
      isValid: true,
      value: null,
    },
    lastName: {
      errorMessage: null,
      isTouched: false,
      isValid: false,
      value: null,
    },
    password: {
      errorMessage: null,
      isTouched: false,
      isValid: false,
      value: null,
    },
    receive: {
      errorMessage: null,
      isTouched: false,
      isValid: false,
      value: null,
    },
    terms: {
      errorMessage: null,
      isTouched:true,
      isValid: true,
      value: false,
    },
    userType: {
      errorMessage: null,
      isTouched: true,
      isValid: true,
      value: 'Basic user',
    },
    username: {
      errorMessage: null,
      isTouched: false,
      isValid: false,
      value: null,
    },
    vehicleModel: {
      errorMessage: null,
      isTouched: false,
      isValid: true,
      value: null,
    },
  },
  isValid: false,
});
