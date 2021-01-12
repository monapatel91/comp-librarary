import React from 'react';
import { renderWithTheme as render } from '../../testing-utils/RenderWithTheme';
import { DotCard } from './Card';

describe('DotCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DotCard>Look Mom! I'm a card!!!</DotCard>);
    expect(baseElement).toBeTruthy();
  });
});
