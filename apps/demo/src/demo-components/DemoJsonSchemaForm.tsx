import React from 'react';
import {
  DotActionToolbar,
  DotBreadcrumbs,
  DotJsonSchemaForm,
} from '@digital-ai/dot-components';
import { JSONSchema6 } from 'json-schema';

import {
  StyledDemoJsonSchemaForm,
  rootClassName,
} from './DemoJsonSchemaForm.styles';
import { FormValidation } from 'react-jsonschema-form';

const DemoJsonSchemaForm = () => {
  const formData = {
    firstName: 'First',
    middleName: 'Middle',
    lastName: 'Last',
    superHero: 'Batman',
  };

  const schema: JSONSchema6 = {
    properties: {
      firstName: {
        type: 'string',
        title: 'First Name',
        description: 'Your first name goes here',
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
          anyOf: [
            { title: 'Notification of new releases', const: 'releases' },
            { title: 'Concert schedule information', const: 'concerts' },
            { title: 'A free poster', const: 'poster' },
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
      superHero: {
        type: 'string',
        title: 'Select Your Favorite Superhero',
        uniqueItems: true,
        items: {
          type: 'string',
          enum: ['None', 'Batman', 'Superman', 'Spiderman'],
        },
      },
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
      'superHero',
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
    <StyledDemoJsonSchemaForm className={rootClassName}>
      <DotActionToolbar>
        <DotBreadcrumbs items={[{ text: 'Demo Dynamic Form' }]} />
      </DotActionToolbar>

      <DotJsonSchemaForm
        disabled={false}
        formData={formData}
        liveValidate
        schema={schema}
        uiSchema={{
          firstName: {
            'ui:autofocus': true,
          },
          receive: {
            'ui:widget': 'checkboxes',
          },
          devType: {
            'ui:widget': 'select',
          },
          superHero: {
            'ui:widget': 'radio',
          },
        }}
        onBlur={(event) => console.log('*** onBlur', event)}
        onChange={(event) => {
          console.log('*** onChange', event);
        }}
        onError={(event) => console.log('*** onError', event)}
        onFocus={(event) => console.log('*** onFocus', event)}
        onSubmit={handleSubmit}
        validate={validate}
      />
    </StyledDemoJsonSchemaForm>
  );
};

export { DemoJsonSchemaForm };
