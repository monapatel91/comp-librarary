import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { DotDialog, DialogProps } from './Dialog';

export default {
  title: 'Experimental/Dialog',
  component: DotDialog,
  argTypes: {
    open: { defaultValue: true },
    title: { defaultValue: 'The title' },
  },
} as Meta;

export const Default: Story<DialogProps> = (args) => (
  <DotDialog {...args}>Put whatever you want here :)</DotDialog>
);
