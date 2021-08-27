import React from 'react';
import { render, screen } from '../../testing-utils';
import { DotProgress } from './Progress';

describe(' Progress', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DotProgress />);
    expect(baseElement).toBeTruthy();
  });

  it("should have 'aria-label' attribute with correct value", () => {
    const ariaLabel = 'my label';
    const dataTestId = 'test-progress';
    render(<DotProgress ariaLabel={ariaLabel} data-testid={dataTestId} />);
    const progressElement = screen.getByTestId(dataTestId);
    expect(progressElement).toHaveAttribute('aria-label', ariaLabel);
  });
});
