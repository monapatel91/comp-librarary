import React from 'react';
import { render, screen } from '../../testing-utils';
import {
  DotProgressionBoardLegend,
  legendItems as sampleItems,
} from './ProgressionBoardLegend';

describe('ProgressionBoardLegend', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <DotProgressionBoardLegend items={sampleItems} />
    );
    expect(baseElement).toBeTruthy();
  });

  it('should render correct number of legend items', () => {
    render(<DotProgressionBoardLegend items={sampleItems} />);
    const items = screen.getAllByRole('listitem');

    expect(items).toHaveLength(7);
  });
});
