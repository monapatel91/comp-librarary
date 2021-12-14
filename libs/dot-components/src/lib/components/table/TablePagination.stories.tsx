import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { DotTablePagination, TablePaginationProps } from './TablePagination';

export default {
  title: 'Components/TablePagination',
  component: DotTablePagination,
  argTypes: {
    count: {
      defaultValue: 54,
    },
  },
} as Meta;

export const Default: Story<TablePaginationProps> = (args) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const onChangePage = (newPage: number) => {
    setPage(newPage);
  };

  const onChangeRowsPerPage = (evt) => {
    const newRowsPerPage = evt.target.value;
    setRowsPerPage(newRowsPerPage);
    setPage(0);
  };

  return (
    <DotTablePagination
      {...args}
      onChangePage={onChangePage}
      onChangeRowsPerPage={onChangeRowsPerPage}
      page={page}
      rowsPerPage={rowsPerPage}
    />
  );
};
