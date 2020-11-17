import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import {
  DotConfirmationDialog,
  ConfirmationDialogProps,
} from './ConfirmationDialog';

export default {
  title: 'Components/Confirmation Dialog',
  component: DotConfirmationDialog,
  argTypes: {
    message: { defaultValue: 'something useful' },
    title: { defaultValue: 'Please confirm' },
    showDialog: { defaultValue: true },
  },
} as Meta;

export const Default: Story<ConfirmationDialogProps> = (args) => (
  <DotConfirmationDialog {...args} />
);
