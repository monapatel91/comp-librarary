import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { DotAutoComplete, AutoCompleteProps } from './AutoComplete';

export default {
  title: 'Components/Auto Complete',
  component: DotAutoComplete,
  argTypes: {
    options: {
      defaultValue: [
        { category: 'Marvel', title: 'Hulk' },
        { category: 'Marvel', title: 'Thor' },
        { category: 'Marvel', title: 'Ironman' },
        { category: 'Marvel', title: 'Spiderman' },
        { category: 'D.C.', title: 'Batman' },
        { category: 'D.C.', title: 'Flash' },
        { category: 'D.C.', title: 'Aquaman' },
        { category: 'D.C.', title: 'Wonderwoman' },
      ],
    },
  },
} as Meta;

export const Default: Story<AutoCompleteProps> = (args) => (
  <DotAutoComplete {...args} />
);
