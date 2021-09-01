import React, { CSSProperties } from 'react';
import { render, screen } from '../../testing-utils';
import {
  AvatarColor,
  AvatarProps,
  AvatarSize,
  AvatarType,
  AvatarVariant,
  DotAvatar,
} from './Avatar';

describe('DotAvatar', () => {
  it('should have unchanged API', () => {
    const onClick = jest.fn();
    const props = {
      alt: 'Avatar alt text',
      ariaLabel: 'my avatar',
      className: 'test-class',
      color: 'red' as AvatarColor,
      'data-testid': 'testid',
      iconId: 'home',
      imageSrc: './somewhere',
      onClick: onClick,
      size: 'small' as AvatarSize,
      style: { color: '#44b700' } as CSSProperties,
      text: 'BM',
      type: 'image' as AvatarType,
      variant: 'circular' as AvatarVariant,
    };
    const avatarProps: AvatarProps = props;
    expect(avatarProps).toEqual(props);
  });

  it('should render successfully', () => {
    const { baseElement } = render(<DotAvatar alt="test alt text" />);
    expect(baseElement).toBeTruthy();
  });

  it('should display the initial of the first 2 words when two or more words are passed', () => {
    render(
      <DotAvatar
        data-testid="test-avatar"
        alt="test"
        type="text"
        text="Bruce Wayne Enterprises"
      />
    );

    expect(screen.getByText('BW'));
  });

  it('should display the first character of text if only one word provided', () => {
    render(
      <DotAvatar
        data-testid="test-avatar"
        alt="test"
        type="text"
        text="Batman"
      />
    );

    expect(screen.getByText('B'));
  });

  it('should display the icon for the iconId provided', () => {
    render(
      <DotAvatar
        data-testid="test-avatar"
        alt="test"
        type="icon"
        iconId="delete"
      />
    );
    const avatarIcon = screen
      .getByTestId('test-avatar-icon')
      .querySelector('i');
    expect(avatarIcon).toHaveClass('icon-delete');
  });

  it('should display the "user" icon if type is image but no source provided', () => {
    render(<DotAvatar data-testid="test-avatar" alt="test" type="image" />);
    const avatarIcon = screen
      .getByTestId('test-avatar-icon')
      .querySelector('i');
    expect(avatarIcon).toHaveClass('icon-user');
  });

  it('should display the "user" icon if type is icon but no icon ID provided', () => {
    render(<DotAvatar data-testid="test-avatar" alt="test" type="icon" />);
    const avatarIcon = screen
      .getByTestId('test-avatar-icon')
      .querySelector('i');
    expect(avatarIcon).toHaveClass('icon-user');
  });

  it('should display the image if type is image and source is provided', () => {
    render(
      <DotAvatar
        data-testid="test-avatar"
        alt="test"
        type="image"
        imageSrc="https://cdn1-www.superherohype.com/assets/uploads/2013/11/batmane3-1.jpg"
      />
    );
    const avatarImage = screen.getByAltText('test');
    expect(avatarImage).toHaveClass('dot-img');
  });

  it("should have 'aria-label' attribute with correct value", () => {
    const ariaLabel = 'my label';
    render(
      <DotAvatar
        data-testid="test-avatar"
        alt="test"
        ariaLabel={ariaLabel}
        type="image"
      />
    );
    const linkElement = screen.getByTestId('test-avatar');
    expect(linkElement).toHaveAttribute('aria-label', ariaLabel);
  });
});
