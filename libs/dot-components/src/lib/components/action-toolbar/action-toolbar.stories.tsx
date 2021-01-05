import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { DotActionToolbar, DotActionBarProps } from './action-toolbar';
import Typography from '@material-ui/core/Typography';
import DotButton from '../button/Button';

export default {
  title: 'Components/ActionToolbar',
  component: DotActionToolbar,
  argTypes: {
    className: { defaultValue: 'custom-toolbar', },
  },
} as Meta;  

export const Default: Story<DotActionBarProps> = (args) =>
  <DotActionToolbar {...args}>
    <Typography component="h1" variant="h4">Page title</Typography>
    <div>
    <DotButton onClick={() => { }} label="Secondary" type="outlined" />
    <DotButton onClick={() => { }} label="Primary" type="primary" />
    </div>
  </DotActionToolbar>