import React from 'react';
import {
  DotActionToolbar,
  DotBreadcrumbs,
  DotDynamicForm,
} from '@digital-ai/dot-components';
import { JSONSchema6 } from 'json-schema';

import { StyledDemoDynamicForm, rootClassName } from './DemoDynamicForm.styles';

const DemoDynamicForm = () => {
  const schema: JSONSchema6 = {
    properties: {
      firstName: {
        type: 'string',
        title: 'First Name',
        // helperText: 'Your first name goes here',
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
        // customValidator: (value: string): FieldValidation => {
        //   // Examples of taken usernames to validate against
        //   const takenUsernames = ['username', 'john', 'mark'];
        //   if (takenUsernames.includes(value)) {
        //     return {
        //       isValid: false,
        //       errorMessage: 'Username is already taken',
        //     };
        //   }
        //   return {
        //     isValid: true,
        //     errorMessage: null,
        //   };
        // },
      },
      password: {
        type: 'string',
        title: 'Password',
        // type: 'password',
        // endIcon: <DotIcon iconId="visibility-off" />,
        // minLength: {
        //   errorMessage: 'Minimum of 6 characters required',
        //   value: 6,
        // },
        // maxLength: {
        //   errorMessage: 'Password cannot be longer than 15 characters',
        //   value: 15,
        // },
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
        type: 'object',
        // controlType: 'dot-checkbox-group',
        title: 'I would like to receive',
        properties: {
          releases: { type: 'boolean', title: 'Notification of new releases' },
          concerts: { type: 'boolean', title: 'Concert schedule information' },
          poster: { type: 'boolean', title: 'A free poster' },
        },
        uniqueItems: true,
        // validation: {
        //   isRequired: {
        //     errorMessage: 'Required field',
        //     value: true,
        //   },
        //   minLength: {
        //     errorMessage: 'Pick at least 2 options',
        //     value: 2,
        //   },
        // },
      },

      //   superheroes: {

      //   }
      //     controlType: 'dot-input-select',
      //     controlProps: {
      //       id: 'devType',
      //       label: 'Dev Type',
      //       name: 'devType',
      //       required: true,
      //       size: 'small',
      //       options: ['', 'React Dev', 'Angular Dev', 'Other Dev'],
      //     } as InputSelectProps,
      //     validation: {
      //       isRequired: {
      //         errorMessage: 'Required field',
      //         value: true,
      //       },
      //     },
      //   },
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
      //   isMandatory: {

      //   }
      //     controlType: 'dot-checkbox',
      //     controlProps: {
      //       label: 'Is Mandatory',
      //       className: 'is-mandatory',
      //     } as CheckboxProps,
      //     validation: {
      //       isRequired: {
      //         errorMessage: 'Required field',
      //         value: true,
      //       },
      //     },
      //   },
      //   {
      //     controlType: 'custom-element',
      //     customElement: <Divider className="divider" />,
      //   },
    },
    required: ['firstName', 'lastName', 'username', 'password'],
  };

  const handleSubmit = (formData) => {
    console.log('***', formData);
  };

  return (
    <StyledDemoDynamicForm className={rootClassName}>
      <DotActionToolbar>
        <DotBreadcrumbs items={[{ text: 'Demo Dynamic Form' }]} />
      </DotActionToolbar>

      <DotDynamicForm
        schema={schema}
        // onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </StyledDemoDynamicForm>
  );
};

export { DemoDynamicForm };
