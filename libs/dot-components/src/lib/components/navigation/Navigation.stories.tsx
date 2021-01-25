import React from 'react';
import StoryRouter from 'storybook-react-router';
import { addDecorator } from '@storybook/react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { DotNavigation, NavigationProps } from './Navigation';

addDecorator(StoryRouter());

export default {
  title: 'Components/Navigation',
  component: DotNavigation,
  argTypes: {
    direction: {
      defaultValue: 'vertical',
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
          items: [
            {
              direction: 'horizontal',
              iconId: 'block',
              text: 'link 3',
              iconPlacement: 'first',
              onClick: () => console.log('clicked on nav item'),
              title: 'link 3',
              url: '/repos',
            },
            {
              direction: 'horizontal',
              iconId: 'block',
              text: 'link 4',
              iconPlacement: 'first',
              onClick: () => console.log('clicked on nav item'),
              title: 'link 4',
              url: '/repos',
            },
          ],
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
