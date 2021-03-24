import React from 'react';
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
  { id: 'ironman', rowData: { name: 'Ironman', type: 'BITBUCKET' } },
  { id: 'batman', rowData: { name: 'Batman', type: 'GITHUB' } },
  { id: 'marvel', rowData: { name: 'Captain Marvel', type: 'GITLAB' } },
  { id: 'superman', rowData: { name: 'Superman', type: 'TEAMFORGE' } },
  { id: 'spiderman', rowData: { name: 'Spiderman', type: 'BITBUCKET' } },
  { id: 'widow', rowData: { name: 'Black Widow', type: 'GITHUB' } },
  { id: 'hulk', rowData: { name: 'Hulk', type: 'GITLAB' } },
  { id: 'flash', rowData: { name: 'Flash', type: 'TEAMFORGE' } },
  { id: 'cage', rowData: { name: 'Luke Cage', type: 'GITHUB' } },
  { id: 'jones', rowData: { name: 'Jessica Jones', type: 'GITLAB' } },
  { id: 'fishface', rowData: { name: 'Aquaman', type: 'BITBUCKET' } },
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
});
