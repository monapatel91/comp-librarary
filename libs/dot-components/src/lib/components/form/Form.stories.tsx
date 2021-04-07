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
          <DotInputText id="firstName" name="firstName" label="First Name" />
          <DotInputText id="lastName" name="lastName" label="Last Name" />
        </>
      ),
    },
  },
} as Meta;

export const Default: Story<FormProps> = (args) => <DotForm {...args} />;
