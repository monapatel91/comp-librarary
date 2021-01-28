import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithTheme as render } from '../../testing-utils/RenderWithTheme';

import { DotAvatar } from './Avatar';

describe('DotAvatar', () => {
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

  it('should display the "user" icon if type is image by no source provided', () => {
    render(<DotAvatar data-testid="test-avatar" alt="test" type="image" />);
    const avatarIcon = screen
      .getByTestId('test-avatar-icon')
      .querySelector('i');
    expect(avatarIcon).toHaveClass('icon-user');
  });
  it('should display the "user" icon if type is icon by no icon ID provided', () => {
    render(<DotAvatar data-testid="test-avatar" alt="test" type="icon" />);
    const avatarIcon = screen
      .getByTestId('test-avatar-icon')
      .querySelector('i');
    expect(avatarIcon).toHaveClass('icon-user');
  });
});
