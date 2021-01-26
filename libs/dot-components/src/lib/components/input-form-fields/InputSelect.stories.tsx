import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { DotInputSelect, InputSelectProps } from './InputSelect';
import { DotIcon } from '../icon/Icon';

<<<<<<< HEAD
const iconOptions = [null, 'warning-solid', 'error-solid'];
=======
import { DotInputSelect, InputSelectProps } from './InputSelect';
>>>>>>> isse: #107 #108 moved select to separate file

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
<<<<<<< HEAD
    warning: { defaultValue: false },
    id: { defaultValue: 'custom-text-input' },
    endIcon: { control: { type: 'select', options: iconOptions } },
    startIcon: { control: { type: 'select', options: iconOptions } },
=======
    warning: {defaultValue: false},
    id: {defaultValue: 'custom-text-input'}
>>>>>>> issue: #107 #108 rebased to master
  },
} as Meta;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Default: Story<InputSelectProps> = (args: any) => {
  const { endIcon: endIconId, startIcon: startIconId } = args;
  const endIcon = endIconId && <DotIcon iconId={endIconId} />;
  const startIcon = startIconId && <DotIcon iconId={startIconId} />;
  return <DotInputSelect {...args} endIcon={endIcon} startIcon={startIcon} />;
};
