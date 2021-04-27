import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { DotList, ListItemProps, ListProps } from './List';

const mockListItems: Array<ListItemProps> = [
  {
    text: 'Pipelines',
    href: '/?path=/story/experimental-list--default',
  },
  {
    iconId: 'process-template',
    items: [
      {
        iconId: 'block',
        text: 'Package Progression',
        href: '/?path=/story/experimental-list--default',
        title: 'These are package progressions',
      },
      {
        iconId: 'block',
        text: 'Feature Progression',
        href: '/?path=/story/experimental-list--default',
        title: 'These are feature progressions',
      },
    ],
    text: 'Progressions',
    title: 'These are progressions',
  },
  {
    iconId: 'dashboard',
    items: [
      {
        iconId: 'block',
        text: 'Nested Link One',
        href: '/?path=/story/experimental-list--default',
        title: 'First nested link',
      },
      {
        iconId: 'block',
        text: 'Nested Link Two',
        href: '/?path=/story/experimental-list--default',
        title: 'Second nested link',
      },
    ],
    text: 'Insights',
    title: 'These are insights',
  },
  {
    text: 'Workflow',
    divider: true,
  },
  {
    iconId: 'block',
    text: 'Packages',
    href: '/?path=/story/experimental-list--default',
    title: 'These are packages',
  },
  {
    iconId: 'flag',
    text: 'Features',
    href: '/?path=/story/experimental-list--default',
    title: 'These are features',
  },
  {
    iconId: 'collection',
    text: 'Projects',
    href: '/?path=/story/experimental-list--default',
    title: 'These are projects',
  },
  {
    iconId: 'file-lines',
    text: 'Workitems',
    href: '/?path=/story/experimental-list--default',
    title: 'These are workitems',
  },
  {
    iconId: 'change',
    text: 'Changes',
    href: '/?path=/story/experimental-list--default',
    title: 'These are changes',
  },
  {
    iconId: 'square-settings',
    text: 'Artifacts',
    href: '/?path=/story/experimental-list--default',
    title: 'These are artifacts',
  },
  {
    text: 'System',
    divider: true,
  },
  {
    text: 'Tasks',
    href: '/?path=/story/experimental-list--default',
    title: 'These are tasks',
  },
  {
    text: 'Buckets',
    href: '/?path=/story/experimental-list--default',
    title: 'Buckets of rain',
  },
  {
    text: 'Environment',
    href: '/?path=/story/experimental-list--default',
    title: 'Protect the environment',
  },
];

export default {
  title: 'Experimental/List',
  component: DotList,
  argTypes: {
    component: {
      defaultValue: 'ul',
    },
    items: {
      defaultValue: mockListItems,
    },
  },
} as Meta;

export const Default: Story<ListProps> = (args) => (
  <div style={{ width: '300px' }}>
    <DotList {...args} />
  </div>
);
