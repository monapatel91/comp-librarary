import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';
import { DotIconButton } from '../button/IconButton';
import { DotSnackbar, SnackbarProps } from './Snackbar';

export default {
  title: 'Components/Snackbar',
  component: DotSnackbar,
  argTypes: {
    action: {
      defaultValue: (
        <DotIconButton
          iconId="close"
          onClick={action('Close Button clicked!!')}
          size="medium"
        />
      ),
    },
    severity: { defaultValue: 'success' },
    children: { defaultValue: 'Dot snackbar message' },
    open: { defaultValue: true },
    autoHideDuration: { defaultValue: 10000 },
    onClose: { action: 'clicked' },
    width: { defaultValue: '450px' },
  },
} as Meta;

export const Default: Story<SnackbarProps> = (args) => (
  <DotSnackbar {...args} />
);
