import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { DotIcon } from '../icon/Icon';
import { DotCard, CardProps } from './Card';

export default {
  title: 'Card',
  component: DotCard,
  argTypes: {
    title: { defaultValue: 'Hello World' },
    subheader: { defaultValue: 'Well hello there' },
    preHeader: { defaultValue: true },
  },
} as Meta;

export const Primary: Story<CardProps> = (args) => {
  const { preHeader } = args;
  const preheaderExample = <DotIcon icon="block" />;
  return <DotCard preHeader={preHeader ? preheaderExample : null} {...args} />;
};
