import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import InfiniteScrollTable, {
  OnTableUpdate,
  InfiniteScrollTableProps,
} from './InfiniteScrollTable';
import { TableDataWithPagination } from './TableDataWithPagination';

export default {
  title: 'Components/Infinite Scroll',
  component: InfiniteScrollTable,
  argTypes: {
    columns: {
      defaultValue: [
        { dataKey: 'id', label: 'Id', width: 0.2 },
        { dataKey: 'name', label: 'Name', width: 0.4 },
        { dataKey: 'email', label: 'Email', width: 0.4 },
      ],
    },
    ariaLabel: { defaultValue: 'infinite scroll table' },
    height: { defaultValue: 200 },
    headerHeight: { defaultValue: 40 },
    rowHeight: { defaultValue: 20 },
    rowsPerPage: { defaultValue: 20 },
  },
} as Meta;

export const Default: Story<InfiniteScrollTableProps> = ({
  onTableUpdate: update,
  ...args
}) => {
  const updateTableData = (
    rowsPerPage: number,
    page: number
  ): TableDataWithPagination => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const items = new Array<any>();

    const start = page * rowsPerPage;
    const end = start + rowsPerPage;

    for (let index = start, i = 0; index < end; index++, i++) {
      items[i] = {
        id: index,
        name: `Name ${index}`,
        email: `Email ${index}`,
      };
    }

    return {
      data: items,
      pagination: {
        current_page: page,
        has_next: true,
        has_previous: page > 0,
        size: items.length,
        total_elements: (page + 2) * rowsPerPage,
        total_pages: page + 1,
      },
    };
  };

  const onTableUpdate: OnTableUpdate = (
    rowsPerPage: number,
    page: number
  ): Promise<TableDataWithPagination | null> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(updateTableData(rowsPerPage, page));
      }, 1000);
    });
  };

  return (
    <div style={{ height: args.height + 36 }}>
      <InfiniteScrollTable onTableUpdate={onTableUpdate} {...args} />
    </div>
  );
};
