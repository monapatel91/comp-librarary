import React, { MouseEvent, useState } from 'react';
import { TableBody } from '@material-ui/core';

import { CreateUUID } from '../createUUID';
import { DotTableRow, EmptyDotRow } from './TableRow';
import { DotColumnHeader } from './TableHeader';
import { TableRowProps } from './Table';
import { CommonProps } from '../CommonProps';
import { StyledMenu } from './Table.styles';

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
  const [menuProps, setMenuProps] = useState([]);
  const [open, setOpen] = useState(false);
  const handleActionMenuTrigger = (el: HTMLElement, menuItem: []) => {
    setAnchorEl(el);
    setMenuProps(menuItem);
    setOpen(!open);
  };
  const menuId = CreateUUID();
  const tableId = CreateUUID();
  const onLeave = () => {
    setOpen(false);
  };

  if (data.length === 0) {
    return (
      <TableBody>
        <EmptyDotRow cols={columns.length} message={emptyMessage} />
      </TableBody>
    );
  }
  return (
    <>
      <TableBody classes={{ root: 'dot-tbody' }}>
        {data.map((row, index) => {
          return (
            <DotTableRow
              columns={columns}
              data={row}
              key={index}
              onActionMenuTrigger={handleActionMenuTrigger}
              onClick={onRowClick}
              rowKey={`${tableId}-row-${index}`}
              selected={row.selected}
            />
          );
        })}
      </TableBody>
      <StyledMenu
        anchorEl={anchorEl}
        id={menuId}
        menuItems={menuProps}
        onLeave={onLeave}
        open={open}
      />
    </>
  );
};
