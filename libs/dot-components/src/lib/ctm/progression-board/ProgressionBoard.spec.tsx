import React from 'react';
import { renderWithTheme as render } from '../../testing-utils/RenderWithTheme';
import { DotProgressionBoard } from './ProgressionBoard';
import samplePhases from './sampleData';

describe('ProgressionBoard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <DotProgressionBoard phases={samplePhases} />
    );
    expect(baseElement).toBeTruthy();
  });

  xit('should have five columns', () => {
    // tests go here
  });

  xit('should have three rows', () => {
    // tests go here
  });

  xit('should have cards in appropriate columns', () => {
    // tests go here
  });

  xit('cards should have correct information', () => {
    // tests go here
  });
});
