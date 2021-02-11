import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { DotCheckbox, CheckboxProps } from './Checkbox';
import { DotFormGroup, FormGroupProps } from '../form-group/FromGroup';
import DotIcon from '../icon/Icon';

const iconOptions = [null, 'warning-solid', 'error-solid'];

export default {
  title: 'Experimental/Checkbox',
  component: DotFormGroup,
  argTypes: {
    ariaLabel: { defaultValue: 'Accessibility for the win' },
    name: { defaultValue: 'dot-checkbox-group' },
    onChange: {
      action: 'clicked',
    },
    groupLabel: { defaultValue: 'Group of items' },
    endIcon: { control: { type: 'select', options: iconOptions } },
    startIcon: { control: { type: 'select', options: iconOptions } },
    checkboxes: {
      defaultValue: [{ label: 'Label 1-1' }, { label: 'Label 1-2' }],
    },
  },
} as Meta;

export const CheckboxFormGroup: Story<CheckboxProps> = (args: any) => {
  const {
    endIcon: endIconId,
    startIcon: startIconId,
  }: {
    endIcon: string;
    startIcon: string;
  } = args;
  const endIcon = endIconId && <DotIcon iconId={endIconId} />;
  const startIcon = startIconId && <DotIcon iconId={startIconId} />;
  return (
    <DotFormGroup {...args} startIcon={startIcon} endIcon={endIcon}>
      <DotCheckbox onChange={args.onChange} label="Label 1"></DotCheckbox>
      <DotCheckbox onChange={args.onChange} label="Label 2"></DotCheckbox>
    </DotFormGroup>
  );
};
