import React from 'react';
import { boolean, object, radios, text } from '@storybook/addon-knobs';
import LocallyPaginatedTable from './LocallyPaginatedTable';
import { Header } from './TableHeader';
import { Cell } from './TableCell';
import { Order } from './TableBody';

export default {
  component: LocallyPaginatedTable,
  title: 'Organisms',
};

export const PaginatedTable = () => {
  const orderByOptions = { Title: 'title', Type: 'type' };
  const orderOptions = { Asc: 'asc', Desc: 'desc' };
  const sampleColumns = [
    { id: 'title', label: 'Title' },
    { id: 'type', label: 'Type' },
  ];
  const sampleData = [
    { title: 'Ironman', type: 'BITBUCKET' },
    { title: 'Batman', type: 'GITHUB' },
    { title: 'Captain Marvel', type: 'GITLAB' },
    { title: 'Superman', type: 'TEAMFORGE' },
  ];

  let groupId = 'Options';
  const ariaLabel = text('Aria Label', 'super heroes!', groupId);
  const loading = boolean('Loading', false, groupId);
  const order = radios('Order', orderOptions, 'asc', groupId) as Order;
  const orderBy = radios('Order By', orderByOptions, 'title', groupId);
  const sortable = boolean('Sortable', true, groupId);

  groupId = 'Table Data';
  const columns: Array<Header> = object('Columns', sampleColumns, groupId);
  const data: Array<Cell> = object('Data', sampleData, groupId);

  return (
    <LocallyPaginatedTable
      ariaLabel={ariaLabel}
      columns={columns}
      data={data}
      defaultOrder={order}
      defaultOrderBy={orderBy}
      loading={loading}
      sortable={sortable}
    />
  );
};
