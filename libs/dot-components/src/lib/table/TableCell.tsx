import React from 'react';
import { TableCell } from '@material-ui/core';

// This is not secure, DO NOT USE for important information such as session data
export const CreateUUID = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0,
      v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

export interface Cell {
  [key: string]: string | number;
}

export interface CellProps {
  align?: boolean;
  /** The UID of the cell, if not provided then a randomly generated hash will be created using
   * CreateUUID() */
  colspan?: number;
  id?: string;
  value?: string | number;
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
