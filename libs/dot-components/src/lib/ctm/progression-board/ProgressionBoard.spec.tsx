import React from 'react';
import { renderWithTheme as render } from '../../testing-utils/RenderWithTheme';
import { screen } from '@testing-library/dom';
import { DotProgressionBoard } from './ProgressionBoard';
import samplePhases from './sampleData';

describe('ProgressionBoard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <DotProgressionBoard phases={samplePhases} />
    );
    expect(baseElement).toBeTruthy();
  });

  it('should have three rows', async () => {
    render(<DotProgressionBoard phases={samplePhases} />);
    const phases = screen.getAllByTestId('board-phases');

    expect(phases).toHaveLength(3);
  });

  it('should have five columns in each row', async () => {
    render(<DotProgressionBoard phases={samplePhases} />);
    const cols = screen.getAllByTestId('phase-columns');

    // 5 columns x 3 rows
    expect(cols).toHaveLength(15);
  });

  it('should have correct number of cards in appropriate columns', () => {
    render(<DotProgressionBoard phases={samplePhases} />);
    const cards = screen.getAllByTestId('card');

    expect(cards).toHaveLength(10);
  });

  xit('cards should have correct information', () => {
    render(<DotProgressionBoard phases={samplePhases} />);
    const cards = screen.getAllByTestId('card');

    screen.debug(cards[0]);
    // expect(cards[0]);
  });
});
