import React, { MouseEvent } from 'react';
import { TableBody } from '@material-ui/core';

import { CreateUUID } from '../createUUID';
import { DotTableRow, EmptyDotRow } from './TableRow';
import { DotColumnHeader } from './TableHeader';
import { TableRowProps } from './Table';
import { CommonProps } from '../CommonProps';

export type Order = 'asc' | 'desc';

export interface TableBodyProps extends CommonProps {
  /** The table column headers */
  columns: Array<DotColumnHeader>;
  /** The table body row data */
  data: Array<TableRowProps>;
  /** Message to show if no data */
  emptyMessage?: string;
  /** Empty rows to show */
  emptyRows?: number;
  /** Row click event callback */
  onRowClick?: (event: MouseEvent, id: string) => void;
}

/**
 * A wrapper component around the TableBody component from @material-ui. This component can be used
 * to determine the functionality of the table.
 */
export const DotTableBody = ({
  columns,
  data,
  emptyMessage,
  emptyRows,
  onRowClick,
}: TableBodyProps) => {
  if (data.length === 0) {
    return (
      <TableBody>
        <EmptyDotRow cols={columns.length} message={emptyMessage} />
      </TableBody>
    );
  }
  const emptyRowArray = [];
  if (emptyRows) {
    for (let i = 0; i < emptyRows; i++) {
      emptyRowArray.push(<EmptyDotRow cols={columns.length} message="" />);
    }
  }
  return (
    <TableBody classes={{ root: 'dot-tbody' }}>
      {data.map((row) => {
        return (
          <DotTableRow
            columns={columns}
            data={row}
            key={CreateUUID()}
            onClick={onRowClick}
            selected={row.selected}
          />
        );
      })}
      {emptyRowArray.map((emptyRow) => {
        return emptyRow;
      })}
    </TableBody>
  );
};
