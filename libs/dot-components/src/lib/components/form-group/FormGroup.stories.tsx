import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { DotFormGroup, FormGroupProps } from './FormGroup';
import { DotCheckbox } from '../checkbox/Checkbox';
import { DotInputText } from '../input-form-fields/InputText';

export default {
  title: 'Components/Form Group',
  component: DotFormGroup,
  argTypes: {
    row: { defaultValue: false },
  },
} as Meta;

export const Default: Story<FormGroupProps> = (args) => {
  return (
    <DotFormGroup {...args}>
      <DotInputText
        fullWidth={false}
        name="input-text"
        id="input-text"
        defaultValue="Superman"
      />
      <DotCheckbox name="item-1" label="item 1" value="item-1" />
      <DotCheckbox name="item-2" label="item 2" value="item-2" />
    </DotFormGroup>
  );
};
