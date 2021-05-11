import {
  ApplicationFormType,
  FormFieldValidation,
  SourceControl,
  TicketSystem,
} from '@digital-ai/dot-components';

export const INITIAL_VALIDATION_DATA: FormFieldValidation = {
  errorMessage: '',
  isValid: false,
  isTouched: false,
};

export const INITIAL_FORM_DATA: ApplicationFormType = {
  activeSourceControl: {
    ...INITIAL_VALIDATION_DATA,
    value: {} as SourceControl,
  },
  applicationName: {
    ...INITIAL_VALIDATION_DATA,
    value: '',
  },
  createAnother: {
    ...INITIAL_VALIDATION_DATA,
    isValid: true,
    value: false,
  },
  sourceControls: {
    ...INITIAL_VALIDATION_DATA,
    value: [],
  },
  ticketSystem: {
    ...INITIAL_VALIDATION_DATA,
    value: {} as TicketSystem,
  },
};
