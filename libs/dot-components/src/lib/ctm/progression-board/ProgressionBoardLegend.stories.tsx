import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import { DotProgressionBoardLegend } from './ProgressionBoardLegend';

export default {
  title: 'Experimental/ProgressionBoardLegend',
  component: DotProgressionBoardLegend,
} as Meta;

export const Default: Story = (args) => <DotProgressionBoardLegend {...args} />;
