import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { DotSnackbar, DotSnackbarProps } from './DotSnackbar';

export default {
  title: 'Experimental/Snackbar',
  component: DotSnackbar,
  argTypes: {
    severity: { defaultValue: 'success' },
    children: { defaultValue: 'Dot snackbar message' },
    open: { defaultValue: true },
    autoHideDuration: { defaultValue: 10000 },
    onClose: { action: 'clicked' },
  },
} as Meta;

export const Default: Story<DotSnackbarProps> = (args) => (
  <DotSnackbar {...args} />
);
