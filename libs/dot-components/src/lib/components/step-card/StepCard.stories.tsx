import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { DotStepCard, StepCardProps } from './StepCard';

export default {
  title: 'Experimental/Step Card',
  component: DotStepCard,
  argTypes: {
    title: { defaultValue: 'Some name' },
    menuOptions: {
      defaultValue: [
        {
          displayText: 'Some other option',
        },
        { displayText: 'Delete' },
      ],
    },
    subheader: { defaultValue: 'Some subheader' },
    iconId: { defaultValue: 'home' },
    team: { defaultValue: { name: 'teamName' } },
    user: { defaultValue: { name: 'userName' } },
  },
} as Meta;

export const Default: Story<StepCardProps> = (args) => (
  <DotStepCard {...args} />
);
