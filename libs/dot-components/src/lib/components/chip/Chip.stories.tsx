import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { DotChip, ChipProps } from './Chip';

export default {
  title: 'Experimental/Chip',
  component: DotChip,
  argTypes: {
    clickable: { defaultValue: true },
    color: { defaultValue: 'default' },
    deletable: { defaultValue: true },
    disabled: { defaultValue: false },
    avatar: { defaultValue: true },
    icon: { defaultValue: 'home' },
    label: { defaultValue: 'Hello World' },
    size: { defaultValue: 'medium' },
    variant: { defaultValue: 'outlined' },
  },
} as Meta;

export const Default: Story<ChipProps> = (args) => <DotChip {...args} />;
