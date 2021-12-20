import React, { MouseEvent, ReactNode } from 'react';
import { TableRow } from '@mui/material';

import { DotBodyCell } from './TableCell';
import { CreateUUID } from '../createUUID';
import { DotColumnHeader } from './TableHeader';
import { CommonProps } from '../CommonProps';
import { useStylesWithRootClass } from '../useStylesWithRootClass';
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
  onActionMenuTrigger: (el: HTMLElement, menuItem: Array<ReactNode>) => void;
  /** Event callback */
  onClick?: (event: MouseEvent, id: string) => void;
  /** uniques key of table cell */
  rowKey: string;
  /** if the row is selected */
  selected?: boolean;
}

/**
 * A wrapper component around the TableRow component from @material-ui. This component can be used
 * for manipulating data prior to displaying the data inside the table
 */
export const DotTableRow = ({
  columns,
  className,
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
  const rootClasses = useStylesWithRootClass('dot-tr', className);
  return (
    <TableRow
      classes={{ root: rootClasses }}
      onClick={handleOnClick}
      selected={selected}
    >
      {columns.map((column, index) => {
        return (
          <DotBodyCell
            align={column.align}
            cellKey={rowKey}
            className={rowData.className && `${rowData.className}-${column.id}`}
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
