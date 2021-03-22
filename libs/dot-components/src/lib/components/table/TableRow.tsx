import React, { MouseEvent } from 'react';
import { TableRow } from '@material-ui/core';

import { DotBodyCell } from './TableCell';
import { CreateUUID } from '../createUUID';
import { Header } from './TableHeader';
import { CommonProps } from '../CommonProps';
import { TableRowProps } from './Table';

export interface EmptyRowProps {
  cols: number;
  message?: string;
}

export interface RowProps extends CommonProps {
  /** The table column headers */
  columns: Array<Header>;
  /** The table body row data */
  data: TableRowProps;
  /** Event callback */
  onClick?: (event: MouseEvent, id: string) => void;
  /** if the row is selected */
  selected?: boolean;
}

/**
 * A wrapper component around the TableRow component from @material-ui. This component can be used
 * for manipulating data prior to displaying the data inside the table
 */
export const DotTableRow = ({ columns, data, onClick, selected }: RowProps) => {
  const id = data.id;
  const rowData = data.rowData;
  const handleOnClick = (event: MouseEvent) => {
    onClick && onClick(event, id.toString());
  };
  return (
    <TableRow key={CreateUUID()} onClick={handleOnClick} selected={selected}>
      {columns.map((column) => {
        return (
          <DotBodyCell
            align={column.align === 'right'}
            value={rowData[column.id]}
            key={CreateUUID()}
          />
        );
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
