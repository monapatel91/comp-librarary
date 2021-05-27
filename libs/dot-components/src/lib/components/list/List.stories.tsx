import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';
import { DotList, ListItemProps, ListProps } from './List';

const mockHref = '/?path=/story/components-list--default';
const mockListItems: Array<ListItemProps> = [
  {
    text: 'Pipelines',
    href: mockHref,
  },
  {
    startIconId: 'process-template',
    items: [
      {
        startIconId: 'block',
        text: 'Package Progression',
        href: mockHref,
        title: 'These are package progressions',
      },
      {
        startIconId: 'block',
        text: 'Feature Progression',
        href: mockHref,
        title: 'These are feature progressions',
      },
    ],
    text: 'Progressions',
    title: 'These are progressions',
  },
  {
    startIconId: 'dashboard',
    items: [
      {
        startIconId: 'block',
        text: 'Nested Link One',
        href: mockHref,
        title: 'First nested link',
      },
      {
        startIconId: 'block',
        text: 'Nested Link Two',
        href: mockHref,
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
    startIconId: 'block',
    text: 'Packages',
    href: mockHref,
    title: 'These are packages',
  },
  {
    startIconId: 'flag',
    text: 'Features',
    href: mockHref,
    title: 'These are features',
  },
  {
    startIconId: 'collection',
    text: 'Projects',
    href: mockHref,
    title: 'These are projects',
  },
  {
    startIconId: 'file-lines',
    text: 'Workitems',
    href: mockHref,
    title: 'These are workitems',
  },
  {
    startIconId: 'change',
    text: 'Changes',
    href: mockHref,
    title: 'These are changes',
  },
  {
    startIconId: 'square-settings',
    text: 'Artifacts',
    href: mockHref,
    title: 'These are artifacts',
  },
  {
    text: 'System',
    divider: true,
  },
  {
    text: 'Tasks',
    href: mockHref,
    title: 'These are tasks',
  },
  {
    text: 'Buckets',
    href: mockHref,
    title: 'Buckets of rain',
  },
  {
    text: 'Environment',
    href: mockHref,
    title: 'Protect the environment',
  },
  {
    text: 'Testing',
    divider: true,
  },
  {
    startIconId: 'process-template',
    items: [
      {
        startIconId: 'block',
        text: 'Nested Link Alpha',
        href: '/?path=/story/components-list--default#alpha',
        title: 'I am the alpha dog',
      },
      {
        startIconId: 'block',
        text: 'Nested Link Beta',
        onClick: action('Nested Link Beta clicked'),
        title: 'I am the beta tester',
      },
    ],
    text: 'Parent',
    title: 'I have no href or onClick',
  },
  {
    href: '/?path=/story/components-list--default#parent',
    startIconId: 'dashboard',
    items: [
      {
        startIconId: 'block',
        text: 'Nested Link Uno',
        href: '/?path=/story/components-list--default#uno',
        title: 'El primero',
      },
      {
        startIconId: 'block',
        text: 'Nested Link Dos',
        onClick: action('El segundo clicked'),
        title: 'El segundo',
      },
    ],
    text: 'Parent with Href',
    title: 'I have an Href but no onClick',
  },
  {
    startIconId: 'file-lines',
    items: [
      {
        startIconId: 'block',
        text: 'Nested Link A',
        href: '/?path=/story/components-list--default#a',
        title: 'A as in apple',
      },
      {
        startIconId: 'block',
        text: 'Nested Link B',
        onClick: action('Nested Link B clicked'),
        title: 'B as in Batman',
      },
    ],
    onClick: action('Parent with onClick clicked'),
    text: 'Parent with onClick',
    title: 'I have an onClick but no Href',
  },
];

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
  },
} as Meta;

export const Default: Story<ListProps> = (args) => (
  <div style={{ width: '300px' }}>
    <DotList {...args} />
  </div>
);
