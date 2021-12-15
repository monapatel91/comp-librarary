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
      tooltip: 'avatar tooltip',
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
        alt="test"
        data-testid="test-avatar"
        text="Bruce Wayne Enterprises"
        type="text"
      />
    );

    expect(screen.getByText('BW'));
  });

  it('should display the first character of text if only one word provided', () => {
    render(
      <DotAvatar
        alt="test"
        data-testid="test-avatar"
        text="Batman"
        type="text"
      />
    );

    expect(screen.getByText('B'));
  });

  it('should display the icon for the iconId provided', () => {
    render(
      <DotAvatar
        alt="test"
        data-testid="test-avatar"
        iconId="delete"
        type="icon"
      />
    );
    const avatarIcon = screen
      .getByTestId('test-avatar-icon')
      .querySelector('i');
    expect(avatarIcon).toHaveClass('icon-delete');
  });

  it('should display the "user" icon if type is image but no source provided', () => {
    render(<DotAvatar alt="test" data-testid="test-avatar" type="image" />);
    const avatarIcon = screen
      .getByTestId('test-avatar-icon')
      .querySelector('i');
    expect(avatarIcon).toHaveClass('icon-user');
  });

  it('should display the "user" icon if type is icon but no icon ID provided', () => {
    render(<DotAvatar alt="test" data-testid="test-avatar" type="icon" />);
    const avatarIcon = screen
      .getByTestId('test-avatar-icon')
      .querySelector('i');
    expect(avatarIcon).toHaveClass('icon-user');
  });

  it('should display the image if type is image and source is provided', () => {
    render(
      <DotAvatar
        alt="test"
        data-testid="test-avatar"
        imageSrc="https://cdn1-www.superherohype.com/assets/uploads/2013/11/batmane3-1.jpg"
        type="image"
      />
    );
    const avatarImage = screen.getByAltText('test');
    expect(avatarImage).toHaveClass('dot-img');
  });

  it("should have 'aria-label' attribute with correct value", () => {
    const ariaLabel = 'my label';
    render(
      <DotAvatar
        alt="test"
        ariaLabel={ariaLabel}
        data-testid="test-avatar"
        type="image"
      />
    );
    const linkElement = screen.getByTestId('test-avatar');
    expect(linkElement).toHaveAttribute('aria-label', ariaLabel);
  });

  it('should display appropriate background color for given text input', () => {
    const text = 'John Wayne';
    const dataTestId = 'test-avatar';
    render(
      <DotAvatar alt="test" data-testid={dataTestId} text={text} type="text" />
    );
    const avatarElement = screen.getByTestId(dataTestId);
    expect(avatarElement).toHaveAttribute('color', 'blue');
  });

  it('should display default background color when no text is provided', () => {
    const dataTestId = 'test-avatar';
    render(<DotAvatar alt="test" data-testid={dataTestId} type="text" />);
    const avatarElement = screen.getByTestId(dataTestId);
    expect(avatarElement).toHaveAttribute('color', 'default');
  });

  it('should display correct background color when color and text are set via props', () => {
    const color = 'yellow';
    const dataTestId = 'test-avatar';
    render(
      <DotAvatar
        alt="test"
        color={color}
        data-testid={dataTestId}
        text="John Wayne"
        type="text"
      />
    );
    const avatarElement = screen.getByTestId(dataTestId);
    expect(avatarElement).toHaveAttribute('color', color);
  });
  it('should render as a button when onClick is applied', () => {
    const handleClick = jest.fn();
    render(<DotAvatar alt="test" onClick={handleClick} type="text" />);
    const avatarElement = screen.getByRole('button');
    expect(avatarElement).toBeInTheDocument();
  });
  it('should render as a div when onClick is not applied', () => {
    const dataTestId = 'test-avatar';
    render(<DotAvatar alt="test" data-testid={dataTestId} type="text" />);
    const divTag = screen.getByTestId('test-avatar').tagName;
    expect(divTag).toBe('DIV');
  });
});
