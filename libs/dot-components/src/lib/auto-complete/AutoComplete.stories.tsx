import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { DotAutoComplete, AutoCompleteProps } from './AutoComplete';

export default {
  title: 'Auto Complete',
  component: DotAutoComplete,
} as Meta;

export const Primary: Story<AutoCompleteProps> = (args) => (
  <DotAutoComplete {...args} />
);
