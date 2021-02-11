import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import { DotProgressionBoard } from './ProgressionBoard';
import { ProgressionBoardProps } from './ProgressionBoardInterfaces';
import samplePhases from './sampleData';

export default {
  title: 'Experimental/ProgressionBoard',
  component: DotProgressionBoard,
  argTypes: {
    phases: { defaultValue: samplePhases },
    baseUrl: { defaultValue: 'http://localhost:8080' },
  },
} as Meta;

export const Default: Story<ProgressionBoardProps> = (args) => (
  <DotProgressionBoard {...args} />
);
