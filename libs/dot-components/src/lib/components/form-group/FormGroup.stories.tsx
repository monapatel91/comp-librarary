import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { DotFormGroup, FormGroupProps } from './FromGroup';
import DotIcon from '../icon/Icon';
import { DotCheckbox } from '../checkbox/Checkbox';
import { DotInputText } from '../input-form-fields/InputText';

const iconOptions = [null, 'warning-solid', 'error-solid'];

export default {
  title: 'Components/Form Group',
  component: DotFormGroup,
  argTypes: {
    row: { defaultValue: false },
  },
} as Meta;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Default: Story<FormGroupProps> = (args: any) => {
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
