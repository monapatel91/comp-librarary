import React, { useState } from 'react';
import DotTable from './Table';
import { Header } from './TableHeader';
import { Cell } from './TableCell';
import { Order } from './TableBody';
import './Table.scss';

export interface LocallyPaginatedTableProps {
  ariaLabel: string;
  /** The table header columns */
  columns: Array<Header>;
  /** The table body row data */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: Array<any>;
  /** The default sort order of table data 'asc', 'desc' */
  defaultOrder?: Order;
  /** The ID of the column that you are sorting by */
  defaultOrderBy?: string;
  /** The text that is displayed if no data is returned */
  emptyMessage?: string;
  /** If true the loading animation will be displayed */
  loading?: boolean;
  /** If true the table data will be sortable via clicking on the column headers */
  sortable?: boolean;
  /** If true the table header will stick at the top of the page when scrolling */
  stickyHeader?: boolean;
}

export function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

export function getComparator<Key extends keyof Cell>(
  order: Order,
  orderBy: Key
): (
  a: { [key in Key]: number | string },
  b: { [key in Key]: number | string }
) => number {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

export function stableSort<T>(
  array: T[],
  comparator: (order: T, orderBy: T) => number
) {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
  stabilizedThis.sort((order, orderBy) => {
    const newOrder = comparator(order[0], orderBy[0]);
    return newOrder !== 0 ? newOrder : order[1] - orderBy[1];
  });
  return stabilizedThis.map((el) => el[0]);
}
// https://material-ui.com/components/tables/#custom-pagination-options
/**
 * A wrapper component around the Table component from @material-ui. This component can be used for
 *  creating a common structure for tables in the system.
 */

export const LocallyPaginatedTable = ({
  ariaLabel,
  columns,
  data,
  defaultOrder = 'asc',
  defaultOrderBy,
  emptyMessage,
  loading = false,
  stickyHeader = true,
  sortable = true,
}: LocallyPaginatedTableProps) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [order, setOrder] = useState<Order>(defaultOrder);
  const [orderBy, setOrderBy] = useState(defaultOrderBy);

  const handleRequestSort = (property: string) => {
    const isAsc: boolean = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  if (orderBy && order) {
    data = stableSort(data, getComparator(order, orderBy));
  }

  return (
    <DotTable
      ariaLabel={ariaLabel}
      columns={columns}
      count={data.length}
      data={data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)}
      emptyMessage={emptyMessage}
      handleRequestSort={handleRequestSort}
      loading={loading}
      order={order}
      orderBy={orderBy}
      page={page}
      rowsPerPage={rowsPerPage}
      setPage={setPage}
      stickyHeader={stickyHeader}
      sortable={sortable}
      setRowsPerPage={setRowsPerPage}
    />
  );
};

export default LocallyPaginatedTable;
