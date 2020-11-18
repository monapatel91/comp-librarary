import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import { InfiniteScrollTable, OnTableUpdate } from './InfiniteScrollTable';
import { Order } from './TableBody';

const testCols = [
  { label: 'Name', dataKey: 'name', width: 0.2 },
  { label: 'Type', dataKey: 'type', width: 0.2 },
];

const getTestData: OnTableUpdate = async (
  pageSize: number,
  page: number,
  order?: Order,
  orderBy?: string
) => {
  const rowsPerPage = 20;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const items = new Array<any>();
  const start = page * rowsPerPage;
  const end = start + rowsPerPage;

  for (let index = start, i = 0; index < end; index++, i++) {
    items[i] = {
      id: index,
      name: `Name ${index}`,
      email: `Email ${index}`,
    };
  }

  return {
    data: items,
    pagination: {
      current_page: page,
      has_next: true,
      has_previous: page > 0,
      size: items.length,
      total_elements: (page + 2) * rowsPerPage,
      total_pages: page + 1,
    },
  };
};

describe('InfiniteScrollTable', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <InfiniteScrollTable
        ariaLabel="super heroes!"
        columns={testCols}
        height={300}
        onTableUpdate={getTestData}
      />
    );

    waitFor(() => expect(baseElement).toBeTruthy());
  });

  it('load more when scrolling', async () => {
    render(
      <InfiniteScrollTable
        ariaLabel="super heroes!"
        columns={testCols}
        data-testid={'to-infinity-and-beyond'}
        height={300}
        rowsPerPage={20}
        onTableUpdate={getTestData}
      />
    );

    const infiniteTable = screen.getByTestId('to-infinity-and-beyond');

    const scrollContainer = infiniteTable.querySelector(
      '.ReactVirtualized__Grid'
    );

    expect(infiniteTable).toBeTruthy();
    expect(scrollContainer).not.toBeNull();

    if (scrollContainer != null) {
      await waitFor(() =>
        fireEvent.scroll(scrollContainer, { target: { scrollY: 300000 } })
      );
    }

    // TODO this doesn't actually load anything,
    //  Keith and I couldn't figure it out and punted for now :-(.
  });
});
