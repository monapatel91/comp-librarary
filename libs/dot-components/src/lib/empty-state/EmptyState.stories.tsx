import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { ReactComponent as EmptyState } from '../assets/empty-state.svg';

import { DotEmptyState, EmptyStateProps } from './EmptyState';

export default {
  title: 'Empty State',
  component: DotEmptyState,
  argTypes: {
    buttonProps: {
      defaultValue: {
        displayText: 'Add Data',
        onClick: () => {
          console.log('clicked');
        },
        type: 'primary',
      },
    },
    Image: {
      defaultValue: EmptyState,
    },
    subtitle: {
      defaultValue: 'That is unexpected',
    },
    title: {
      defaultValue: 'No Data',
    },
  },
} as Meta;

export const Primary: Story<EmptyStateProps> = (args) => (
  <DotEmptyState {...args} />
);
