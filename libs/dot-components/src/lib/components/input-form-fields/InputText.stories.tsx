import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { DotInputText } from './InputText';
import { InputTextProps } from './InputText';
import { DotIcon } from '../icon/Icon';

const iconOptions = [null, 'warning-solid', 'error-solid'];

export default {
  title: 'Experimental/Input Text',
  component: DotInputText,
  argTypes: {
    fullWidth: { defaultValue: false },
    margin: { defaultValue: 'none' },
    multiline: { defaultValue: false },
    name: { defaultValue: 'Default name' },
    label: { defaultValue: 'Default Label' },
    required: { defaultValue: true },
    warning: { defaultValue: false },
    defaultValue: { defaultValue: '' },
    id: { defaultValue: 'custom-text-input' },
    endIcon: { control: { type: 'select', options: iconOptions } },
    startIcon: { control: { type: 'select', options: iconOptions } },
    size: { defaultValue: 'small' },
  },
} as Meta;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Default: Story<InputTextProps> = (args: any) => {
  const {
    endIcon: endIconId,
    startIcon: startIconId,
  }: {
    endIcon: string;
    startIcon: string;
  } = args;
  const endIcon = endIconId && <DotIcon iconId={endIconId} />;
  const startIcon = startIconId && <DotIcon iconId={startIconId} />;
  return <DotInputText {...args} endIcon={endIcon} startIcon={startIcon} />;
};
