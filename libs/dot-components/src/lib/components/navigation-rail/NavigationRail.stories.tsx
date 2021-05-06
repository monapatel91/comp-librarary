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
    onClick: () => console.log('Details item selected'),
  },
  {
    iconId: 'history',
    title: 'History',
    onClick: () => console.log('History item selected'),
  },
  {
    iconId: 'users',
    title: 'Users',
    onClick: () => console.log('Users item selected'),
  },
  {
    iconId: 'timeline',
    title: 'Long Item Title',
    onClick: () => console.log('Long Item Title item selected'),
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
  },
} as Meta;

export const Default: Story<NavigationRailProps> = (args) => (
  <DotNavigationRail {...args} />
);
