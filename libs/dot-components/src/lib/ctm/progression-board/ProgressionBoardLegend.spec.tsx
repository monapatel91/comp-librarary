import React from 'react';
import { screen } from '@testing-library/dom';
import { renderWithTheme as render } from '../../testing-utils/RenderWithTheme';
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

    expect(items).toHaveLength(14);
  });
});
