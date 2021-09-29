import React from 'react';
import { render } from '../../testing-utils';
import { BadgeOverlap, BadgeProps, DotBadge } from './Badge';
import { DotIcon } from '../icon/Icon';

describe('DotBadge', () => {
  it('should have unchanged API', () => {
    const props = {
      badgeColor: '#33d389',
      children: <DotIcon iconId="apps" />,
      invisible: false,
      overlap: 'circle' as BadgeOverlap,
    };
    const badgeProps: BadgeProps = props;
    expect(badgeProps).toEqual(props);
  });

  it('should render successfully', () => {
    const { baseElement } = render(
      <DotBadge>
        <DotIcon iconId="apps" />
      </DotBadge>
    );
    expect(baseElement).toBeTruthy();
  });
});
