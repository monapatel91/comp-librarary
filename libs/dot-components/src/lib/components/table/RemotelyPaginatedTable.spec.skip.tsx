import React from 'react';
import PubSub from 'pubsub-js';
import { renderWithTheme as render } from '../../testing-utils/RenderWithTheme';
import { screen, waitFor } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import RemotelyPaginatedTable from './RemotelyPaginatedTable';
import { getComparator, stableSort } from './LocallyPaginatedTable';

const getMockedData = jest.fn();

const testCols = [
  { id: 'name', label: 'Name' },
  { id: 'type', label: 'Type' },
];
const testData = [
  { name: 'Ironman', type: 'BITBUCKET' },
  { name: 'Batman', type: 'GITHUB' },
  { name: 'Captain Marvel', type: 'GITLAB' },
  { name: 'Superman', type: 'TEAMFORGE' },
  { name: 'Spiderman', type: 'BITBUCKET' },
  { name: 'Black Widow', type: 'GITHUB' },
  { name: 'Hulk', type: 'GITLAB' },
  { name: 'Flash', type: 'TEAMFORGE' },
  { name: 'Luke Cage', type: 'GITHUB' },
  { name: 'Jessica Jones', type: 'GITLAB' },
  { name: 'Aquaman', type: 'BITBUCKET' },
];

const getTestData = async (
  pageSize: number,
  page: number,
  order: 'desc' | 'asc',
  orderBy?: string
) => {
  let newData = testData;
  getMockedData();
  if (orderBy && order) {
    newData = stableSort(testData, getComparator(order, orderBy));
  }
  return {
    data: newData.slice(page * pageSize, page * pageSize + pageSize),
    pagination: {
      size: pageSize,
      total_pages: testData.length / pageSize,
      total_elements: testData.length,
      current_page: page,
      has_previous: page > 0,
      has_next: page < testData.length / pageSize,
    },
  };
};

describe('RemotelyPaginatedTable', () => {
  beforeEach(() => getMockedData.mockClear());
  it('should render successfully', () => {
    const { baseElement } = render(
      <RemotelyPaginatedTable
        ariaLabel="super heroes!"
        columns={testCols}
        onTableUpdate={getTestData}
      />
    );

    waitFor(() => {
      expect(baseElement).toBeTruthy();
    });
  });

  xit('should call getTestData on load', async () => {
    const { rerender } = render(
      <RemotelyPaginatedTable
        ariaLabel="super heroes!"
        columns={testCols}
        onTableUpdate={getTestData}
        refreshTopicName="topic"
      />
    );

    await waitFor(() => expect(getMockedData).toHaveBeenCalledTimes(1));

    PubSub.publish('topic', undefined);

    rerender(
      <RemotelyPaginatedTable
        ariaLabel="super heroes!"
        columns={testCols}
        onTableUpdate={getTestData}
        refreshTopicName="topic"
      />
    );

    await waitFor(() => expect(getMockedData).toHaveBeenCalledTimes(1));
  });

  it('should call getTestData when a column header is clicked', () => {
    render(
      <RemotelyPaginatedTable
        ariaLabel="super heroes!"
        columns={testCols}
        onTableUpdate={getTestData}
      />
    );
    userEvent.click(screen.getByRole('button', { name: 'Type' }));

    waitFor(() => {
      expect(getMockedData).toHaveBeenCalledTimes(2);
    });
  });

  it('should call getTestData when "previous page" is clicked', async () => {
    render(
      <RemotelyPaginatedTable
        ariaLabel="super heroes!"
        columns={testCols}
        onTableUpdate={getTestData}
      />
    );
    await waitFor(() => expect(getMockedData).toHaveBeenCalledTimes(1));
    userEvent.click(screen.getByRole('button', { name: 'Next page' }));
    await waitFor(() => expect(getMockedData).toHaveBeenCalledTimes(2));
    userEvent.click(screen.getByRole('button', { name: 'Previous page' }));
    await waitFor(() => expect(getMockedData).toHaveBeenCalledTimes(3));
  });

  it('should call getTestData when "next page" is clicked', async () => {
    render(
      <RemotelyPaginatedTable
        ariaLabel="super heroes!"
        columns={testCols}
        onTableUpdate={getTestData}
      />
    );
    await waitFor(() => expect(getMockedData).toHaveBeenCalledTimes(1));
    userEvent.click(screen.getByRole('button', { name: 'Next page' }));
    await waitFor(() => expect(getMockedData).toHaveBeenCalledTimes(2));
  });

  it('should call getTestData when "page size" is changed', async () => {
    render(
      <RemotelyPaginatedTable
        ariaLabel="super heroes!"
        columns={testCols}
        rowsPerPage={10}
        defaultOrderBy={'id'}
        onTableUpdate={getTestData}
      />
    );
    await waitFor(() => expect(getMockedData).toHaveBeenCalledTimes(1));
    userEvent.click(screen.getByRole('button', { name: 'Rows per page: 10' }));
    userEvent.click(screen.getByRole('option', { name: '25' }));
    await waitFor(() => expect(getMockedData).toHaveBeenCalledTimes(2));
  });
});
