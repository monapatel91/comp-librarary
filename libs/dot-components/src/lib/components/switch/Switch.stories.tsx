import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { DotSwitch, SwitchProps } from './Switch';

export default {
  title: 'Experimental/Switch',
  component: DotSwitch,
  argTypes: {
    ariaLabel: { defaultValue: 'Accessibility for the win' },
    color: { defaultValue: 'primary' },
    label: { defaultValue: 'Sample Label' },
  },
} as Meta;

export const Default: Story<SwitchProps> = (args) => <DotSwitch {...args} />;
