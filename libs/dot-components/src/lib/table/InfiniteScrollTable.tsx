import React, { Fragment, useEffect, useState } from 'react';
import {
  AutoSizer,
  Column,
  Index,
  InfiniteLoader,
  Table,
} from 'react-virtualized';
import { Order } from './TableBody';
import { TableDataWithPagination } from './TableDataWithPagination';

import './InfiniteScrollTable.scss';

export interface InfiniteColumn {
  dataKey: string;
  label: string;
  width: number;
}

export type OnTableUpdate = (
  rowsPerPage: number,
  page: number,
  order?: Order,
  orderBy?: string
) => Promise<TableDataWithPagination | null>;

export interface InfiniteScrollTableProps {
  ariaLabel: string;
  columns: Array<InfiniteColumn>;
  /** specify the height of the table header rows */
  'data-testid'?: string;
  headerHeight?: number;
  /** specify the height of the table */
  height: number;
  onTableUpdate: OnTableUpdate;
  /** specify the total number of rows */
  rowCount?: number;
  /** specify the height of the table body rows */
  rowHeight?: number;
  rowsPerPage?: number;
  /**
   * Threshold at which to pre-fetch data. A threshold X means that data will start loading when
   * a user scrolls within X rows. Defaults to 15.
   */
  threshold?: number;
  filters?: string | Array<string> | null;
}

export const InfiniteScrollTable = ({
  ariaLabel,
  columns,
  'data-testid': dataTestId,
  height,
  headerHeight = 40,
  rowsPerPage = 50,
  onTableUpdate,
  rowHeight = 40,
  threshold = 15,
  filters = null,
}: InfiniteScrollTableProps) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [items, updateItems] = useState<Array<any>>([]);
  const [currentPage, updateCurrentPage] = useState<number>(0);
  const [totalCount, updateTotalCount] = useState<number>(0);

  function loadMoreData(page: number, reset = false) {
    return onTableUpdate(rowsPerPage, page, 'asc')
      .then((tableData) => {
        if (tableData) {
          if (!reset) {
            updateItems(items.concat(tableData.data));
          } else {
            updateItems(tableData.data);
          }
          updateCurrentPage(tableData.pagination.current_page);
          updateTotalCount(tableData.pagination.total_elements);
        }
      })
      .finally();
  }

  useEffect(() => {
    loadMoreData(0, true);
  }, [filters]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Fragment>
      <div className="infinite-scroll-container" data-testid={dataTestId}>
        <InfiniteLoader
          isRowLoaded={(params: Index) => {
            return !!items[params.index];
          }}
          loadMoreRows={() => loadMoreData(currentPage + 1)}
          rowCount={totalCount}
          threshold={threshold}
        >
          {({ onRowsRendered, registerChild }) => (
            <AutoSizer>
              {({ width }) => (
                <Table
                  aria-label={ariaLabel}
                  ref={registerChild}
                  onRowsRendered={onRowsRendered}
                  rowClassName="infinite-scroll-table-row"
                  headerHeight={headerHeight}
                  width={width}
                  height={height}
                  rowHeight={rowHeight}
                  rowCount={items.length}
                  rowGetter={({ index }) => items[index]}
                >
                  {columns.map((col: InfiniteColumn, index: number) => {
                    return (
                      <Column
                        dataKey={col.dataKey}
                        key={index}
                        label={col.label}
                        width={width * col.width}
                      />
                    );
                  })}
                </Table>
              )}
            </AutoSizer>
          )}
        </InfiniteLoader>
      </div>
      <div className="dot-infinite-footer" data-testid={`${dataTestId}-footer`}>
        Viewing {items.length} out of {totalCount} results
      </div>
    </Fragment>
  );
};

export default InfiniteScrollTable;
