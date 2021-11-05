import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { DotList, ListProps } from './List';
import { mockListItems } from './List.stories.data';

export default {
  title: 'Components/List',
  component: DotList,
  argTypes: {
    component: {
      defaultValue: 'ul',
    },
    items: {
      defaultValue: mockListItems,
    },
    nestedListType: {
      defaultValue: 'menu',
    },
  },
} as Meta;

export const Default: Story<ListProps> = (args) => (
  <div style={{ top: '-1rem', left: '-1rem', position: 'relative' }}>
    <DotList {...args} />
  </div>
);
