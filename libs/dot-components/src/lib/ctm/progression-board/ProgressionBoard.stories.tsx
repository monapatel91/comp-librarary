import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { DotProgressionBoard, ProgressionBoardProps } from './ProgressionBoard';
import { samplePhases } from './sample-data/sampleData';

export default {
  title: 'Product/ProgressionBoard',
  component: DotProgressionBoard,
  argTypes: {
    phases: { defaultValue: samplePhases },
    baseUrl: { defaultValue: 'http://localhost:8080' },
  },
} as Meta;

export const Default: Story<ProgressionBoardProps> = (args) => (
  <DotProgressionBoard {...args} />
);
