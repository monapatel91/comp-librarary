import React, { ChangeEvent, MouseEvent } from 'react';
import { CommonProps } from '../CommonProps';
import { useStylesWithRootClass } from '../useStylesWithRootClass';
import { rootClassName, StyledTablePagination } from './TablePagination.styles';

const rowsPerPageOptions = [10, 25, 50, 100, 150, 200] as const;

export type RowsPerPageOption = typeof rowsPerPageOptions[number];

export interface TablePaginationProps extends CommonProps {
  /** Total number of rows (-1 if unknown) */
  count: number;
  /** Callback fired when the page is changed */
  onPageChange: (newPage: number) => void;
  /** Callback fired when the number of rows per page is changed */
  onRowsPerPageChange?: (
    event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void;
  /** The zero-based index of the current page */
  page?: number;
  /** The number of rows per page */
  rowsPerPage?: RowsPerPageOption;
}

/** This component wraps the TablePagination component from @material-ui. */
export const DotTablePagination = ({
  ariaLabel,
  className,
  count,
  'data-testid': dataTestId,
  onPageChange,
  onRowsPerPageChange,
  page = 0,
  rowsPerPage = 10,
}: TablePaginationProps) => {
  const rootClasses = useStylesWithRootClass(rootClassName, className);

  const handlePageChange = (event: MouseEvent | null, newPage: number) => {
    onPageChange && onPageChange(newPage);
  };

  const handleChangeRowsPerPage = (
    evt: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    onRowsPerPageChange && onRowsPerPageChange(evt);
  };

  return (
    <StyledTablePagination
      aria-label={ariaLabel}
      classes={{
        root: rootClasses,
        displayedRows: 'dot-typography',
        selectIcon: 'dot-icon',
        selectLabel: 'dot-typography',
        menuItem: 'dot-li',
      }}
      component="div"
      count={count}
      data-testid={dataTestId}
      onPageChange={handlePageChange}
      onRowsPerPageChange={handleChangeRowsPerPage}
      page={page}
      rowsPerPage={rowsPerPage}
      rowsPerPageOptions={[...rowsPerPageOptions]}
    />
  );
};
