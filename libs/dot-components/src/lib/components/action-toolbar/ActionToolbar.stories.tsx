import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { DotActionToolbar, DotActionBarProps } from './ActionToolbar';
import { DotTypography } from '../typography/Typography';

export default {
  title: 'Components/ActionToolbar',
  component: DotActionToolbar,
  argTypes: {
    className: { defaultValue: 'custom-toolbar' },
  },
} as Meta;

export const Default: Story<DotActionBarProps> = (args) => (
  <DotActionToolbar {...args}>
    <DotTypography component="h1" variant="h4">
      Action toolbar
    </DotTypography>
  </DotActionToolbar>
);
