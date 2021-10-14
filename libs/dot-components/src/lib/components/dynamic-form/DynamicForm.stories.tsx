import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { DotDynamicForm, DynamicFormProps } from './DynamicForm';
import { schemaSet } from './DynamicForm.stories.data';

export default {
  title: 'Components/Dynamic Form',
  component: DotDynamicForm,
  argTypes: {
    schema: {
      defaultValue: schemaSet[1].schema,
    },
    formData: {
      defaultValue: {
        database: 'custom database',
        password: '***password***',
      },
    },
    onSubmit: {
      action: 'submitted',
    },
  },
} as Meta;

export const Default: Story<DynamicFormProps> = (args) => (
  <DotDynamicForm {...args} />
);
