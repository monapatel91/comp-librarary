import React from 'react';
import { render, screen } from '../../testing-utils';
import {
  AvatarGroupProps,
  AvatarGroupSpacing,
  DotAvatarGroup,
} from './AvatarGroup';
import { sampleAvatars } from './AvatarGroup.stories.data';

describe('AvatarGroup', () => {
  it('should have unchanged API', () => {
    const props = {
      avatars: sampleAvatars,
      max: 3,
      spacing: 'medium' as AvatarGroupSpacing,
    };
    const avatarGroupProps: AvatarGroupProps = props;
    expect(avatarGroupProps).toEqual(props);
  });

  it('should render successfully', () => {
    const { baseElement } = render(<DotAvatarGroup avatars={sampleAvatars} />);
    expect(baseElement).toBeTruthy();
  });

  it('should display the correct number of avatars', () => {
    render(<DotAvatarGroup avatars={sampleAvatars} max={3} />);
    const avatars = screen.getAllByTestId('test-avatar');

    expect(avatars).toHaveLength(2);
  });
});
