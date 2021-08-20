import React from 'react';
import userEvent from '@testing-library/user-event';
import { render, screen } from '../../testing-utils';
import { DotEmptyState, EmptyStateProps } from './EmptyState';
import EmptyStateImage from '../assets/empty-state.svg';

describe(' EmptyState', () => {
  it('should have unchanged API', () => {
    const buttonProps = {
      children: 'I am the button',
    };
    const props = {
      buttonProps: buttonProps,
      imageSrc: EmptyStateImage,
      imageAltText: 'image alt text',
      subtitle: 'subtitle',
      title: 'title',
    };
    const emptyStateProps: EmptyStateProps = props;
    expect(emptyStateProps).toEqual(props);
  });

  it('should render successfully', () => {
    const { baseElement } = render(<DotEmptyState title="Hello World" />);
    expect(baseElement).toBeTruthy();
  });

  it('should render an empty state image', () => {
    render(
      <DotEmptyState
        title="Hello World"
        imageSrc={EmptyStateImage}
        imageAltText="Test Name"
      />
    );
    expect(screen.getByRole('img', { name: 'Test Name' })).toBeVisible();
  });

  it('should render an empty state title', () => {
    render(<DotEmptyState title="Hello World" />);
    expect(screen.getByText('Hello World')).toBeVisible();
  });

  it('should render an empty state sub-title', () => {
    render(<DotEmptyState title="Hello World" subtitle="I am a test" />);
    expect(screen.getByText('I am a test')).toBeVisible();
  });

  it('should not render a button by default', () => {
    render(<DotEmptyState title="Hello World" subtitle="I am a test" />);
    expect(screen.queryByRole('button')).toBeNull();
  });

  it('should render a button if button props are provided', () => {
    const clickHandler = jest.fn();
    render(
      <DotEmptyState
        buttonProps={{
          children: 'Click Me',
          type: 'primary',
          onClick: clickHandler,
        }}
        subtitle="I am a test"
        title="Hello World"
      />
    );
    expect(screen.getByRole('button', { name: 'Click Me' })).toBeVisible();
  });

  it('should call click handler when button is clicked', () => {
    const clickHandler = jest.fn();
    render(
      <DotEmptyState
        buttonProps={{
          children: 'Click Me',
          type: 'primary',
          onClick: clickHandler,
        }}
        subtitle="I am a test"
        title="Hello World"
      />
    );
    userEvent.click(screen.getByRole('button', { name: 'Click Me' }));
    expect(clickHandler).toHaveBeenCalledTimes(1);
  });
});
