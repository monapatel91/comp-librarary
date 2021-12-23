import React from 'react';
import userEvent from '@testing-library/user-event';
import { render, screen, waitFor } from '../../testing-utils';
import { DotActionToolbar } from '../action-toolbar/ActionToolbar';
import { DotTable, TableProps } from './Table';
import { Order } from '../table/TableBody';
import { DotTablePagination, RowsPerPageOption } from './TablePagination';
import { TableRowProps } from '@mui/material';
import { DotBodyCell } from './TableCell';
import { DotButton } from '../button/Button';

const mockFunc = jest.fn();
const handleEditClick = () => {
  console.log('Edit button clicked!!!');
};
const handleDeleteClick = () => {
  console.log('Delete button clicked!!!');
};
it('should have unchanged API', () => {
  const columns = [{ id: 'title', label: 'Title' }];
  const data = [
    { id: 'boss', rowData: { title: 'boss', label: 'Big Cheese' } },
  ];
  const tProps = {
    ariaLabel: 'aria label',
    className: 'test-class',
    columns: columns,
    count: 12,
    data: data,
    'data-testid': 'testid',
    emptyMessage: 'nothing to see here',
    loading: false,
    maxHeight: '500px',
    order: 'asc' as Order,
    orderBy: 'title',
    onRowClick: mockFunc,
    onUpdateData: mockFunc,
    page: 1,
    rowsPerPage: 10 as RowsPerPageOption,
    sortable: true,
    stickyHeader: true,
    toolbar: <DotActionToolbar>Test</DotActionToolbar>,
  };
  const tableProps: TableProps = tProps;
  expect(tableProps).toEqual(tProps);

  const trProps = {
    id: 'foo-bar',
    selected: true,
    rowData: data[0].rowData,
  };
  const tableRowProps: TableRowProps = trProps;
  expect(tableRowProps).toEqual(trProps);
});
const actionItemArray = [
  {
    actions: [
      {
        children: (
          <DotButton onClick={() => handleEditClick()} type="text">
            Edit
          </DotButton>
        ),
        key: 'edit',
        onclick: () => handleEditClick(),
      },
      {
        children: (
          <DotButton onClick={() => handleDeleteClick()} type="text">
            Delete
          </DotButton>
        ),
        key: 'delete',
        onclick: () => handleDeleteClick(),
      },
    ],
  },
];

const testCols = [
  { id: 'name', label: 'Name', truncate: true },
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
    const nextPage = screen.getByTitle('Go to next page');
    userEvent.click(nextPage);
    waitFor(() => {
      const td = baseElement.querySelector('td');
      expect(td).toContain('Superman');
      const tr = baseElement.querySelectorAll('tr');
      expect(tr.length).toEqual(2); // Header and 1 row of data
    });
  });

  xit("should show 'more than n' when count is unknown", () => {
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

  it("should have enabled 'Previous page' button when not on first page", () => {
    render(
      <DotTable
        ariaLabel="super heroes!"
        columns={testCols}
        count={11}
        data={testData}
        onUpdateData={mockFunc}
        orderBy="name"
        page={1}
        rowsPerPage={10}
      />
    );
    const rowsShownText = screen.getByText('11–11 of 11');
    expect(rowsShownText).toBeVisible();
    const previousPage = screen.getByTitle('Go to previous page');
    userEvent.click(previousPage);
    expect(mockFunc).toHaveBeenCalledWith('asc', 'name', 0, 10);
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
    const rowsShownText = screen.getByText('1–10 of 11');
    expect(rowsShownText).toBeVisible();
    const nextPage = screen.getByTitle('Go to next page');
    userEvent.click(nextPage);
    expect(mockFunc).toHaveBeenCalledWith('asc', 'name', 1, 10);
    const th = screen.getByText('Name');
    userEvent.click(th);
    expect(mockFunc).toHaveBeenCalledWith('desc', 'name', 0, 10);
  });

  it('should have noWrap class and Truncate table cell text if truncate prop is true', () => {
    const { baseElement } = render(
      <DotTable
        ariaLabel="super heroes!"
        columns={testCols}
        data={testData}
        orderBy="name"
      />
    );
    testCols.map((cols) => {
      const td = baseElement.querySelector('td');
      return cols.truncate && expect(td).toHaveClass('noWrap');
    });
  });

  it('should have actionItem class', () => {
    const ationCol = [
      { id: 'action', label: 'Action' },
      { id: 'type', label: 'Type' },
    ];
    const tableData = [
      { id: 'ironman', rowData: { action: actionItemArray, type: '5a' } },
      { id: 'batman', rowData: { action: actionItemArray, type: '4b' } },
    ];
    const { baseElement } = render(
      <DotTable
        ariaLabel="super heroes!"
        columns={ationCol}
        data={tableData}
        orderBy="name"
      />
    );
    tableData.map((rows) => {
      const td = baseElement.querySelector('td');
      return (
        Array.isArray(rows.rowData.action) &&
        expect(td).toHaveClass('actionItems')
      );
    });
  });

  it("should have 'aria-label' attribute with correct value", () => {
    const ariaLabel = 'my label';
    render(
      <DotTable ariaLabel={ariaLabel} columns={testCols} data={testData} />
    );
    const tableElement = screen.getByRole('table');
    expect(tableElement).toHaveAttribute('aria-label', ariaLabel);
  });

  it("should have 'aria-label' attribute with correct value on DotBodyCell", () => {
    const ariaLabel = 'my label';
    const dataTestId = 'test-body-cell';
    render(<DotBodyCell ariaLabel={ariaLabel} data-testid={dataTestId} />);
    const bodyCellElement = screen.getByTestId(dataTestId);
    expect(bodyCellElement).toHaveAttribute('aria-label', ariaLabel);
  });

  it("should have 'aria-label' attribute with correct value on DotTablePagination", () => {
    const onPageChange = jest.fn();
    const ariaLabel = 'my label';
    const dataTestId = 'test-table-pagination';
    render(
      <DotTablePagination
        ariaLabel={ariaLabel}
        count={10}
        data-testid={dataTestId}
        onPageChange={onPageChange}
      />
    );
    const tablePaginationElement = screen.getByTestId(dataTestId);
    expect(tablePaginationElement).toHaveAttribute('aria-label', ariaLabel);
  });
});
