import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { DotSwitch, SwitchProps } from './Switch';

export default {
  title: 'Components/Switch',
  component: DotSwitch,
  argTypes: {
    ariaLabel: { defaultValue: 'Accessibility for the win' },
    color: { defaultValue: 'primary' },
    label: { defaultValue: 'Sample Label' },
  },
} as Meta;

export const Primary: Story<SwitchProps> = (args) => <DotSwitch {...args} />;
