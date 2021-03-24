import React, { Fragment, useEffect, useState } from 'react';
import {
  AutoSizer,
  Column,
  Index,
  InfiniteLoader,
  Table,
} from 'react-virtualized';
import { CommonProps } from '../CommonProps';
import { useStylesWithRootClass } from '../useStylesWithRootClass';
import {
  rootClassName,
  rootFooterClassName,
  StyledInfiniteScroll,
  StyledInfiniteScrollFooter,
} from './InfiniteScrollTable.styles';
import { Order } from './TableBody';
import { TableDataWithPagination } from './TableDataWithPagination';

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

export interface InfiniteScrollTableProps extends CommonProps {
  ariaLabel: string;
  columns: Array<InfiniteColumn>;
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

/**
 * @experimental This component is still in development
 */
export const InfiniteScrollTable = ({
  ariaLabel,
  className,
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
  const rootClasses = useStylesWithRootClass(
    rootClassName,
    className,
    'infinite-scroll-container'
  );
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [items, updateItems] = useState<Array<any>>([]);
  const [currentPage, updateCurrentPage] = useState<number>(0);
  const [totalCount, updateTotalCount] = useState<number>(0);

  function loadMoreData(page: number, reset = false) {
    return onTableUpdate(rowsPerPage, page, 'asc').then((tableData) => {
      if (tableData) {
        if (!reset) {
          updateItems(items.concat(tableData.data));
        } else {
          updateItems(tableData.data);
        }
        updateCurrentPage(tableData.pagination.current_page);
        updateTotalCount(tableData.pagination.total_elements);
      }
    });
  }

  useEffect(() => {
    loadMoreData(0, true);
  }, [filters]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Fragment>
      <StyledInfiniteScroll className={rootClasses} data-testid={dataTestId}>
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
      </StyledInfiniteScroll>
      <StyledInfiniteScrollFooter
        className={rootFooterClassName}
        data-testid={`${dataTestId}-footer`}
      >
        Viewing {items.length} out of {totalCount} results
      </StyledInfiniteScrollFooter>
    </Fragment>
  );
};
