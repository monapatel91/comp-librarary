import React from 'react';
import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import '@testing-library/jest-dom';

import DotTable from './Table';

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

const mockFunc = jest.fn();

describe(' Table', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <DotTable
        ariaLabel="super heroes!"
        columns={testCols}
        count={testData.length}
        data={testData}
        handleRequestSort={mockFunc}
        loading={false}
        page={1}
        rowsPerPage={10}
        setRowsPerPage={mockFunc}
        setPage={mockFunc}
      />
    );
    expect(baseElement).toBeTruthy();
  });

  it('should display loading icon while waiting for data', async () => {
    const { rerender } = render(
      <DotTable
        ariaLabel="super heroes!"
        columns={testCols}
        count={testData.length}
        data={testData}
        handleRequestSort={mockFunc}
        loading={true}
        page={1}
        rowsPerPage={10}
        setRowsPerPage={mockFunc}
        setPage={mockFunc}
      />
    );
    const loadingContainer = screen.getByTitle('loading data');

    expect(loadingContainer).toBeVisible();

    rerender(
      <DotTable
        ariaLabel="super heroes!"
        columns={testCols}
        count={testData.length}
        data={testData}
        handleRequestSort={mockFunc}
        loading={false}
        page={1}
        rowsPerPage={10}
        setRowsPerPage={mockFunc}
        setPage={mockFunc}
      />
    );
    expect(loadingContainer).not.toBeVisible();
  });
});
