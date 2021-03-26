import React, { ChangeEvent, MouseEvent, useState } from 'react';
import { Table } from '@material-ui/core';
import { CommonProps } from '../CommonProps';
import { useStylesWithRootClass } from '../useStylesWithRootClass';
import {
  rootClassName,
  StyledPaper,
  StyledTableContainer,
} from './Table.styles';

import { DotTableBody, Order } from './TableBody';
import { DotHeaderRow, Header } from './TableHeader';
import { DotSkeleton } from '../skeleton/Skeleton';
import { DotTablePagination, RowsPerPageOption } from './TablePagination';

const skeletonRows = 4;
export interface TableRowProps extends CommonProps {
  /** row identifier that will be passed to onRowClick callback */
  id?: string;
  /** if the row is selected */
  selected?: boolean;
  /** row data where keys map to column ids and values to cell values */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  rowData: any;
}
export interface TableProps extends CommonProps {
  ariaLabel: string;
  /** The table header columns */
  columns: Array<Header>;
  /** Total number of items for paginated table */
  count?: number;
  /** The table body row data.
      If paging/sorting are managed by consumer (onUpdateData callback provided) this is the data for the current page.
      If paging/sorting are managed internally (no onUpdateData callback) this is all the data. */
  data: Array<TableRowProps>;
  /** Message that is shown if data is empty */
  emptyMessage?: string;
  /** Table is loading */
  loading?: boolean;
  /** Maximum height of table container */
  maxHeight?: string;
  /** The sort order of table data 'asc', 'desc' */
  order?: Order;
  /** The ID of the column that you are sorting by */
  orderBy?: string;
  /** Row click event callback */
  onRowClick?: (event: MouseEvent, id: string) => void;
  /** Update data callback if data is managed by consumer */
  onUpdateData?: (
    order: Order,
    orderBy: string,
    page: number,
    rowsPerPage: number
  ) => void;
  /** Rows per page for paginated table */
  rowsPerPage?: RowsPerPageOption;
  /** Table is sortable */
  sortable?: boolean;
  /** Table header is sticky */
  stickyHeader?: boolean;
  /** Toolbar displayed above column headers */
  toolbar?: JSX.Element;
}

export const sortComparator = (
  a: TableRowProps,
  b: TableRowProps,
  orderBy: string
) => {
  if (b.rowData[orderBy] < a.rowData[orderBy]) {
    return -1;
  }
  if (b.rowData[orderBy] > a.rowData[orderBy]) {
    return 1;
  }
  return 0;
};

export const getComparator = (order: Order, orderBy: string) => {
  const comparator = (a: TableRowProps, b: TableRowProps) => {
    const compare = sortComparator(a, b, orderBy);
    return order === 'desc' ? compare : -compare;
  };
  return comparator;
};

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
export const DotTable = ({
  ariaLabel,
  className,
  columns,
  count,
  data,
  'data-testid': dataTestId,
  emptyMessage,
  loading = false,
  maxHeight,
  order = 'asc',
  orderBy,
  onRowClick,
  onUpdateData,
  rowsPerPage,
  stickyHeader = true,
  sortable = true,
  toolbar,
}: TableProps) => {
  const [tableOrder, setOrder] = useState(order);
  const [tableOrderBy, setOrderBy] = useState(orderBy);
  const [tablePage, setPage] = useState(0);
  const [tableRowsPerPage, setRowsPerPage] = useState(rowsPerPage);
  const getSortedData = () => {
    return onUpdateData
      ? data
      : stableSort(data, getComparator(order, orderBy));
  };
  const [pageData, setPageData] = useState(
    getSortedData().slice(0, rowsPerPage ? rowsPerPage : data.length)
  );

  const rootClasses = useStylesWithRootClass(
    rootClassName,
    className,
    loading ? 'loading' : ''
  );

  const updateData = (
    newOrder: Order,
    newOrderBy: string,
    newPage: number,
    newRowsPerPage: number
  ) => {
    const newData = stableSort(data, getComparator(newOrder, newOrderBy));
    setPageData(
      newRowsPerPage
        ? newData.slice(
            newPage * newRowsPerPage,
            newPage * newRowsPerPage + newRowsPerPage
          )
        : newData
    );
  };

  const onSortRequest = (property: string) => {
    const isAsc: boolean = tableOrderBy === property && tableOrder === 'asc';
    const dataOrder = isAsc ? 'desc' : 'asc';
    setOrder(dataOrder);
    setOrderBy(property);
    setPage(0);
    onUpdateData
      ? onUpdateData(dataOrder, property, 0, tableRowsPerPage)
      : updateData(dataOrder, property, 0, tableRowsPerPage);
  };

  const onChangePage = (newPage: number) => {
    setPage(newPage);
    onUpdateData
      ? onUpdateData(tableOrder, tableOrderBy, newPage, tableRowsPerPage)
      : updateData(tableOrder, tableOrderBy, newPage, tableRowsPerPage);
  };

  const onChangeRowsPerPage = (
    evt: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const newRowsPerPage = parseInt(
      evt.target.value,
      rowsPerPage
    ) as RowsPerPageOption;
    setRowsPerPage(newRowsPerPage);
    setPage(0);
    onUpdateData
      ? onUpdateData(tableOrder, tableOrderBy, 0, newRowsPerPage)
      : updateData(tableOrder, tableOrderBy, 0, newRowsPerPage);
  };

  const getSkeletonData = () => {
    const skeletonData = [];
    const skeletonRow = { rowData: {} };
    columns.forEach((column) => {
      skeletonRow.rowData[column.id] = (
        <DotSkeleton width="300">
          <td>{column.label}</td>
        </DotSkeleton>
      );
    });
    for (let i = 0; i < (rowsPerPage ? rowsPerPage : skeletonRows); i++) {
      skeletonData.push(skeletonRow);
    }
    return skeletonData;
  };

  const getData = () => {
    return loading ? getSkeletonData() : onUpdateData ? data : pageData;
  };

  const emptyRows = rowsPerPage ? tableRowsPerPage - data.length : 0;

  return (
    <StyledPaper className={rootClasses} elevation={0}>
      {toolbar}
      <StyledTableContainer
        className="dot-table-container"
        data-testid={dataTestId}
        style={{ maxHeight: maxHeight ? maxHeight : '' }}
      >
        <Table
          aria-label={ariaLabel}
          className="dot-table"
          padding="default"
          stickyHeader={stickyHeader}
        >
          <DotHeaderRow
            columns={columns}
            onRequestSort={onSortRequest}
            order={tableOrder}
            orderBy={tableOrderBy}
            sortable={sortable}
          />
          <DotTableBody
            columns={columns}
            data={getData()}
            emptyMessage={emptyMessage}
            emptyRows={emptyRows}
            onRowClick={onRowClick}
          />
        </Table>
      </StyledTableContainer>
      {rowsPerPage && (
        <DotTablePagination
          count={count}
          onChangePage={onChangePage}
          onChangeRowsPerPage={onChangeRowsPerPage}
          page={tablePage}
          rowsPerPage={tableRowsPerPage}
        />
      )}
    </StyledPaper>
  );
};
