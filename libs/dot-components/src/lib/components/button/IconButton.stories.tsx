import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { DotIconButton, IconButtonProps } from './IconButton';

export default {
  title: 'Components/Icon Button',
  component: DotIconButton,
  argTypes: {
    iconId: {
      defaultValue: 'script',
    },
    onClick: {
      action: 'clicked',
    },
    titleTooltip: {
      defaultValue: 'Hello World',
    },
  },
} as Meta;

export const Primary: Story<IconButtonProps> = (args) => (
  <DotIconButton {...args} />
);
