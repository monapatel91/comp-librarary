import React, { useEffect, useState, useRef, MouseEvent, Key } from 'react';
import { TableCell } from '@material-ui/core';
import { CommonProps } from '../CommonProps';
import { CreateUUID } from '../createUUID';
import { useStylesWithRootClass } from '../useStylesWithRootClass';
import { DotIconButton } from '../button/IconButton';

export type textAlignment = 'center' | 'inherit' | 'justify' | 'left' | 'right';

export interface CellProps extends CommonProps {
  align?: textAlignment;
  colspan?: number;
  id?: string;
  noWrap?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value?: any;
  onActionMenuTrigger?: (el: HTMLElement) => void;
  key?: Key;
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
  onActionMenuTrigger,
  key: cellKey,
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
    }
    if (Array.isArray(value)) {
      window.addEventListener('resize', getActionColumn);
      return () => {
        window.removeEventListener(
          'resize',
          Array.isArray(value) && getActionColumn
        );
      };
    }
  });
  // on table cell resize, set action column to menu or icon button
  useEffect(() => {
    const elements = document.getElementsByClassName('actionItems');
    if (elements.length > 0) {
      Array.from(elements).forEach((actionColumn) => {
        actionColumn.addEventListener('resize', getActionColumn);
        return () => {
          actionColumn.removeEventListener('resize', getActionColumn);
        };
      });
    }
  }, []);

  // Logic to determine action column as menu or icon button
  const getActionColumn = () => {
    const iconBtnWidth = document.getElementsByClassName('dot-icon-btn');

    const getTotalActionItem =
      Array.isArray(value) && value[0].iconActions.length;
    const actionTableCellWidth =
      getTotalActionItem *
        (iconBtnWidth.length > 0 && iconBtnWidth[0].clientWidth) +
      16 * 2;

    const isOverflowing =
      actionTableCellWidth > wrapperRef?.current.clientWidth;
    if (isOverflowing) {
      setShowMenu(true);
    } else {
      setShowMenu(false);
    }
  };
  const rootClasses = useStylesWithRootClass(
    'dot-td',
    className,
    noWrap ? 'noWrap' : Array.isArray(value) ? 'actionItems' : ''
  );
  return (
    <TableCell
      aria-label={ariaLabel}
      align={align}
      classes={{ root: rootClasses }}
      colSpan={colspan}
      data-testid={dataTestId}
    >
      <div ref={wrapperRef} style={{ width: '100%' }}>
        {Array.isArray(value) ? (
          showMenu ? (
            <DotIconButton
              key={`${cellKey}-action`}
              iconId="options"
              onClick={() => onActionMenuTrigger(wrapperRef.current)}
            />
          ) : (
            value.map((item) =>
              item.iconActions.map(
                (
                  icons: {
                    key: string;
                    onclick: (event: MouseEvent) => void;
                  },
                  index: React.Key
                ) => (
                  <DotIconButton
                    key={index}
                    iconId={icons.key}
                    onClick={icons.onclick}
                  />
                )
              )
            )
          )
        ) : (
          value
        )}
      </div>
    </TableCell>
  );
};
