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
      },
      {
        iconId: 'block',
        text: 'Feature Progression',
        href: '/?path=/story/experimental-list--default',
      },
    ],
    text: 'Progressions',
  },
  {
    iconId: 'dashboard',
    text: 'Insights',
    href: '/?path=/story/experimental-list--default',
  },
  {
    text: 'Workflow',
    divider: true,
  },
  {
    iconId: 'block',
    text: 'Packages',
    href: '/?path=/story/experimental-list--default',
  },
  {
    iconId: 'flag',
    text: 'Features',
    href: '/?path=/story/experimental-list--default',
  },
  {
    iconId: 'collection',
    text: 'Projects',
    href: '/?path=/story/experimental-list--default',
  },
  {
    iconId: 'file-lines',
    text: 'Workitems',
    href: '/?path=/story/experimental-list--default',
  },
  {
    iconId: 'change',
    text: 'Changes',
    href: '/?path=/story/experimental-list--default',
  },
  {
    iconId: 'square-settings',
    text: 'Artifacts',
    href: '/?path=/story/experimental-list--default',
  },
  {
    text: 'System',
    divider: true,
  },
  {
    text: 'Tasks',
    href: '/?path=/story/experimental-list--default',
  },
  {
    text: 'Buckets',
    href: '/?path=/story/experimental-list--default',
  },
  {
    text: 'Environment',
    href: '/?path=/story/experimental-list--default',
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

export const Default: Story<ListProps> = (args) => <DotList {...args} />;
