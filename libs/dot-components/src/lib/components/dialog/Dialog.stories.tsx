import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { DotAlertBanner } from '../alert-banner/AlertBanner';
import { DotDialog, DialogProps } from './Dialog';
import { DotTypography } from '../typography/Typography';

export default {
  title: 'Components/Dialog',
  component: DotDialog,
  argTypes: {
    children: {
      defaultValue: (
        <>
          <DotAlertBanner severity="error">There is an error...</DotAlertBanner>
          <DotTypography>Batman is way better than superman</DotTypography>
        </>
      ),
    },
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
