import React from 'react';
import { action } from '@storybook/addon-actions';
import { Story, Meta } from '@storybook/react/types-6-0';
import { DotAlertBanner, AlertBannerProps } from './AlertBanner';
import { DotButton } from '../button/Button';


export default {
  title: 'Components/AlertBanner',
  component: DotAlertBanner,
  argTypes: {
    action: {
       defaultValue: <DotButton type="text" onClick={action('Undo Button clicked!!')}>Dismiss</DotButton>
    },
    children:{
        defaultValue: 'This is Alert banner'
    },
    onClose: {
      action: 'close',
    },
  },
} as Meta;

export const Default: Story<AlertBannerProps> = (args) => <DotAlertBanner {...args} />;
