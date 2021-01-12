import React from 'react';
import { renderWithTheme as render } from '../../testing-utils/RenderWithTheme';
import DotDrawer from './Drawer';

describe('Drawer', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <DotDrawer open={true}>
        <div>Hello World</div>
      </DotDrawer>
    );
    expect(baseElement).toBeTruthy();
  });
});
