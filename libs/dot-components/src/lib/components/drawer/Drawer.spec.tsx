import React from 'react';
import { render, screen } from '../../testing-utils';
import {
  DotDrawer,
  DrawerAnchor,
  DrawerModalProps,
  DrawerPaperProps,
  DrawerProps,
  DrawerVariant,
} from './Drawer';

describe('Drawer', () => {
  it('should have unchanged API', () => {
    const onClose = jest.fn();
    const props = {
      anchor: 'bottom' as DrawerAnchor,
      children: 'I am a drawer',
      className: 'test-class',
      'data-testid': 'testid',
      height: '44px',
      ModalProps: { color: '#0f0' } as DrawerModalProps,
      PaperProps: { color: '#f00' } as DrawerPaperProps,
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

  it("should have 'aria-label' attribute with correct value", () => {
    const ariaLabel = 'my label';
    const dataTestId = 'test-drawer';
    render(
      <DotDrawer ariaLabel={ariaLabel} data-testid={dataTestId} open={true}>
        Hi There!
      </DotDrawer>
    );
    const drawerElement = screen.getByTestId(dataTestId);
    expect(drawerElement).toHaveAttribute('aria-label', ariaLabel);
  });
});
