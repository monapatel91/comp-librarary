import React from 'react';
import { render } from '@testing-library/react';

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
