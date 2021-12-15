import React from 'react';
import { action } from '@storybook/addon-actions';
import { Story, Meta } from '@storybook/react/types-6-0';
import { DotAlertBanner, AlertBannerProps } from './AlertBanner';
import { DotButton } from '../button/Button';

const actionButtonOptions = [null, 'With Action button'];

export default {
  title: 'Experimental/AlertBanner',
  component: DotAlertBanner,
  argTypes: {
    action: {
      control: { type: 'select', options: actionButtonOptions },
      defaultValue: null,
    },
    children: {
      defaultValue: 'This is Alert banner',
    },
    onClose: {
      action: 'close',
    },
  },
} as Meta;

export const Default: Story<AlertBannerProps> = (args) => {
  const { action: actionButtonId } = args;
  const actionButton = actionButtonId && (
    <DotButton onClick={action('Undo Button clicked!!')} type="text">
      Undo
    </DotButton>
  );
  return <DotAlertBanner {...args} action={actionButton} />;
};
