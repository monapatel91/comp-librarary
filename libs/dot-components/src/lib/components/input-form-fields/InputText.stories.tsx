import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { DotInputText } from './InputFormFields';
import { InputTextProps } from './InputFormFields.propTypes';
import { DotIcon } from '../icon/Icon';

const iconOptions = [null, 'warning-solid', 'error-solid'];

export default {
  title: 'Components/Input Text',
  component: DotInputText,
  argTypes: {
    fullWidth: { defaultValue: false },
    margin: { defaultValue: 'none' },
    name: { defaultValue: 'Default name' },
    label: { defaultValue: 'Default Label' },
    required: { defaultValue: true },
    warning: { defaultValue: false},
    defaultValue: {defaultValue: ''},
    id: {defaultValue: 'custom-text-input'},
    endIcon: {  control: { type: 'select', options: iconOptions }},
    startIcon: {control: { type: 'select', options: iconOptions}}
  },
} as Meta;

export const Default: Story<InputTextProps> = (args: any) => {
  const { endIcon: endIconId, startIcon: startIconId } = args;
  const endIcon = endIconId && <DotIcon iconId={endIconId} />;
  const startIcon = startIconId && <DotIcon iconId={startIconId} />;
  return  <DotInputText {...args} endIcon={endIcon} startIcon={startIcon} />
}
