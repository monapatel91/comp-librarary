import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { DotInputSelect, InputSelectProps } from './InputSelect';
import { DotIcon } from '../icon/Icon';

const iconOptions = [null, 'warning-solid', 'error-solid'];

export default {
  title: 'Components/Input Select',
  component: DotInputSelect,
  argTypes: {
    label: { defaultValue: 'Default Label' },
    margin: { defaultValue: 'none' },
    name: { defaultValue: 'Default name' },
    options: {
      defaultValue: ['Option 1', 'Option 2', 'Option 3'],
      separator: ',',
    },
    variant: { defaultValue: 'outlined' },
    warning: { defaultValue: false },
    id: { defaultValue: 'custom-text-input' },
    endIcon: { control: { type: 'select', options: iconOptions } },
    startIcon: { control: { type: 'select', options: iconOptions } },
  },
} as Meta;

export const Default: Story<InputSelectProps> = (args: any) => {
  const { endIcon: endIconId, startIcon: startIconId } = args;
  const endIcon = endIconId && <DotIcon iconId={endIconId} />;
  const startIcon = startIconId && <DotIcon iconId={startIconId} />;
  return <DotInputSelect {...args} endIcon={endIcon} startIcon={startIcon} />;
};
