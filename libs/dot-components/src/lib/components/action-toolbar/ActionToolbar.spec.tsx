import React from 'react';
import { render } from '../../testing-utils';
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
});
