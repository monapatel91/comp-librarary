import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithTheme as render } from '../../testing-utils/RenderWithTheme';

import { DotAvatar, AvatarProps } from './Avatar';

describe('DotAvatar', () => {
  it('should have unchanged API', () => {
    const onClick = jest.fn();
    const props = {
      alt: 'Avatar alt text',
      iconId: 'home',
      imageSrc: './somewhere',
      onClick: onClick,
      size: 'small',
      text: 'BM',
      type: 'image',
      variant: 'circle',
    };
    const avatarProps: AvatarProps = {
      alt: 'Avatar alt text',
      iconId: 'home',
      imageSrc: './somewhere',
      onClick: onClick,
      size: 'small',
      text: 'BM',
      type: 'image',
      variant: 'circle',
    };
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
});
