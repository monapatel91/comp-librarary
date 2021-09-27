import React, { MouseEvent, useState } from 'react';
import { TableBody } from '@material-ui/core';

import { CreateUUID } from '../createUUID';
import { DotTableRow, EmptyDotRow } from './TableRow';
import { DotColumnHeader } from './TableHeader';
import { TableRowProps } from './Table';
import { CommonProps } from '../CommonProps';
import { DotMenu } from '../menu/Menu';
import { useEffect } from 'react';

export type Order = 'asc' | 'desc';

export interface TableBodyProps extends CommonProps {
  /** The table column headers */
  columns: Array<DotColumnHeader>;
  /** The table body row data */
  data: Array<TableRowProps>;
  /** Message to show if no data */
  emptyMessage?: string;
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
  onRowClick,
}: TableBodyProps) => {
  const [anchorEl, setAnchorEl] = useState(null);

  let tableId: string;
  useEffect(() => {
    tableId = CreateUUID();
  });

  const handleActionMenuTrigger = (el: HTMLElement) => {
    setAnchorEl(el);
  };

  if (data.length === 0) {
    return (
      <TableBody>
        <EmptyDotRow cols={columns.length} message={emptyMessage} />
      </TableBody>
    );
  }

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <>
      <TableBody classes={{ root: 'dot-tbody' }}>
        {data.map((row, index) => {
          return (
            <DotTableRow
              columns={columns}
              data={row}
              key={`${tableId}-row-${index}`}
              onClick={onRowClick}
              selected={row.selected}
              onActionMenuTrigger={handleActionMenuTrigger}
            />
          );
        })}
      </TableBody>
      <DotMenu
        anchorEl={anchorEl}
        menuItems={[
          { children: 'blah' },
          { children: 'blah' },
          { children: 'blah' },
        ]}
        id="action-menu"
        open={open}
      />
    </>
  );
};
