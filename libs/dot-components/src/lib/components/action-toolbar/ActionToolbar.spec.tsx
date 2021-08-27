import React from 'react';
import { render, screen } from '../../testing-utils';
import {
  DotActionToolbar,
  DotActionBarProps,
  DotActionBarVarient,
} from './ActionToolbar';

describe('ActionToolbar', () => {
  it('should have unchanged API', () => {
    const props = {
      children: 'child',
      className: 'test-class',
      'data-testid': 'testid',
      variant: 'regular' as DotActionBarVarient,
    };
    const actionBarProps: DotActionBarProps = props;
    expect(actionBarProps).toEqual(props);
  });

  it('should render successfully', () => {
    const { baseElement } = render(<DotActionToolbar />);
    expect(baseElement).toBeTruthy();
  });

  it("should have 'aria-label' attribute with correct value", () => {
    const ariaLabel = 'my label';
    const dataTestId = 'test-action-toolbar';
    render(<DotActionToolbar ariaLabel={ariaLabel} data-testid={dataTestId} />);
    const actionToolbarElement = screen.getByTestId(dataTestId);
    expect(actionToolbarElement).toHaveAttribute('aria-label', ariaLabel);
  });
});
