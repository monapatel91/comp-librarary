import React from 'react';
import {
  DotActionToolbar,
  DotBreadcrumbs,
  DotDynamicForm,
} from '@digital-ai/dot-components';
import { JSONSchema6 } from 'json-schema';

import { StyledDemoDynamicForm, rootClassName } from './DemoDynamicForm.styles';
import { FormValidation } from 'react-jsonschema-form';

const DemoDynamicForm = () => {
  const formData = {
    firstName: 'First',
    middleName: 'Middle',
    lastName: 'Last',
  };

  const schema: JSONSchema6 = {
    properties: {
      firstName: {
        type: 'string',
        title: 'First Name',
        description: 'Your first name goes here',
        // autoFocus: true,
      },
      middleName: {
        type: 'string',
        title: 'Middle Name',
      },
      lastName: {
        type: 'string',
        title: 'Last Name',
      },
      username: {
        type: 'string',
        title: 'Username',
      },
      password: {
        type: 'string',
        title: 'Password',
        format: 'password',
        minLength: 6,
        maxLength: 15,
      },
      // randomOption: {
      // type: 'dot-autocomplete',
      // title: 'Random option',
      // options: [
      //   { title: 'Option 1' },
      //   { title: 'Option 2' },
      //   { title: 'Option 3' },
      //   { title: 'Option 4' },
      //   { title: 'Option 5' },
      // ],
      // minLength: {
      //   errorMessage: 'Pick at least 2 options',
      //   value: 2,
      // },
      // maxLength: {
      //   errorMessage: 'Maximum of 4 options allowed',
      //   value: 4,
      // },
      // },
      receive: {
        type: 'array',
        title: 'I would like to receive',
        uniqueItems: true,
        items: {
          type: 'string',
          enum: [
            'Notification of new releases',
            'Concert schedule information',
            'A free poster',
          ],
        },
        minItems: 2,
      },
      devType: {
        type: 'string',
        title: 'Dev Type',
        uniqueItems: true,
        items: {
          type: 'string',
          enum: ['', 'React Dev', 'Angular Dev', 'Other Dev'],
        },
      },
      //   superHero: {

      //   }
      //     controlType: 'dot-radio-group',
      //     controlProps: {
      //       id: 'superHero',
      //       name: 'superHero',
      //       groupLabel: 'Select Your Favorite Superhero',
      //       required: true,
      //       value: 'None',
      //       options: [
      //         { label: 'None', value: 'None' },
      //         { label: 'Batman', value: 'Batman' },
      //         { label: 'Superman', value: 'Superman' },
      //         { label: 'Spiderman', value: 'Spiderman' },
      //       ],
      //     } as RadioGroupProps,
      //   },
      isMandatory: {
        type: 'boolean',
        title: 'Is Mandatory',
      },
    },
    required: [
      'firstName',
      'lastName',
      'username',
      'password',
      'receive',
      'devType',
    ],
  };

  const validate: (formData: any, errors: FormValidation) => FormValidation = (
    data,
    errors
  ) => {
    // Examples of taken usernames to validate against
    const takenUsernames = ['username', 'john', 'mark'];
    if (takenUsernames.includes(data.username)) {
      errors.username.addError('Username is already taken');
    }

    if (!data.isMandatory) {
      errors.isMandatory.addError('Is Mandatory must be true');
    }

    return errors;
  };

  const handleSubmit = (data) => {
    console.log('***', data);
  };

  return (
    <StyledDemoDynamicForm className={rootClassName}>
      <DotActionToolbar>
        <DotBreadcrumbs items={[{ text: 'Demo Dynamic Form' }]} />
      </DotActionToolbar>

      <DotDynamicForm
        formData={formData}
        liveValidate
        schema={schema}
        uiSchema={{
          receive: {
            'ui:widget': 'checkboxes',
          },
          devType: {
            'ui:widget': 'select',
          },
        }}
        onChange={(event) => {
          console.log('*** onChange', event);
        }}
        onSubmit={handleSubmit}
        validate={validate}
      />
    </StyledDemoDynamicForm>
  );
};

export { DemoDynamicForm };
