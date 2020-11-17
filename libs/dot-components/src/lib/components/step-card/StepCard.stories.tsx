import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { DotStepCard, StepCardProps } from './StepCard';

export default {
  title: 'Components/Step Card',
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
    icon: { defaultValue: 'home' },
    iconBgColor: { defaultValue: '#FFF3E9', control: 'color' },
    team: { defaultValue: { name: 'teamName' } },
    user: { defaultValue: { name: 'userName' } },
  },
} as Meta;

export const Default: Story<StepCardProps> = (args) => (
  <DotStepCard {...args} />
);
