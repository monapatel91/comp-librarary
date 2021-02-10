import React from 'react';
import { renderWithTheme as render } from '../../testing-utils/RenderWithTheme';
import { ProgressionBoard } from './ProgressionBoard';
import samplePhases from './sampleData';

describe('ProgressionBoard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ProgressionBoard phases={samplePhases} />);
    expect(baseElement).toBeTruthy();
  });
});
