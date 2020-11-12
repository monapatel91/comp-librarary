import React from 'react';
import { number, object, text } from '@storybook/addon-knobs';
import InfiniteScrollTable, {
  InfiniteColumn,
  OnTableUpdate,
} from './InfiniteScrollTable';
import { TableDataWithPagination } from './TableDataWithPagination';

export default {
  component: InfiniteScrollTable,
  title: 'Infinite Scroll',
};

export const InfiniteTable = () => {
  const sampleColumns: InfiniteColumn[] = [
    { dataKey: 'id', label: 'Id', width: 0.2 },
    { dataKey: 'name', label: 'Name', width: 0.4 },
    { dataKey: 'email', label: 'Email', width: 0.4 },
  ];

  let groupId = 'Options';
  const ariaLabel = text('Aria Label', 'infinite scroll table', groupId);
  const height = number('Height', 200, {}, groupId);
  const headerHeight = number('Header Height', 40, {}, groupId);
  const rowHeight = number('Row Height', 40, {}, groupId);
  const sbRowsPerPage = number('Rows Per Page', 20, {}, groupId);
  const threshold = number('Threshold', 15, {}, groupId);
  const containerHeight = height + 36;

  groupId = 'Table Data';
  const columns = object('Columns', sampleColumns, groupId);

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

  return (
    <div style={{ height: `${containerHeight}px` }}>
      <InfiniteScrollTable
        ariaLabel={ariaLabel}
        columns={columns}
        headerHeight={headerHeight}
        height={height}
        onTableUpdate={onTableUpdate}
        rowsPerPage={sbRowsPerPage}
        rowHeight={rowHeight}
        threshold={threshold}
      />
    </div>
  );
};
