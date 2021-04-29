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
    onClick: {
      action: 'clicked',
    },
    onDelete: {
      action: 'deleted',
    },
    size: { defaultValue: 'medium' },
  },
} as Meta;

export const Default: Story<ChipProps> = (args) => <DotChip {...args} />;
export const ChipWithAvatar: Story<ChipProps> = (args) => (
  <DotChip
    {...args}
    avatar={
      <DotAvatar alt="Batman" size="small" text="Bruce Wayne" type="text" />
    }
  />
);
export const ChipWithIcon: Story<ChipProps> = (args) => (
  <DotChip startIcon={<DotIcon iconId="home" />} {...args} />
);
