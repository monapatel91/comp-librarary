import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { DotIcon } from '../icon/Icon';
import { DotButton, ButtonProps } from './Button';

const iconOptions = [null, 'notification-bell', 'help'];

export default {
  title: 'Components/Button',
  component: DotButton,
  argTypes: {
    children: {
      defaultValue: 'Button',
    },
    endIcon: {
      control: { type: 'select', options: iconOptions },
    },
    onClick: {
      action: 'clicked',
    },
    startIcon: {
      control: { type: 'select', options: iconOptions },
      defaultValue: 'help',
    },
    type: {
      defaultValue: 'primary',
    },
  },
} as Meta;

export const Default: Story<ButtonProps> = (args) => {
  const { endIcon: endIconId } = args;
  const { startIcon: startIconId } = args;
  const startIcon = startIconId && <DotIcon iconId={startIconId} />;
  const endIcon = endIconId && <DotIcon iconId={endIconId} />;
  return <DotButton {...args} endIcon={endIcon} startIcon={startIcon} />;
};
