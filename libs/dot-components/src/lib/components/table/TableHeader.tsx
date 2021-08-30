import React, { MouseEvent, ReactNode } from 'react';
import {
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
} from '@material-ui/core';
import { Order } from './TableBody';
import { CreateUUID } from '../createUUID';
import { textAlignment } from './TableCell';

export interface DotColumnHeader {
  align?: textAlignment;
  id: string;
  label?: string;
  sortable?: boolean;
  truncate?: boolean;
  width?: string;
}

export interface HeaderProps {
  columns: Array<DotColumnHeader>;
  onRequestSort: (property: string) => void;
  order?: Order;
  /** The ID of the column that you are sorting by */
  orderBy?: string;
  sortable: boolean;
}

export interface HeaderCellProps {
  /** Allows to align cell text left, right, center  */
  align?: textAlignment;
  /** Click event function to handle sorting */
  createSortHandler?: (
    property: string
  ) => (event: MouseEvent<unknown>) => void;
  /** The Id of table cell */
  id?: string;
  /** The order of data which is being sorted by */
  order?: Order;
  /** The ID of the column that you are sorting by */
  orderBy?: string;
  /** Determines if sorting is enabled */
  sortable?: boolean;
  /** Determines sorting order of ascending or desceding */
  sortDirection?: 'desc' | 'asc' | undefined;
  /**Allows table cell text truncated and displays in only one line */
  truncate?: boolean;
  /** The UID of the cell, if not provided then a randomly generated hash will be created using
   * CreateUUID() */
  uid: string;
  /** The value of header cell*/
  value?: ReactNode;
  /** The width of the column */
  width?: string;
}

/**
 * A wrapper component around the TableHead component from @material-ui. This component can be used
 * to determine the functionality of the table header.
 */
export const DotHeaderRow = ({
  columns,
  onRequestSort,
  order,
  orderBy,
  sortable = false,
}: HeaderProps) => {
  const createSortHandler =
    (property: string) => (event: MouseEvent<unknown>) => {
      onRequestSort(property);
    };
  return (
    <TableHead classes={{ root: 'dot-thead' }}>
      <TableRow classes={{ root: 'dot-tr' }}>
        {columns.map((cell: DotColumnHeader) => (
          <DotHeaderCell
            align={cell.align}
            createSortHandler={createSortHandler}
            id={cell.id}
            key={CreateUUID()}
            order={order}
            orderBy={orderBy}
            truncate={cell.truncate}
            sortable={sortable && cell.sortable}
            sortDirection={orderBy === cell.id ? order : undefined}
            uid={CreateUUID()}
            value={cell.label}
            width={cell.width}
          />
        ))}
      </TableRow>
    </TableHead>
  );
};

/**
 * A wrapper component around the TableCell component from @material-ui. This component should only
 * be used inside of DotHeaderRow.
 */
export const DotHeaderCell = ({
  align,
  createSortHandler,
  id,
  order,
  orderBy,
  sortable = true,
  sortDirection,
  uid,
  value,
  width,
}: HeaderCellProps) => {
  const headerTitle = typeof value === 'string' ? value : null;
  if (sortable) {
    const orderById: boolean = orderBy === id;
    return (
      <TableCell
        align={align}
        classes={{ root: 'dot-th' }}
        key={uid}
        sortDirection={sortDirection}
        style={{ width: width ? width : '' }}
        title={headerTitle}
      >
        <TableSortLabel
          active={orderById}
          direction={orderById ? order : 'asc'}
          onClick={createSortHandler && createSortHandler(id)}
        >
          {value}
        </TableSortLabel>
      </TableCell>
    );
  }

  return (
    <TableCell
      align={align}
      key={uid}
      title={headerTitle}
      style={{ width: width ? width : '' }}
    >
      {value}
    </TableCell>
  );
};
