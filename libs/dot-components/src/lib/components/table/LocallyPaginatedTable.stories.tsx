import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import {
  LocallyPaginatedTable,
  LocallyPaginatedTableProps,
} from './LocallyPaginatedTable';

export default {
  title: 'Components/Paginated Table - Local',
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

export const Default: Story<LocallyPaginatedTableProps> = (args) => (
  <LocallyPaginatedTable {...args} />
);
