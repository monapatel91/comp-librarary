import React from 'react';
import { render } from '../../testing-utils';
import { DotDrawer, DrawerAnchor, DrawerProps, DrawerVariant } from './Drawer';

describe('Drawer', () => {
  it('should have unchanged API', () => {
    const onClose = jest.fn();
    const props = {
      anchor: 'bottom' as DrawerAnchor,
      children: 'I am a drawer',
      height: '44px',
      onClose: onClose,
      open: true,
      variant: 'persistent' as DrawerVariant,
      width: '512px',
    };
    const drawerProps: DrawerProps = props;
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
