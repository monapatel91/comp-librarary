import React from 'react';
import { render, screen } from '../../testing-utils';
import { DotPill, PillProps } from './Pill';

describe('DotPill', () => {
  it('should have unchanged API', () => {
    const props = {
      backgroundColor: 'red',
      label: 'I am such a pill',
      labelColor: 'blue',
      size: 'medium',
      status: 'default',
    };
    const pillProps: PillProps = {
      backgroundColor: 'red',
      label: 'I am such a pill',
      labelColor: 'blue',
      size: 'medium',
      status: 'default',
    };
    expect(pillProps).toEqual(props);
  });

  it('should render successfully', () => {
    const { baseElement } = render(<DotPill label="Pillsbury" />);
    expect(baseElement).toBeTruthy();
  });
});
