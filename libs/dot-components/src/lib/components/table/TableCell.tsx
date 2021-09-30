import React, { useEffect, useState, useRef, MouseEvent, Key } from 'react';
import { TableCell } from '@material-ui/core';
import { CommonProps } from '../CommonProps';
import { useStylesWithRootClass } from '../useStylesWithRootClass';
import { DotIconButton } from '../button/IconButton';

export type textAlignment = 'center' | 'inherit' | 'justify' | 'left' | 'right';

export interface CellProps extends CommonProps {
  align?: textAlignment;
  colspan?: number;
  cellKey?: Key;
  id?: string;
  noWrap?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value?: any;
  onActionMenuTrigger?: (el: HTMLElement, menuItem: []) => void;
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
    const getTotalActionItem = Array.isArray(value) && value[0].actions.length;
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
  return (
    <TableCell
      aria-label={ariaLabel}
      align={align}
      classes={{ root: rootClasses }}
      colSpan={colspan}
      data-testid={dataTestId}
    >
      {Array.isArray(value) ? (
        <div ref={wrapperRef} className="action-cell-wrapper">
          {showMenu ? (
            <DotIconButton
              className="dot-table-action-icon"
              iconId="options"
              iconSize="small"
              key={`${cellKey}-action`}
              onClick={() =>
                onActionMenuTrigger(wrapperRef.current, value[0].actions)
              }
              size="small"
            />
          ) : (
            value.map((item) =>
              item.actions.map(
                (
                  icons: {
                    key: string;
                    onclick: (event: MouseEvent) => void;
                  },
                  index: React.Key
                ) => (
                  <DotIconButton
                    className="dot-table-action-icon"
                    iconId={icons.key}
                    iconSize="small"
                    key={index}
                    onClick={icons.onclick}
                    size="small"
                  />
                )
              )
            )
          )}
        </div>
      ) : (
        value
      )}
    </TableCell>
  );
};
