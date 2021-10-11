import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { DotIconButton, IconButtonProps } from './IconButton';

export default {
  title: 'Components/Icon Button',
  component: DotIconButton,
  argTypes: {
    color: {
      defaultValue: 'inherit',
    },
    iconId: {
      defaultValue: 'script',
    },
    iconSize: {
      defaultValue: 'small',
    },
    onClick: {
      action: 'clicked',
    },
    titleTooltip: {
      defaultValue: 'Hello World',
    },
    tooltip: {
      defaultValue: 'Hello World',
    },
    size: {
      defaultValue: 'medium',
    },
  },
} as Meta;

export const Default: Story<IconButtonProps> = (args) => (
  <DotIconButton {...args} />
);
