import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { DotRadioGroup, RadioGroupProps } from './RadioGroup';
import DotIcon from '../icon/Icon';

const iconOptions = [null, 'warning-solid', 'error-solid'];

export default {
  title: 'Experimental/Radio Group',
  component: DotRadioGroup,
  argTypes: {
    ariaLabel: { defaultValue: 'Accessibility for the win' },
    defaultValue: { defaultValue: 'item-2' },
    name: { defaultValue: 'dot-radio-group' },
    onChange: {
      action: 'clicked',
    },
    value: { defaultValue: 'item-1' },
    groupLabel: { defaultValue: 'Group of items' },
    radioButtons: {
      defaultValue: [
        { label: 'item 1', value: 'item-1' },
        { label: 'item 2', value: 'item-2' },
        { label: 'item 3', value: 'item-3' },
        { label: 'item 4', value: 'item-4', disabled: true },
      ],
    },
    endIcon: { control: { type: 'select', options: iconOptions } },
    startIcon: { control: { type: 'select', options: iconOptions } },
  },
} as Meta;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Default: Story<RadioGroupProps> = (args: any) => {
  const {
    endIcon: endIconId,
    startIcon: startIconId,
  }: {
    endIcon: string;
    startIcon: string;
  } = args;
  const endIcon = endIconId && <DotIcon iconId={endIconId} />;
  const startIcon = startIconId && <DotIcon iconId={startIconId} />;
  return <DotRadioGroup {...args} startIcon={startIcon} endIcon={endIcon} />;
};
