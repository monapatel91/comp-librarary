import React from 'react';
import { renderWithTheme as render } from '../../testing-utils/RenderWithTheme';
import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import DotLink from './Link';

describe('Link', () => {
  const onClick = jest.fn();

  it('should render successfully', () => {
    const { baseElement } = render(<DotLink text="Sample Link" />);
    expect(baseElement).toBeTruthy();
  });

  it('should have an href is one is passed', () => {
    render(<DotLink text="Sample Link" href="#" />);
    expect(screen.getByText('Sample Link').closest('a')).toHaveAttribute(
      'href'
    );
  });

  it('should call onClick if one is passed down as a prop', () => {
    render(<DotLink text="Sample Link" href="#" onClick={onClick} />);

    userEvent.click(screen.getByText('Sample Link'));
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
