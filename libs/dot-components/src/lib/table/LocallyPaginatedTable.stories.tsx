import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import {
  LocallyPaginatedTable,
  LocallyPaginatedTableProps,
} from './LocallyPaginatedTable';
import { Header } from './TableHeader';
import { Cell } from './TableCell';
import { Order } from './TableBody';

export default {
  title: 'Paginated Table - Local',
  component: LocallyPaginatedTable,
  argTypes: {
    data: {
      defaultValue: [
        { title: 'Ironman', type: 'BITBUCKET' },
        { title: 'Batman', type: 'GITHUB' },
        { title: 'Captain Marvel', type: 'GITLAB' },
        { title: 'Superman', type: 'TEAMFORGE' },
      ],
    },
    columns: {
      defaultValue: [
        { id: 'title', label: 'Title' },
        { id: 'type', label: 'Type' },
      ],
    },
  },
} as Meta;

export const Primary: Story<LocallyPaginatedTableProps> = (args) => (
  <LocallyPaginatedTable {...args} />
);
