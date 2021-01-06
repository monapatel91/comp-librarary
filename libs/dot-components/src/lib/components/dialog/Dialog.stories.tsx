import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { DotDialog, DialogProps } from './Dialog';

export default {
  title: 'Experimental/Dialog',
  component: DotDialog,
  argTypes: {
    children: { defaultValue: 'Batman is way better than superman' },
    open: { defaultValue: true },
    title: { defaultValue: 'Superheros' },
  },
} as Meta;

export const Default: Story<DialogProps> = (args) => <DotDialog {...args} />;
