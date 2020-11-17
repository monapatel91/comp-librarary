import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { DotStageCard, StageCardProps } from './StageCard';
import { CategoryType } from '../phase-header/PhaseHeader';

export default {
  title: 'Components/Stage Card',
  component: DotStageCard,
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
    phaseColor: { defaultValue: CategoryType.build },
    steps: {
      defaultValue: [
        { title: 'Batman', subheader: 'step 1' },
        { title: 'Robin', subheader: 'step 2' },
      ],
    },
  },
} as Meta;

export const Primary: Story<StageCardProps> = (args) => (
  <DotStageCard {...args} />
);
