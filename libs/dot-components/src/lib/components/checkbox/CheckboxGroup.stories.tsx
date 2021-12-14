import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import {
  DotCheckboxGroup,
  CheckboxGroupProps,
} from '../checkbox/CheckboxGroup';
import { DotIcon } from '../icon/Icon';

const iconOptions = [null, 'warning-solid', 'error-solid'];

export default {
  title: 'Components/Checkbox Group',
  component: DotCheckboxGroup,
  argTypes: {
    name: { defaultValue: 'dot-checkbox-group' },
    onChange: {
      action: 'clicked',
    },
    groupLabel: { defaultValue: 'Group of items' },
    endIcon: { control: { type: 'select', options: iconOptions } },
    startIcon: { control: { type: 'select', options: iconOptions } },
    options: {
      defaultValue: [
        { label: 'item 1', value: 'item-1' },
        { label: 'item 2', value: 'item-2' },
        { label: 'item 3', value: 'item-3' },
        { label: 'item 4', value: 'item-4' },
      ],
    },
    showSelectAll: { defaultValue: true },
    required: { defaultValue: true },
  },
} as Meta;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Default: Story<CheckboxGroupProps> = (args: any) => {
  const {
    endIcon: endIconId,
    startIcon: startIconId,
  }: {
    endIcon: string;
    startIcon: string;
  } = args;
  const endIcon = endIconId && <DotIcon iconId={endIconId} />;
  const startIcon = startIconId && <DotIcon iconId={startIconId} />;
  return <DotCheckboxGroup {...args} endIcon={endIcon} startIcon={startIcon} />;
};
