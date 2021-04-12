import React from 'react';
import { render, screen } from '../../testing-utils';
import { DotProgressionBoard } from './ProgressionBoard';
import { samplePhases } from './sample-data/sampleData';

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

  it('should have correct number of cards', () => {
    render(<DotProgressionBoard phases={samplePhases} />);
    const cards = screen.getAllByTestId('card');

    expect(cards).toHaveLength(10);
  });

  it('cards should have correct information', () => {
    render(<DotProgressionBoard phases={samplePhases} />);
    const cards = screen.getAllByTestId('card');
    const links = screen.getAllByRole('link');

    const firstCard = cards[0];

    expect(links[0]).toHaveTextContent('3.1.83 - 3.1.100');
    expect(links[2]).toHaveTextContent('3.1');
    expect(links[3]).toHaveTextContent('83 - 100');

    expect(firstCard).toContainHTML(`<i class="icon-error-outlines dot-i">`);
    expect(firstCard).toContainHTML(`<i class="icon-file-dotted dot-i">`);
    expect(firstCard).toContainHTML(`<i class="icon-check-solid dot-i">`);
    expect(firstCard).toContainHTML(`<i class="icon-rogue-commits dot-i">`);
  });
});
