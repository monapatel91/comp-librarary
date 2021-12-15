import { action } from '@storybook/addon-actions';
import { ListItemProps } from './ListItem';

export const mockHref = '/?path=/story/components-list--default';
export const mockListItems: Array<ListItemProps> = [
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
        tooltip: 'These are package progressions',
      },
      {
        startIconId: 'block',
        text: 'Feature Progression',
        href: mockHref,
        tooltip: 'These are feature progressions',
      },
    ],
    text: 'Progressions',
    tooltip: 'These are progressions',
  },
  {
    startIconId: 'dashboard',
    items: [
      {
        startIconId: 'block',
        text: 'Nested Link One',
        href: mockHref,
        target: '_blank',
        tooltip: 'First nested link',
      },
      {
        startIconId: 'block',
        text: 'Nested Link Two',
        href: mockHref,
        target: '_self',
        tooltip: 'Second nested link',
      },
    ],
    text: 'Insights',
    tooltip: 'These are insights',
  },
  {
    text: 'Workflow',
    divider: true,
  },
  {
    endIconId: 'block',
    startIconId: 'block',
    text: 'Packages',
    href: mockHref,
    tooltip: 'These are packages',
  },
  {
    startIconId: 'flag',
    text: 'Features',
    href: mockHref,
    tooltip: 'These are features',
  },
  {
    startIconId: 'collection',
    text: 'Projects',
    href: mockHref,
    tooltip: 'These are projects',
  },
  {
    startIconId: 'file-lines',
    text: 'Workitems',
    href: mockHref,
    tooltip: 'These are workitems',
  },
  {
    startIconId: 'change',
    text: 'Changes',
    href: mockHref,
    tooltip: 'These are changes',
  },
  {
    startIconId: 'square-settings',
    text: 'Artifacts',
    href: mockHref,
    tooltip: 'These are artifacts',
  },
  {
    text: 'System',
    divider: true,
  },
  {
    text: 'Tasks',
    href: mockHref,
    tooltip: 'These are tasks',
  },
  {
    text: 'Buckets',
    href: mockHref,
    tooltip: 'Buckets of rain',
  },
  {
    text: 'Environment',
    href: mockHref,
    tooltip: 'Protect the environment',
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
        tooltip: 'I am the alpha dog',
      },
      {
        startIconId: 'block',
        text: 'Nested Link Beta',
        onClick: action('Nested Link Beta clicked'),
        tooltip: 'I am the beta tester',
      },
    ],
    text: 'Parent',
    tooltip: 'I have no href or onClick',
  },
  {
    href: '/?path=/story/components-list--default#parent',
    startIconId: 'dashboard',
    items: [
      {
        startIconId: 'block',
        text: 'Nested Link Uno',
        href: '/?path=/story/components-list--default#uno',
        tooltip: 'El primero',
      },
      {
        startIconId: 'block',
        text: 'Nested Link Dos',
        onClick: action('El segundo clicked'),
        tooltip: 'El segundo',
      },
    ],
    text: 'Parent with Href',
    tooltip: 'I have an Href but no onClick',
  },
  {
    startIconId: 'file-lines',
    items: [
      {
        startIconId: 'block',
        text: 'Nested Link A',
        href: '/?path=/story/components-list--default#a',
        tooltip: 'A as in apple',
      },
      {
        startIconId: 'block',
        text: 'Nested Link B',
        onClick: action('Nested Link B clicked'),
        tooltip: 'B as in Batman',
      },
    ],
    onClick: action('Parent with onClick clicked'),
    text: 'Parent with onClick',
    tooltip: 'I have an onClick but no Href',
  },
];
