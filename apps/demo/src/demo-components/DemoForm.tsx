import React, { ChangeEvent } from 'react';
import { useState, FormEvent } from 'react';
import {
  CheckboxProps,
  DotButton,
  DotCheckboxGroup,
  DotForm,
  DotInputSelect,
  DotInputText,
  DotRadioGroup,
  DotSwitch,
  useDotSnackbarContext,
  DotActionToolbar,
  DotBreadcrumbs,
} from '@digital-ai/dot-components';

interface FormState {
  firstName: string;
  lastName: string;
  devType: '' | 'React Dev' | 'Angular Dev' | 'Other Dev';
  superHero: string;
  favTrait: Array<CheckboxProps>;
  childhoodHero: boolean;
  cartoonComments: string;
  commentField: string;
}

interface ErrorState {
  [key: string]: string;
}

const initialFormState: FormState = {
  firstName: '',
  lastName: '',
  devType: '',
  superHero: '',
  favTrait: [],
  childhoodHero: false,
  cartoonComments: '',
  commentField: '',
};

export const DemoForm = () => {
  const [formValues, setFormValues] = useState<FormState>(initialFormState);
  const [errors, updateErrors] = useState<ErrorState>({});
  const { enqueueMessage } = useDotSnackbarContext();

  const {
    firstName,
    lastName,
    devType,
    superHero,
    favTrait,
    childhoodHero,
    cartoonComments,
    commentField,
  } = formValues;

  const resetForm = () => {
    setFormValues(initialFormState);
  };

  const handleOnSubmit = (event: FormEvent) => {
    event.preventDefault();
    formValidation();
  };

  const formValidation = () => {
    let hasError = false;
    const formErrors: ErrorState = {};

    Object.keys(initialFormState).forEach((keyVal: keyof FormState) => {
      // if field is blank, throw an error
      if (formValues[keyVal] === '') {
        hasError = true;
        formErrors[keyVal] = `Must not be blank`;
      }
    });

    if (!hasError) {
      const valOfForm = formValues;
      enqueueMessage(
        `Great! Successfully Submitted form! ${JSON.stringify(valOfForm)}`,
        'success'
      );
      updateErrors({});
      resetForm();
    } else {
      updateErrors(formErrors);
      enqueueMessage('There are errors!', 'error');
    }
  };

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const name = event.target.name;
    const value = event.target.value;

    setFormValues((formValues) => ({
      ...formValues,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (values: Array<CheckboxProps>) => {
    setFormValues((formValues) => ({
      ...formValues,
      favTrait: values,
    }));
  };

  return (
    <>
      <DotActionToolbar>
        <DotBreadcrumbs items={[{ text: 'Demo Form' }]} />
      </DotActionToolbar>

      <div style={{ margin: 16 }}>
        <DotForm onSubmit={handleOnSubmit}>
          <>
            <DotInputText
              helperText={
                errors.firstName
                  ? errors.firstName
                  : 'Your First Name Goes Here'
              }
              id="firstName"
              label="First Name"
              name="firstName"
              required
              size="small"
              value={firstName}
              onChange={handleChange}
              error={errors.firstName && errors.firstName !== ''}
            />

            <DotInputText
              helperText={errors.lastName}
              id="lastName"
              label="Last Name"
              name="lastName"
              required
              size="small"
              value={lastName}
              onChange={handleChange}
              error={errors.lastName && errors.lastName !== ''}
            />

            <DotInputSelect
              id="devType"
              label="Dev Type"
              name="devType"
              required
              size="small"
              value={devType}
              onChange={handleChange}
              options={['', 'React Dev', 'Angular Dev', 'Other Dev']}
              error={errors.devType && errors.devType !== ''}
            />

            <DotRadioGroup
              id="superHero"
              name="superHero"
              value={superHero}
              groupLabel="Select Your Favorite Superhero"
              required
              onChange={handleChange}
              options={[
                { label: 'None', value: 'None' },
                { label: 'Batman', value: 'Batman' },
                { label: 'Superman', value: 'Superman' },
                { label: 'Spiderman', value: 'Spiderman' },
              ]}
              error={errors.superHero && errors.superHero !== ''}
            />

            <DotCheckboxGroup
              defaultValues={favTrait}
              groupLabel="Select Reason:"
              required
              onChange={(_event, values) => handleCheckboxChange(values)}
              options={[
                { label: 'None', value: 'None' },
                { label: 'Coolest Outfit', value: 'Coolest Outfit' },
                { label: 'Strongest', value: 'Strongest' },
                { label: 'Best Superpower', value: 'Best Superpower' },
                { label: 'Bravest', value: 'Bravest' },
              ]}
              error={errors.favTrait && errors.favTrait !== ''}
            />

            <DotSwitch
              checked={childhoodHero}
              label="Do you watch their cartoon?"
              onChange={(event) =>
                setFormValues((formValues) => ({
                  ...formValues,
                  childhoodHero: event.target.checked,
                }))
              }
            />

            <DotInputText
              disabled={!childhoodHero}
              id="cartoonComments"
              label="Cartoon Comments"
              name="cartoonComments"
              size="small"
              value={cartoonComments}
              onChange={(event) => handleChange(event)}
            />

            <DotInputText
              id="commentField"
              label="Comment Field"
              name="commentField"
              size="small"
              multiline={true}
              rows={4}
              value={commentField}
              onChange={handleChange}
            />

            <DotButton type="outlined" onClick={resetForm}>
              Clear
            </DotButton>
            <DotButton isSubmit={true} onClick={formValidation}>
              Submit
            </DotButton>
          </>
        </DotForm>
      </div>
    </>
  );
};
