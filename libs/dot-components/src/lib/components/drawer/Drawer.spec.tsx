import React from 'react';
import { render } from '../../testing-utils';
import { DotDrawer, DrawerProps } from './Drawer';

describe('Drawer', () => {
  it('should have unchanged API', () => {
    const onClose = jest.fn();
    const props = {
      anchor: 'bottom',
      children: 'I am a drawer',
      onClose: onClose,
      open: true,
      variant: 'persistent',
      width: '512px',
    };
    const drawerProps: DrawerProps = {
      anchor: 'bottom',
      children: 'I am a drawer',
      onClose: onClose,
      open: true,
      variant: 'persistent',
      width: '512px',
    };
    expect(drawerProps).toEqual(props);
  });

  it('should render successfully', () => {
    const { baseElement } = render(
      <DotDrawer open={true}>
        <div>Hello World</div>
      </DotDrawer>
    );
    expect(baseElement).toBeTruthy();
  });
});
