import React from 'react';
import { render, screen } from '../../testing-utils';
import {
  DotProgress,
  progressColorOptions,
  ProgressProps,
  progressVariantOptions,
} from './Progress';

describe(' Progress', () => {
  it('should have unchanged API', () => {
    const props = {
      ariaLabel: 'progress',
      className: 'test-class',
      'data-testid': 'testid',
      color: 'primary' as progressColorOptions,
      size: '33',
      thickness: 2,
      title: 'My progress',
      value: 67,
      variant: 'determinate' as progressVariantOptions,
    };
    const progressProps: ProgressProps = props;
    expect(progressProps).toEqual(props);
  });

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
