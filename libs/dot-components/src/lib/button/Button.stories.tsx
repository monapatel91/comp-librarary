import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { DotButton, ButtonProps } from './Button';

export default {
  component: DotButton,
  title: 'Button',
  argTypes: {
    onClick: {
      action: 'clicked',
    },
    displayText: {
      name: 'Display Text',
      defaultValue: 'Button',
    },
    iconId: {
      defaultValue: '',
    },
    type: {
      defaultValue: 'primary',
    },
  },
} as Meta;

export const Primary: Story<ButtonProps> = (args) => <DotButton {...args} />;
