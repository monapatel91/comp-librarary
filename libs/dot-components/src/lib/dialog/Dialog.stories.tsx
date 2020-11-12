import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { DotDialog, DialogProps } from './Dialog';

export default {
  title: 'Dialog',
  component: DotDialog,
  argTypes: {
    open: { defaultValue: true },
    title: { defaultValue: 'The title' },
  },
} as Meta;

export const Primary: Story<DialogProps> = (args) => (
  <DotDialog {...args}>Put whatever you want here :)</DotDialog>
);
