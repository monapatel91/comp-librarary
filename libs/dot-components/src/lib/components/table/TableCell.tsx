import React, { useEffect, useState, useRef } from 'react';
import { TableCell } from '@material-ui/core';
import { CommonProps } from '../CommonProps';
import { CreateUUID } from '../createUUID';
import { useStylesWithRootClass } from '../useStylesWithRootClass';
import { DotIconButton } from '../button/IconButton';
import { DotMenu } from '@digital-ai/dot-components';

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
  const [showMenu, setShowMenu] = useState(false);
  const [open, setOpen] = useState(false);
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
    const actionColumn = document.getElementsByClassName('actionItems');
    const iconBtnWidth = document.getElementsByClassName('dot-icon-btn');
    console.log(Array.isArray(value) && value);
    const getTotalActionItem =
      Array.isArray(value) && value[0].iconActions.length;

    const actionTableCellWidth =
      getTotalActionItem *
      (iconBtnWidth.length > 0 && iconBtnWidth[0].clientWidth);

    Array.from(actionColumn).forEach((column) => {
      const isOverflowing =
        column.clientWidth < wrapperRef?.current.clientWidth;
      if (isOverflowing) {
        setShowMenu(true);
      } else {
        setShowMenu(false);
      }
    });
  };
  const handleToggle = () => {
    setOpen(!open);
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
      key={id}
    >
      <div ref={wrapperRef} style={{ minWidth: 88 }}>
        {Array.isArray(value)
          ? showMenu
            ? value.map((item) => (
                <>
                  <DotIconButton iconId="options" onClick={handleToggle} />
                  <DotMenu
                    menuItems={item.iconActions}
                    id="action-buttons"
                    open={open}
                  />
                </>
              ))
            : value.map((item) =>
                item.iconActions.map(
                  (
                    icons: {
                      key: string;
                      onclick: (
                        event: React.MouseEvent<HTMLButtonElement, MouseEvent>
                      ) => void;
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
          : value}
      </div>
    </TableCell>
  );
};
