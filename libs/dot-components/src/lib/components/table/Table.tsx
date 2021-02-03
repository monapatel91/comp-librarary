import React, { MouseEvent } from 'react';
import { Table, TablePagination } from '@material-ui/core';
import { CommonProps } from '../CommonProps';
import { useStylesWithRootClass } from '../useStylesWithRootClass';
import { rootClassName, StyledTableContainer } from './Table.styles';

import { DotTableBody, Order } from './TableBody';
import { DotHeaderRow, Header } from './TableHeader';
import { DotProgress } from '../progress/Progress';

const rowsPerPageOptions = [10, 25, 50, 100, 150, 200];

export interface TableProps extends CommonProps {
  ariaLabel: string;
  /** The table header columns */
  columns: Array<Header>;
  /**The total count of items */
  count: number;
  /** The table body row data */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: Array<any>;
  emptyMessage?: string;
  handleRequestSort: (sortBy: string) => void;
  loading?: boolean;
  order?: Order;
  /** The ID of the column that you are sorting by */
  orderBy?: string;
  page: number;
  rowsPerPage: number;
  sortable?: boolean;
  stickyHeader?: boolean;
  setRowsPerPage: (rows: number) => void;
  setPage: (pageNumber: number) => void;
}

// https://material-ui.com/components/tables/#custom-pagination-options
/**
 * A wrapper component around the Table component from @material-ui. This component can be used for
 *  creating a common structure for tables in the system.
 */
export const DotTable = ({
  ariaLabel,
  className,
  columns,
  count,
  data,
  'data-testid': dataTestId,
  emptyMessage,
  handleRequestSort,
  loading = false,
  order = 'asc',
  orderBy,
  page,
  rowsPerPage = 10,
  stickyHeader = true,
  sortable = true,
  setPage,
  setRowsPerPage,
}: TableProps) => {
  const rootClasses = useStylesWithRootClass(
    rootClassName,
    className,
    loading ? 'loading' : ''
  );
  const handleChangePage = (event: MouseEvent | null, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleOnRequestSort = (event: MouseEvent<unknown>, sortBy: string) => {
    handleRequestSort(sortBy);
  };

  return (
    <StyledTableContainer className={rootClasses} data-testid={dataTestId}>
      <div className="progress-container" hidden={!loading}>
        <DotProgress />
      </div>
      <Table
        aria-label={ariaLabel}
        className="dot-table"
        stickyHeader={stickyHeader}
      >
        <DotHeaderRow
          columns={columns}
          onRequestSort={handleOnRequestSort}
          order={order}
          orderBy={orderBy}
          sortable={sortable}
        />
        <DotTableBody
          cols={columns.length}
          data={data}
          emptyMessage={emptyMessage}
          order={order}
          orderBy={orderBy}
          sortable={sortable}
        />
      </Table>
      <TablePagination
        rowsPerPageOptions={rowsPerPageOptions}
        className="dot-table-pagination"
        component="div"
        count={count}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </StyledTableContainer>
  );
};

export default DotTable;
