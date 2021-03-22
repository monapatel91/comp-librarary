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
  onChangePage: (newPage: number) => void;
  /** Callback fired when the number of rows per page is changed */
  onChangeRowsPerPage?: (
    event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void;
  /** The zero-based index of the current page */
  page?: number;
  /** The number of rows per page */
  rowsPerPage?: RowsPerPageOption;
}

/** This component wraps the TablePagination component from @material-ui. */
export const DotTablePagination = ({
  className,
  count,
  'data-testid': dataTestId,
  onChangePage,
  onChangeRowsPerPage,
  page = 0,
  rowsPerPage = 10,
}: TablePaginationProps) => {
  const rootClasses = useStylesWithRootClass(rootClassName, className);

  const handlePageChange = (event: MouseEvent | null, newPage: number) => {
    onChangePage && onChangePage(newPage);
  };

  const handleChangeRowsPerPage = (evt) => {
    onChangeRowsPerPage && onChangeRowsPerPage(evt);
  };

  return (
    <StyledTablePagination
      classes={{ root: rootClasses }}
      component="div"
      count={count}
      data-testid={dataTestId}
      onChangePage={handlePageChange}
      onChangeRowsPerPage={handleChangeRowsPerPage}
      page={page}
      rowsPerPage={rowsPerPage}
      rowsPerPageOptions={[...rowsPerPageOptions]}
    />
  );
};
