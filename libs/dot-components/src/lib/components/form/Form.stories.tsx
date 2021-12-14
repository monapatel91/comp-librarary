import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { DotInputText } from '../input-form-fields/InputText';
import { DotForm, FormProps } from './Form';

export default {
  title: 'Components/Form',
  component: DotForm,
  argTypes: {
    children: {
      defaultValue: (
        <>
          <DotInputText id="firstName" label="First Name" name="firstName" />
          <DotInputText id="lastName" label="Last Name" name="lastName" />
        </>
      ),
    },
  },
} as Meta;

export const Default: Story<FormProps> = (args) => <DotForm {...args} />;
