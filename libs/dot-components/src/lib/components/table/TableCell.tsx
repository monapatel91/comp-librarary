import React from 'react';
import { TableCell } from '@material-ui/core';
import { CreateUUID } from '../createUUID';

export interface Cell {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

export interface CellProps {
  align?: boolean;
  colspan?: number;
  id?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value?: any;
}

/**
 * A wrapper component around the TableCell component from @material-ui.
 */
export const DotBodyCell = ({
  align,
  colspan,
  id = CreateUUID(),
  value,
}: CellProps) => {
  const title = value ? value.toString() : '';

  return (
    <TableCell
      align={align ? 'right' : 'left'}
      colSpan={colspan}
      key={id}
      title={title}
    >
      {value}
    </TableCell>
  );
};
