import React from 'react';
import { TableBody } from '@material-ui/core';

import { Cell, CreateUUID } from './TableCell';
import { DotTableRow, EmptyDotRow } from './TableRow';

export type Order = 'asc' | 'desc';

export interface TableBodyProps {
  cols: number;
  /** The table body row data */
  data: Array<Cell>;
  emptyMessage?: string;
  /** The order of data which is being sorted by */
  order?: Order;
  /** The ID of the column that you are sorting by */
  orderBy?: string;
  /** Determines if sorting is enabled */
  sortable?: boolean;
}

/**
 * A wrapper component around the TableBody component from @material-ui. This component can be used
 * to determine the functionality of the table.
 */
export const DotTableBody = ({
  cols,
  data,
  emptyMessage,
  order,
  orderBy,
  sortable = false,
}: TableBodyProps) => {
  if (data.length === 0) {
    return (
      <TableBody>
        <EmptyDotRow cols={cols} message={emptyMessage} />
      </TableBody>
    );
  }

  return (
    <TableBody>
      {data.map((row) => {
        return <DotTableRow data={row} key={CreateUUID()} />;
      })}
    </TableBody>
  );
};
