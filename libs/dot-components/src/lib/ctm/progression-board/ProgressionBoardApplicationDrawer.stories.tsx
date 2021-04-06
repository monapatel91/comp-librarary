import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import {
  DotProgressionBoardApplicationDrawer,
  PBAppDrawerProps,
} from './ProgressionBoardApplicationDrawer';
import { sampleApplicationAPIData } from './sample-data/sampleApplicationData';

export default {
  title: 'Experimental/ProgressionBoardApplicationDrawer',
  component: DotProgressionBoardApplicationDrawer,
  argTypes: {
    apiData: {
      defaultValue: sampleApplicationAPIData,
    },
    onDrawerClose: {
      action: 'closed',
    },
    onFormCancel: {
      action: 'cancelled',
    },
    onFormSubmit: {
      action: 'cancelled',
    },
    drawerPaperProps: {
      style: {
        position: 'absolute',
      },
    },
    isDrawerOpened: {
      defaultValue: true,
    },
  },
} as Meta;

export const Default: Story<PBAppDrawerProps> = (args) => (
  <DotProgressionBoardApplicationDrawer {...args} />
);
