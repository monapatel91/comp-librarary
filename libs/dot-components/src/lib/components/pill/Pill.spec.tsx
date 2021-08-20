import React from 'react';
import { render } from '../../testing-utils';
import { DotPill, PillProps, PillSize, PillStatus } from './Pill';

describe('DotPill', () => {
  it('should have unchanged API', () => {
    const props = {
      backgroundcolor: 'red',
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
});
