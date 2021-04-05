import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithTheme as render } from '../../testing-utils/RenderWithTheme';
import { DotActionToolbar } from '../action-toolbar/ActionToolbar';
import { DotTable, TableProps } from './Table';

const mockFunc = jest.fn();

it('should have unchanged API', () => {
  const columns = [{ id: 'title', label: 'Title' }];
  const data = [
    { id: 'boss', rowData: { title: 'boss', label: 'Big Cheese' } },
  ];
  const tProps = {
    ariaLabel: 'aria label',
    columns: columns,
    count: 12,
    data: data,
    emptyMessage: 'nothing to see here',
    loading: false,
    maxHeight: '500px',
    order: 'asc',
    orderBy: 'title',
    onRowClick: mockFunc,
    onUpdateData: mockFunc,
    rowsPerPage: 10,
    sortable: true,
    stickyHeader: true,
    toolbar: <DotActionToolbar>Test</DotActionToolbar>,
  };
  const tableProps: TableProps = {
    ariaLabel: 'aria label',
    columns: columns,
    count: 12,
    data: data,
    emptyMessage: 'nothing to see here',
    loading: false,
    maxHeight: '500px',
    order: 'asc',
    orderBy: 'title',
    onRowClick: mockFunc,
    onUpdateData: mockFunc,
    rowsPerPage: 10,
    sortable: true,
    stickyHeader: true,
    toolbar: <DotActionToolbar>Test</DotActionToolbar>,
  };
  expect(tableProps).toEqual(tProps);
});

const testCols = [
  { id: 'name', label: 'Name' },
  { id: 'type', label: 'Type' },
];
const testData = [
  { id: 'ironman', rowData: { name: 'Ironman', type: '5a' } },
  { id: 'batman', rowData: { name: 'Batman', type: '4b' } },
  { id: 'marvel', rowData: { name: 'Captain Marvel', type: '1c' } },
  { id: 'superman', rowData: { name: 'Superman', type: '8d' } },
  { id: 'spiderman', rowData: { name: 'Spiderman', type: '8e' } },
  { id: 'widow', rowData: { name: 'Black Widow', type: '2f' } },
  { id: 'hulk', rowData: { name: 'Hulk', type: '1x' } },
  { id: 'flash', rowData: { name: 'Flash', type: '1a' } },
  { id: 'cage', rowData: { name: 'Luke Cage', type: '99' } },
  { id: 'jones', rowData: { name: 'Jessica Jones', type: '2' } },
  { id: 'fishface', rowData: { name: 'Aquaman', type: '3' } },
];

describe(' Table', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <DotTable
        ariaLabel="super heroes!"
        columns={testCols}
        data={testData}
        loading={false}
      />
    );
    expect(baseElement).toBeTruthy();
  });

  it('should sort on orderBy column', () => {
    const { baseElement } = render(
      <DotTable
        ariaLabel="super heroes!"
        columns={testCols}
        data={testData}
        orderBy="name"
      />
    );
    // Initial sort is on orderBy column
    waitFor(() => {
      const td = baseElement.querySelector('td');
      expect(td).toContain('Batman');
    });
    // Clicking current sort column reverses order
    let th = screen.getByText('Name');
    userEvent.click(th);
    waitFor(() => {
      const td = baseElement.querySelector('td');
      expect(td).toContain('Superman');
    });
    // Clicking a different column sorts on that column
    th = screen.getByText('Type');
    userEvent.click(th);
    waitFor(() => {
      const td = baseElement.querySelectorAll('td');
      expect(td[1]).toContain('1a');
    });
  });

  it('should paginate table', () => {
    const { baseElement } = render(
      <DotTable
        ariaLabel="super heroes!"
        columns={testCols}
        data={testData}
        orderBy="name"
        rowsPerPage={10}
      />
    );
    waitFor(() => {
      const paginationText = screen.getByText('Rows per page:');
      expect(paginationText).toBeVisible();
      const rowsShownText = screen.getByText('1-10 of 11');
      expect(rowsShownText).toBeVisible();
    });
    const nextPage = screen.getByTitle('Next page');
    userEvent.click(nextPage);
    waitFor(() => {
      const td = baseElement.querySelector('td');
      expect(td).toContain('Superman');
      const tr = baseElement.querySelectorAll('tr');
      expect(tr.length).toEqual(2); // Header and 1 row of data
    });
  });

  it("should show 'more than n' when count is unknown", () => {
    render(
      <DotTable
        ariaLabel="super heroes!"
        columns={testCols}
        data={testData}
        onUpdateData={mockFunc}
        orderBy="name"
        rowsPerPage={10}
      />
    );
    const rowsShownText = screen.getByText('1-10 of more than 10');
    expect(rowsShownText).toBeVisible();
  });

  it('should call onUpdateData when sort or page changes', () => {
    render(
      <DotTable
        ariaLabel="super heroes!"
        columns={testCols}
        count={11}
        data={testData}
        onUpdateData={mockFunc}
        orderBy="name"
        rowsPerPage={10}
      />
    );
    const rowsShownText = screen.getByText('1-10 of 11');
    expect(rowsShownText).toBeVisible();
    const nextPage = screen.getByTitle('Next page');
    userEvent.click(nextPage);
    waitFor(() => {
      expect(mockFunc).toHaveBeenCalledWith('asc', 'name', 1, 10);
    });
    const th = screen.getByText('Name');
    userEvent.click(th);
    waitFor(() => {
      expect(mockFunc).toHaveBeenCalledWith('desc', 'name', 0, 10);
    });
  });
});
