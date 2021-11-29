import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { DotDynamicForm, DynamicFormProps } from './DynamicForm';
import { dynamicFormConfig } from './DynamicForm.stories.data';

export default {
  title: 'Experimental/DynamicForm',
  component: DotDynamicForm,
  argTypes: {
    config: {
      defaultValue: dynamicFormConfig,
    },
    disabled: {
      defaultValue: false,
    },
    liveValidation: {
      defaultValue: false,
    },
    onChange: {
      action: 'form value changed',
    },
    onSubmit: {
      action: 'form is submitted...',
    },
  },
} as Meta;

export const Default: Story<DynamicFormProps> = (args) => (
  <DotDynamicForm {...args} />
);
