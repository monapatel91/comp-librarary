import React from 'react';
import { render, screen } from '../../testing-utils';
import { DotPill, PillProps, PillSize, PillStatus } from './Pill';

describe('DotPill', () => {
  it('should have unchanged API', () => {
    const props = {
      ariaLabel: 'my pill label',
      backgroundcolor: 'red',
      className: 'test-class',
      'data-testid': 'testid',
      label: 'I am such a pill',
      labelcolor: 'blue',
      size: 'medium' as PillSize,
      status: 'default' as PillStatus,
    };
    const pillProps: PillProps = props;
    expect(pillProps).toEqual(props);
  });

  it('should render successfully', () => {
    const { baseElement } = render(<DotPill label="Pillsbury" />);
    expect(baseElement).toBeTruthy();
  });

  it("should have 'aria-label' attribute with correct value", () => {
    const ariaLabel = 'my label';
    const dataTestId = 'test-pill';
    render(
      <DotPill ariaLabel={ariaLabel} data-testid={dataTestId} label="My pill" />
    );
    const pillElement = screen.getByTestId(dataTestId);
    expect(pillElement).toHaveAttribute('aria-label', ariaLabel);
  });
});
