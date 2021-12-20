import React, { useEffect, useState, useRef, ReactNode } from 'react';
import { TableCell } from '@mui/material';
import { CommonProps } from '../CommonProps';
import { useStylesWithRootClass } from '../useStylesWithRootClass';
import { DotIconButton } from '../button/IconButton';

export type textAlignment = 'center' | 'inherit' | 'justify' | 'left' | 'right';

export interface CellProps extends CommonProps {
  align?: textAlignment;
  cellKey?: string;
  colspan?: number;
  id?: string;
  noWrap?: boolean;
  onActionMenuTrigger?: (el: HTMLElement, menuItem: Array<ReactNode>) => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value?: any;
}

/**
 * A wrapper component around the TableCell component from @material-ui.
 */
export const DotBodyCell = ({
  ariaLabel,
  align,
  cellKey,
  className,
  colspan,
  'data-testid': dataTestId,
  noWrap,
  value,
  onActionMenuTrigger,
}: CellProps) => {
  const [showMenu, setShowMenu] = useState(false);
  const wrapperRef = useRef(null);

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
    // on window resize, set action column to menu or icon button
    if (Array.isArray(value)) {
      getActionColumn();
      window.addEventListener('resize', getActionColumn);
      return () => {
        window.removeEventListener(
          'resize',
          Array.isArray(value) && getActionColumn
        );
      };
    }
  }, []);

  // Logic to determine action column as menu or icon button
  const getActionColumn = () => {
    const iconBtnWidth = document.getElementsByClassName(
      'dot-table-action-icon'
    );
    const getTotalActionItem = Array.isArray(value) && value.length;
    const actionTableCellWidth =
      getTotalActionItem *
      (iconBtnWidth.length > 0 && iconBtnWidth[0].clientWidth);

    const isOverflowing =
      actionTableCellWidth > wrapperRef?.current.clientWidth;
    setShowMenu(isOverflowing);
  };
  const rootClasses = useStylesWithRootClass(
    'dot-td',
    className,
    noWrap && 'noWrap',
    Array.isArray(value) && 'actionItems'
  );
  const getTableCellValue = () => {
    if (Array.isArray(value)) {
      return (
        <div className="action-cell-wrapper" ref={wrapperRef}>
          {showMenu ? (
            <DotIconButton
              className="dot-table-action-icon"
              iconId="options"
              iconSize="small"
              onClick={() => onActionMenuTrigger(wrapperRef.current, value)}
              size="small"
            />
          ) : (
            value.map((item, index) => (
              <DotIconButton
                className="dot-table-action-icon"
                data-testid={item.dataTestId}
                disabled={item.disabled}
                iconId={item.iconId}
                iconSize="small"
                key={`${cellKey}-icon-${index}`}
                onClick={item.onclick}
                size="small"
                tooltip={item.tooltip}
              />
            ))
          )}
        </div>
      );
    }
    return value;
  };
  return (
    <TableCell
      align={align}
      aria-label={ariaLabel}
      classes={{ root: rootClasses }}
      colSpan={colspan}
      data-testid={dataTestId}
    >
      {getTableCellValue()}
    </TableCell>
  );
};
