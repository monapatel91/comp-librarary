import React, { useEffect } from 'react';
import { TableCell } from '@material-ui/core';
import { CommonProps } from '../CommonProps';
import { CreateUUID } from '../createUUID';
import { useStylesWithRootClass } from '../useStylesWithRootClass';

export type textAlignment = 'center' | 'inherit' | 'justify' | 'left' | 'right';

export interface CellProps extends CommonProps {
  align?: textAlignment;
  colspan?: number;
  id?: string;
  noWrap?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value?: any;
}

/**
 * A wrapper component around the TableCell component from @material-ui.
 */
export const DotBodyCell = ({
  ariaLabel,
  align,
  className,
  colspan,
  'data-testid': dataTestId,
  id = CreateUUID(),
  noWrap,
  value,
}: CellProps) => {
  useEffect(() => {
    const noWrapTableCell = document.getElementsByClassName('noWrap');

    Array.from(noWrapTableCell as HTMLCollectionOf<HTMLElement>).forEach(
      (truncatedText) => {
        const isOverflowing =
          truncatedText.clientWidth < truncatedText.scrollWidth ||
          truncatedText.clientHeight < truncatedText.scrollHeight;
        if (isOverflowing) {
          truncatedText.setAttribute('title', truncatedText.innerText);
        }
      }
    );
  });
  const rootClasses = useStylesWithRootClass(
    'dot-td',
    className,
    noWrap ? 'noWrap' : ''
  );
  return (
    <TableCell
      aria-label={ariaLabel}
      align={align}
      classes={{ root: rootClasses }}
      colSpan={colspan}
      data-testid={dataTestId}
      key={id}
    >
      {value}
    </TableCell>
  );
};
