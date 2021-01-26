import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { ReactComponent as EmptyState } from '../../assets/empty-state.svg';
import { DotEmptyState, EmptyStateProps } from './EmptyState';

export default {
  title: 'Components/Empty State',
  component: DotEmptyState,
  argTypes: {
    buttonProps: {
      defaultValue: {
        children: 'Add Data',
        onClick: () => {
          console.log('clicked');
        },
        type: 'primary',
      },
    },
    Image: {
      defaultValue: EmptyState,
    },
    imageAltText: {
      defaultValue: 'Batman was here',
    },
    subtitle: {
      defaultValue: 'That is unexpected',
    },
    title: {
      defaultValue: 'No Data',
    },
  },
} as Meta;

export const Default: Story<EmptyStateProps> = (args) => (
  <DotEmptyState {...args} />
);
