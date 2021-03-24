import React from 'react';
import { renderWithTheme as render } from '../../testing-utils/RenderWithTheme';
import { screen } from '@testing-library/dom';
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
    const list = screen.getAllByRole('list');

    expect(links[0]).toContainHTML('3.1.83 - 3.1.100');
    expect(links[2]).toContainHTML('3.1');
    expect(links[3]).toContainHTML('83 - 100');

    expect(cards[0]).toContainHTML(`<div class="actions-container">`);

    expect(cards[0]).toContainHTML(`<i class="icon-error-outlines">`);
    expect(cards[0]).toContainHTML(`<i class="icon-file-dotted">`);
    expect(cards[0]).toContainHTML(`<i class="icon-check-solid">`);
    expect(cards[0]).toContainHTML(`<i class="icon-rogue-commits">`);

    expect(list[1]).toContainHTML(`<li class="maintain">`);
    expect(list[1]).toContainHTML(`<li class="improve">`);
  });
});
