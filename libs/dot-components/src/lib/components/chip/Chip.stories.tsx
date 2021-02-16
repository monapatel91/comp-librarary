import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { DotChip, ChipProps } from './Chip';
import { DotAvatar } from '../avatar/Avatar';
import { DotIcon } from '../icon/Icon';

export default {
  title: 'Components/Chip',
  component: DotChip,
  argTypes: {
    avatar: {
      defaultValue: <DotAvatar alt="Batman" size="small" />,
    },
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
    startIcon: { defaultValue: <DotIcon iconId="home" /> },
  },
} as Meta;

export const Default: Story<ChipProps> = (args) => <DotChip {...args} />;
