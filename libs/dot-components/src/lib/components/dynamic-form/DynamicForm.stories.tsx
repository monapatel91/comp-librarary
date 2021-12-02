import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { DotDynamicForm, DynamicFormProps } from './DynamicForm';
import { getDynamicFormConfig } from './DynamicForm.stories.data';
import { StyledDynamicFormStory } from './DynamicForm.stories.styles';

export default {
  title: 'Experimental/DynamicForm',
  component: DotDynamicForm,
  decorators: [
    (DynamicFormStory) => (
      <StyledDynamicFormStory>
        <DynamicFormStory />
      </StyledDynamicFormStory>
    ),
  ],
  argTypes: {
    config: {
      defaultValue: getDynamicFormConfig(),
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
