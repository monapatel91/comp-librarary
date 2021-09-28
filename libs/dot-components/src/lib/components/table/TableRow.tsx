import React, { MouseEvent, Key } from 'react';
import { TableRow } from '@material-ui/core';

import { DotBodyCell } from './TableCell';
import { CreateUUID } from '../createUUID';
import { DotColumnHeader } from './TableHeader';
import { CommonProps } from '../CommonProps';
import { TableRowProps } from './Table';

export interface EmptyRowProps {
  cols: number;
  message?: string;
}

export interface RowProps extends CommonProps {
  /** The table column headers */
  columns: Array<DotColumnHeader>;
  /** The table body row data */
  data: TableRowProps;
  /** Event callback of action button of menu */
  onActionMenuTrigger: (el: HTMLElement, menuItem: []) => void;
  /** Event callback */
  onClick?: (event: MouseEvent, id: string) => void;
  /** uniques key of table cell */
  rowKey: Key;
  /** if the row is selected */
  selected?: boolean;
}

/**
 * A wrapper component around the TableRow component from @material-ui. This component can be used
 * for manipulating data prior to displaying the data inside the table
 */
export const DotTableRow = ({
  columns,
  data,
  onActionMenuTrigger,
  onClick,
  rowKey,
  selected,
}: RowProps) => {
  const id = data.id;
  const rowData = data.rowData;
  const handleOnClick = (event: MouseEvent) => {
    onClick && onClick(event, id.toString());
  };
  return (
    <TableRow
      classes={{ root: 'dot-tr' }}
      onClick={handleOnClick}
      selected={selected}
    >
      {columns.map((column, index) => {
        return (
          <DotBodyCell
            align={column.align}
            cellKey={`${rowKey}-${index}`}
            key={index}
            noWrap={column.truncate}
            onActionMenuTrigger={(menuRef, menuItem) =>
              onActionMenuTrigger(menuRef, menuItem)
            }
            value={rowData[column.id]}
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
