import React, { useEffect, useState } from 'react';
// TODO: Get rid of PubSub, figure out how to make React work with this.
import PubSub from 'pubsub-js';
import { Header } from './TableHeader';
import DotTable from './Table';
import { Order } from './TableBody';
import { TableDataWithPagination } from './TableDataWithPagination';
import './Table.scss';

export interface RemotelyPaginatedTableProps {
  ariaLabel: string;
  /** The table header columns */
  columns: Array<Header>;
  count?: number;
  defaultOrder?: Order;
  /** The ID of the column that you are sorting by */
  defaultOrderBy?: string;
  emptyMessage?: string;
  loading?: boolean;
  onTableUpdate: (
    rowsPerPage: number,
    page: number,
    order: Order,
    orderBy?: string
  ) => Promise<TableDataWithPagination | null>;
  page?: number;
  refreshTopicName?: string;
  rowsPerPage?: number;
  sortable?: boolean;
  stickyHeader?: boolean;
}

// https://material-ui.com/components/tables/#custom-pagination-options
/**
 * A wrapper component around the Table component from @material-ui. This component can be used for
 *  creating a common structure for tables in the system.
 */
export const RemotelyPaginatedTable = ({
  ariaLabel,
  columns,
  defaultOrder = 'asc',
  defaultOrderBy,
  emptyMessage,
  loading = false,
  onTableUpdate,
  refreshTopicName,
  stickyHeader = true,
  sortable = true,
}: RemotelyPaginatedTableProps) => {
  const [count, updateCount] = useState(0);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [data, updateData] = useState<Array<any>>([]);
  const [order, updateOrder] = useState(defaultOrder);
  const [orderBy, updateOrderBy] = useState(defaultOrderBy);
  const [page, updatePage] = useState(0);
  const [rowsPerPage, updateRowsPerPage] = useState(10);
  const [dirty, updateDirty] = useState(new Date());

  useEffect(() => {
    if (!refreshTopicName) {
      return;
    }
    PubSub.subscribe(refreshTopicName, (_msg: string, _data: string) => {
      updateDirty(new Date());
    });
    return () => {
      PubSub.unsubscribe(refreshTopicName);
    };
  });

  useEffect(() => {
    onTableUpdate(rowsPerPage, page, order, orderBy)
      .then((paginationData) => {
        if (paginationData) {
          updateCount(paginationData.pagination.total_elements);
          updateData(paginationData.data);
        }
      })
      .catch((e) => console.error(e));
  }, [dirty, order, orderBy, page, rowsPerPage]);

  const handleRequestSort = (property: string) => {
    const isAsc: boolean = orderBy === property && order === 'asc';

    updateOrder(isAsc ? 'desc' : 'asc');
    updateOrderBy(property);
  };

  const updatePageNumber = (pageNum: number) => {
    updatePage(pageNum);
  };

  const updateRows = (rows: number) => {
    updateRowsPerPage(rows);
  };

  return (
    <DotTable
      ariaLabel={ariaLabel}
      columns={columns}
      count={count}
      data={data}
      emptyMessage={emptyMessage}
      handleRequestSort={handleRequestSort}
      loading={loading}
      order={order}
      orderBy={orderBy}
      page={page}
      rowsPerPage={rowsPerPage}
      setPage={(p) => updatePageNumber(p)}
      stickyHeader={stickyHeader}
      sortable={sortable}
      setRowsPerPage={(rp) => updateRows(rp)}
    />
  );
};

export default RemotelyPaginatedTable;
