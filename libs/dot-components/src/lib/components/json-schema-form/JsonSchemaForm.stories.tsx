import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { DotJsonSchemaForm, JsonSchemaFormProps } from './JsonSchemaForm';
import { schemaSet } from './JsonSchemaForm.stories.data';

export default {
  title: 'Experimental/JSON Schema Form',
  component: DotJsonSchemaForm,
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

export const Default: Story<JsonSchemaFormProps<unknown>> = (args) => (
  <DotJsonSchemaForm {...args} />
);
