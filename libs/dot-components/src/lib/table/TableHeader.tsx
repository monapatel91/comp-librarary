import React, { MouseEvent } from 'react';
import {
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
} from '@material-ui/core';
import { Order } from './TableBody';
import { CreateUUID } from './TableCell';

export interface Header {
  id: string;
  label?: string;
  numeric?: boolean;
}

export interface HeaderProps {
  columns: Array<Header>;
  onRequestSort: (event: MouseEvent<unknown>, property: string) => void;
  order?: Order;
  /** The ID of the column that you are sorting by */
  orderBy?: string;
  sortable: boolean;
}

export interface HeaderCellProps {
  align?: boolean;
  createSortHandler?: Function;
  id?: string;
  /** The order of data which is being sorted by */
  order?: Order;
  /** The ID of the column that you are sorting by */
  orderBy?: string;
  /** Determines if sorting is enabled */
  sortable?: boolean;
  sortDirection?: 'desc' | 'asc' | undefined;
  /** The UID of the cell, if not provided then a randomly generated hash will be created using
   * CreateUUID() */
  uid: string;
  value?: string;
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
  const createSortHandler = (property: string) => (
    event: MouseEvent<unknown>
  ) => {
    onRequestSort(event, property);
  };
  return (
    <TableHead>
      <TableRow>
        {columns.map((cell: Header) => (
          <DotHeaderCell
            align={cell.numeric}
            createSortHandler={createSortHandler}
            id={cell.id}
            key={CreateUUID()}
            order={order}
            orderBy={orderBy}
            sortable={sortable}
            sortDirection={orderBy === cell.id ? order : undefined}
            uid={CreateUUID()}
            value={cell.label}
          />
        ))}
      </TableRow>
    </TableHead>
  );
};

// TO-DO: numeric alignment only works on header
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
  sortable = false,
  sortDirection,
  uid,
  value,
}: HeaderCellProps) => {
  if (sortable) {
    const orderById: boolean = orderBy === id;
    return (
      <TableCell
        align={align ? 'right' : 'left'}
        key={uid}
        sortDirection={sortDirection}
        title={value}
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
    <TableCell align={align ? 'right' : 'left'} key={uid} title={value}>
      {value}
    </TableCell>
  );
};
