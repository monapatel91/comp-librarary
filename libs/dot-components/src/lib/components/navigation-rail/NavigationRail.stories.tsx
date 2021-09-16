import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import {
  DotNavigationRail,
  NavigationRailProps,
  RailItem,
} from './NavigationRail';

const mockRailItems: Array<RailItem> = [
  {
    iconId: 'list',
    title: 'Details',
  },
  {
    iconId: 'history',
    title: 'History',
  },
  {
    iconId: 'users',
    title: 'Users',
  },
  {
    iconId: 'timeline',
    title: 'Timeline',
  },
];

export default {
  title: 'Experimental/NavigationRail',
  component: DotNavigationRail,
  decorators: [
    (RailStory) => (
      <div style={{ height: '100vh' }}>
        <RailStory />
      </div>
    ),
  ],
  argTypes: {
    railItems: {
      defaultValue: mockRailItems,
    },
    onChange: {
      action: 'item changed',
    },
  },
} as Meta;

export const Default: Story<NavigationRailProps> = (args) => (
  <DotNavigationRail {...args} />
);
