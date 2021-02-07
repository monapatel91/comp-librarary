import React from 'react';
import { renderWithTheme as render } from '../../testing-utils/RenderWithTheme';
import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import DotLink from './Link';

describe('Link', () => {
  const onClick = jest.fn();

  it('should render successfully', () => {
    const { baseElement } = render(<DotLink>Sample Link</DotLink>);
    expect(baseElement).toBeTruthy();
  });

  it('should have an href is one is passed', () => {
    render(<DotLink href="#">Sample Link</DotLink>);
    expect(screen.getByText('Sample Link').closest('a')).toHaveAttribute(
      'href'
    );
  });

  it('should call onClick if one is passed down as a prop', () => {
    render(
      <DotLink href="#" onClick={onClick}>
        Sample Link
      </DotLink>
    );

    userEvent.click(screen.getByText('Sample Link'));
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
