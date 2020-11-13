import React from 'react';
import { TableRow } from '@material-ui/core';

import { Cell, CreateUUID, DotBodyCell } from './TableCell';

export interface EmptyRowProps {
  cols: number;
  message?: string;
}

export interface RowProps {
  /** The table body row data */
  data: Cell;
}

/**
 * A wrapper component around the TableRow component from @material-ui. This component can be used
 * for manipulating data prior to displaying the data inside the table
 */
export const DotTableRow = ({ data }: RowProps) => {
  // delete ID from data before displaying
  delete data.id;
  const rowData = Object.values(data);
  return (
    <TableRow key={CreateUUID()}>
      {rowData.map((cellData: string | number) => {
        return <DotBodyCell value={cellData} key={CreateUUID()} />;
      })}
    </TableRow>
  );
};

export const EmptyDotRow = ({
  cols,
  message = 'No data found',
}: EmptyRowProps) => {
  return (
    <TableRow className="empty-row" key={CreateUUID()}>
      <DotBodyCell colspan={cols} value={message} />
    </TableRow>
  );
};
