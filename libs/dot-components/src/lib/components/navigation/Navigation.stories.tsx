import React from 'react';
import StoryRouter from 'storybook-react-router';
import { addDecorator } from '@storybook/react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { DotNavigation, NavigationProps } from './Navigation';

addDecorator(StoryRouter());

export default {
  title: 'Experimental/Navigation',
  component: DotNavigation,
  argTypes: {
    direction: {
      defaultValue: 'horizontal',
    },
    items: {
      defaultValue: [
        {
          direction: 'horizontal',
          iconId: 'block',
          text: 'link 1',
          iconPlacement: 'first',
          onClick: () => console.log('clicked on nav item'),
          title: 'link 1',
          url: '/',
        },
        {
          direction: 'horizontal',
          iconId: 'block',
          text: 'link 2',
          iconPlacement: 'first',
          onClick: () => console.log('clicked on nav item'),
          title: 'link 2',
          url: '/repos',
        },
      ],
    },
  },
} as Meta;

export const Default: Story<NavigationProps> = (args) => (
  <DotNavigation {...args} />
);
