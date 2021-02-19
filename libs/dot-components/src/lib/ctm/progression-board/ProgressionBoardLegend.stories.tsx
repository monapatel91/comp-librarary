import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import {
  DotProgressionBoardLegend,
  legendItems,
  ProgressionBoardLegendProps,
} from './ProgressionBoardLegend';

export default {
  title: 'Experimental/ProgressionBoardLegend',
  component: DotProgressionBoardLegend,
  argTypes: {
    items: { defaultValue: legendItems },
  },
} as Meta;

export const Default: Story<ProgressionBoardLegendProps> = (args) => (
  <DotProgressionBoardLegend {...args} />
);
