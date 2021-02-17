import React from 'react';
import { renderWithTheme as render } from '../../testing-utils/RenderWithTheme';
import {
  DotProgressionBoardLegend,
  items as sampleItems,
} from './ProgressionBoardLegend';

describe('ProgressionBoardLegend', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <DotProgressionBoardLegend items={sampleItems} />
    );
    expect(baseElement).toBeTruthy();
  });
});
