import React from 'react';
import { action } from '@storybook/addon-actions';
import { Story, Meta } from '@storybook/react/types-6-0';
import { DotTooltip, TooltipProps } from './Tooltip';
import { DotIconButton } from '../button/IconButton';

export default {
  title: 'Components/Tooltip',
  component: DotTooltip,
  argTypes: {
    children: {
      defaultValue: <DotIconButton iconId="delete" />,
    },
    placement: {
      defaultValue: 'bottom-start',
    },
    title: {
      defaultValue: 'Delete',
    },
  },
} as Meta;

export const Default: Story<TooltipProps> = (args) => {
  return <DotTooltip {...args} />;
};
