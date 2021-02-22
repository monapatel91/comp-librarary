import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { DotStageCard, StageCardProps } from './StageCard';
import DotAvatar from '../avatar/Avatar';
import { CategoryType } from '../phase-header/PhaseHeader';

const avatar = <DotAvatar text="BM" alt="Batman" />;

export default {
  title: 'Experimental/Stage Card',
  component: DotStageCard,
  argTypes: {
    avatar: { defaultValue: avatar },
    title: { defaultValue: 'Some name' },
    menuOptions: {
      defaultValue: [
        {
          displayText: 'Some other option',
        },
        { displayText: 'Delete' },
      ],
    },
    phaseColor: { defaultValue: CategoryType.build },
    steps: {
      defaultValue: [
        { title: 'Batman', subheader: 'step 1' },
        { title: 'Robin', subheader: 'step 2' },
      ],
    },
  },
} as Meta;

export const Default: Story<StageCardProps> = (args) => (
  <DotStageCard {...args} />
);
