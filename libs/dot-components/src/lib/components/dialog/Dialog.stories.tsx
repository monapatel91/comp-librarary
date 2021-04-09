import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { DotDialog, DialogProps } from './Dialog';

export default {
  title: 'Components/Dialog',
  component: DotDialog,
  argTypes: {
    children: { defaultValue: 'Batman is way better than superman' },
    onCancel: {
      action: 'cancelled',
    },
    onSubmit: {
      action: 'submitted',
    },
    open: { defaultValue: true },
    title: { defaultValue: 'Superheros' },
  },
} as Meta;

export const Default: Story<DialogProps> = (args) => <DotDialog {...args} />;
