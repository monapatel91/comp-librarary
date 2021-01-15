import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { DotIcon } from '../icon/Icon';
import { DotCard, CardProps } from './Card';

export default {
  title: 'Experimental/Card',
  component: DotCard,
  argTypes: {
    title: { defaultValue: 'Hello World' },
    subheader: { defaultValue: 'Well hello there' },
    preHeader: { defaultValue: true },
    menuOptions: { defaultValue: [{ displayText: 'Option 1' }] },
  },
} as Meta;

export const Default: Story<CardProps> = (args) => {
  const { preHeader } = args;
  const preheaderExample = <DotIcon iconId="block" />;
  return <DotCard preHeader={preHeader ? preheaderExample : null} {...args} />;
};
