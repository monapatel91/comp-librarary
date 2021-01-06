import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { DotActionToolbar, DotActionBarProps } from './action-toolbar';
import Typography from '@material-ui/core/Typography';

export default {
  title: 'Components/ActionToolbar',
  component: DotActionToolbar,
  argTypes: {
    className: { defaultValue: 'custom-toolbar' },
  },
} as Meta;

export const Default: Story<DotActionBarProps> = (args) => (
  <DotActionToolbar {...args}>
    <Typography component="h1" variant="h4">
      Action toolbar
    </Typography>
  </DotActionToolbar>
);
