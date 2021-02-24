import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { DotProgressionBoard, ProgressionBoardProps } from './ProgressionBoard';
import samplePhases from './sampleData';

export default {
  title: 'Experimental/ProgressionBoard',
  component: DotProgressionBoard,
  argTypes: {
    theme: { defaultValue: 'agility-light' },
    phases: { defaultValue: samplePhases },
    baseUrl: { defaultValue: 'http://localhost:8080' },
  },
} as Meta;

export const Default: Story<ProgressionBoardProps> = (args) => (
  <DotProgressionBoard {...args} />
);
