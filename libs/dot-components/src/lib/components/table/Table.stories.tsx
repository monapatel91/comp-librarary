import React, { ChangeEvent, MouseEvent, useState } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { DotTable, TableProps, stableSort, getComparator } from './Table';
import {
  defaultColumns,
  defaultData,
  paginatedColumns,
  paginatedData,
} from './Table.stories.data';
import { Order } from './TableBody';
import { DotActionToolbar } from '../action-toolbar/ActionToolbar';
import { DotInputText } from '../input-form-fields/InputText';
import { DotIcon } from '../icon/Icon';
import { DotTypography } from '../typography/Typography';

export default {
  title: 'Components/Table',
  component: DotTable,
  argTypes: {
    columns: {
      defaultValue: defaultColumns,
    },
  },
} as Meta;

export const Default: Story<TableProps> = (args) => {
  const [data, setData] = useState(
    stableSort(defaultData, getComparator('asc', 'title'))
  );
  const [searchText, setSearchText] = useState('');

  const onRowClick = (evt: MouseEvent, id: string) => {
    console.log(`${id} clicked! (cell ${evt.target})`);
  };

  const onUpdateData = (order: Order, orderBy: string) => {
    const newData = stableSort(defaultData, getComparator(order, orderBy));
    setData(newData);
  };

  const onSearchChange = (
    evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setSearchText(evt.target.value);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const isSearchHit = (dataRow: any) => {
    return (
      dataRow.rowData.title.toUpperCase().indexOf(searchText.toUpperCase()) !==
        -1 ||
      dataRow.rowData.hometown
        .toUpperCase()
        .indexOf(searchText.toUpperCase()) !== -1
    );
  };

  const getFilteredData = () => {
    return data.filter(isSearchHit);
  };

  const searchIcon = <DotIcon iconId="search" />;
  const toolbar = (
    <DotActionToolbar>
      <div style={{ width: '50%' }}>
        <DotTypography component="h1" variant="h4">
          Favorite Heroes
        </DotTypography>
      </div>
      <div style={{ width: '50%' }}>
        <div style={{ float: 'right' }}>
          <DotInputText
            endIcon={searchIcon}
            fullWidth={false}
            id="search"
            name="search"
            onChange={onSearchChange}
            placeholder="Search"
          />
        </div>
      </div>
    </DotActionToolbar>
  );
  return (
    <DotTable
      {...args}
      data={searchText && searchText.length > 0 ? getFilteredData() : data}
      onRowClick={onRowClick}
      onUpdateData={onUpdateData}
      order="asc"
      orderBy="title"
      toolbar={toolbar}
    />
  );
};

export const LocallyPaginatedTable: Story<TableProps> = (args) => {
  return (
    <DotTable
      {...args}
      columns={paginatedColumns}
      data={paginatedData}
      order="asc"
      orderBy="name"
      rowsPerPage={10}
    />
  );
};

export const RemotelyPaginatedTable: Story<TableProps> = (args) => {
  const [data, setData] = useState(
    stableSort(paginatedData, getComparator('asc', 'name')).slice(0, 10)
  );

  const onUpdateData = (
    order: Order,
    orderBy: string,
    page: number,
    rowsPerPage: number
  ) => {
    console.log(
      `onUpdateData(order: ${order}, orderBy: ${orderBy}, page: ${page}, rowsPerPage: ${rowsPerPage})`
    );
    const newData = stableSort(
      paginatedData,
      getComparator(order, orderBy)
    ).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
    setData(newData);
  };

  const onRowClick = (_evt: MouseEvent, id: string) => {
    console.log(`${id} clicked!`);
  };

  return (
    <DotTable
      {...args}
      columns={paginatedColumns}
      count={paginatedData.length}
      data={data}
      maxHeight="500px"
      onRowClick={onRowClick}
      onUpdateData={onUpdateData}
      order="asc"
      orderBy="name"
      rowsPerPage={10}
    />
  );
};
