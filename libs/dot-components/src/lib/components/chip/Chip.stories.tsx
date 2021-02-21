import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { DotChip, ChipProps } from './Chip';
import { DotAvatar } from '../avatar/Avatar';
import { DotIcon } from '../icon/Icon';

export default {
  title: 'Components/Chip',
  component: DotChip,
  argTypes: {
    children: { defaultValue: 'Hello World' },
    disabled: { defaultValue: false },
    isClickable: { defaultValue: true },
    isDeletable: { defaultValue: true },
    onClick: {
      action: 'clicked',
    },
    onDelete: {
      action: 'deleted',
    },
    size: { defaultValue: 'medium' },
  },
} as Meta;

export const Default: Story<ChipProps> = (args) => (
  <DotChip
    avatar={<DotAvatar alt="Batman" size="small" />}
    startIcon={null}
    {...args}
  />
);
export const ChipWithIcon: Story<ChipProps> = (args) => (
  <DotChip avatar={null} startIcon={<DotIcon iconId="home" />} {...args} />
);
