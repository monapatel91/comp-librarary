import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { DotBreadcrumbs, BreadcrumbProps } from './Breadcrumbs';

// Leaving actions out of this for now when clicking on a items because
// I'm not sure how to do this with the new argTypes.
// It might be worth while to consider moving onClick to a prop on Breadcrumbs though.
export default {
  component: DotBreadcrumbs,
  title: 'Breadcrumbs',
  argTypes: {
    items: {
      defaultValue: [
        {
          text: 'Link 1',
          underline: 'hover',
        },
        {
          text: 'Link 2',
          underline: 'hover',
        },
        {
          text: 'Link 3',
          underline: 'hover',
        },
        {
          text: 'Link 4',
          underline: 'hover',
        },
        {
          text: 'Link 5',
        },
      ],
    },
  },
} as Meta;

export const Primary: Story<BreadcrumbProps> = (args) => (
  <DotBreadcrumbs {...args} />
);
