import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';

import { DotBreadcrumbs, BreadcrumbProps } from './Breadcrumbs';

export default {
  component: DotBreadcrumbs,
  title: 'Components/Breadcrumbs',
  argTypes: {
    items: {
      defaultValue: [
        {
          text: 'Link 1',
          underline: 'hover',
          onClick: action('Link 1 clicked'),
        },
        {
          text: 'Link 2',
          underline: 'hover',
          onClick: action('Link 2 clicked'),
        },
        {
          text: 'Link 3',
          underline: 'hover',
          onClick: action('Link 3 clicked'),
        },
        {
          text: 'Link 4',
          underline: 'hover',
          onClick: action('Link 4 clicked'),
        },
        {
          text: 'Link 5',
        },
      ],
    },
    maxItems: {
      defaultValue: 3,
    },
  },
} as Meta;

export const Default: Story<BreadcrumbProps> = (args) => {
  return <DotBreadcrumbs {...args} />;
};
