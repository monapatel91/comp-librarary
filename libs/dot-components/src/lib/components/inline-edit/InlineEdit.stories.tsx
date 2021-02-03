import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { DotInlineEdit, InlineEditProps } from './InlineEdit';

export default {
  title: 'Experimental/Inline Edit',
  component: DotInlineEdit,
  argTypes: {
    autoFocus: { defaultValue: true },
    'data-testid': { defaultValue: 'inline-edit-wrapper' },
    helperText: { defaultValue: 'Name' },
    margin: { defaultValue: 'none' },
    name: { defaultValue: 'Default name' },
    required: { defaultValue: true },
    value: { defaultValue: 'Batman rocks' },
  },
} as Meta;

export const Default: Story<InlineEditProps> = (args) => (
  <DotInlineEdit {...args} />
);
