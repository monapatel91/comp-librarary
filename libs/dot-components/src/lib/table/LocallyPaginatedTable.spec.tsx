import React from 'react';
import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import '@testing-library/jest-dom';
import LocallyPaginatedTable from './LocallyPaginatedTable';
import { getComparator, stableSort } from './LocallyPaginatedTable';

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

describe('LocallyPaginatedTable', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <LocallyPaginatedTable
        ariaLabel="super heroes!"
        columns={testCols}
        data={testData}
      />
    );
    expect(baseElement).toBeTruthy();
  });

  it('should display loading icon while waiting for data', async () => {
    const { rerender } = render(
      <LocallyPaginatedTable
        ariaLabel="super heroes!"
        columns={testCols}
        data={testData}
        loading={true}
      />
    );
    const loadingContainer = screen.getByTitle('loading data');

    expect(loadingContainer).toBeVisible();

    rerender(
      <LocallyPaginatedTable
        ariaLabel="super heroes!"
        columns={testCols}
        data={testData}
        loading={false}
      />
    );
    expect(loadingContainer).not.toBeVisible();
  });

  it('should sort data by name as expected', async () => {
    let result = stableSort(testData, getComparator('asc', 'name'));

    expect(result[0].name).toEqual('Aquaman');
    expect(result[2].name).toEqual('Black Widow');

    result = stableSort(testData, getComparator('desc', 'name'));

    expect(result[0].name).toEqual('Superman');
    expect(result[2].name).toEqual('Luke Cage');
  });

  it('should sort data by type as expected', async () => {
    let result = stableSort(testData, getComparator('asc', 'type'));

    expect(result[0].type).toEqual('BITBUCKET');
    expect(result[3].type).toEqual('GITHUB');

    result = stableSort(testData, getComparator('desc', 'type'));

    expect(result[0].type).toEqual('TEAMFORGE');
    expect(result[2].type).toEqual('GITLAB');
  });

  it('should display empty row when no results found', async () => {
    render(
      <LocallyPaginatedTable
        ariaLabel="super heroes!"
        columns={testCols}
        data={[]}
      />
    );
    const tableRows = await screen.findAllByRole('row');

    expect(tableRows[1]).toHaveTextContent('No data found');
  });
});
