import React from 'react';
import '@testing-library/jest-dom';
import { renderWithRouter } from '../../testing-utils/RenderWithRouter';
import { DotHeader } from './Header';

describe(' Header', () => {
  it('should render successfully', () => {
    const { baseElement } = renderWithRouter(<DotHeader items={[]} />);
    expect(baseElement).toBeTruthy();
  });
});
