import React, { MouseEvent, CSSProperties } from 'react';
import { CommonProps } from '../CommonProps';
import { useStylesWithRootClass } from '../useStylesWithRootClass';
import { rootClassName, StyledDrawer } from './Drawer.styles';

export type DrawerAnchor = 'bottom' | 'left' | 'right' | 'top';
export type DrawerVariant = 'permanent' | 'persistent' | 'temporary';
export type DrawerModalProps = { container?: Element; style?: CSSProperties };

export interface DrawerProps extends CommonProps {
  /** Side from which the drawer will appear 'bottom', 'left', 'right', 'top' */
  anchor?: DrawerAnchor;
  /** string or JSX element that is displayed inside the drawer */
  children?: string | JSX.Element | JSX.Element[];
  /** Props applied to the Modal element. */
  ModalProps?: DrawerModalProps;
  /** Callback fired when the component requests to be closed. */
  onClose?: (event: MouseEvent | KeyboardEvent) => void;
  /** If true, the drawer is open. */
  open: boolean;
  /** The variant to use 'permanent', 'persistent', 'temporary' */
  variant?: DrawerVariant;
  /** The width of the drawer defaults to 256px */
  width?: string;
}

export const DotDrawer = ({
  anchor = 'right',
  className,
  children,
  'data-testid': dataTestId,
  ModalProps,
  onClose,
  open,
  variant = 'temporary',
  width = '256px',
}: DrawerProps) => {
  const rootClasses = useStylesWithRootClass(rootClassName, className);
  return (
    <StyledDrawer
      data-testid={dataTestId}
      anchor={anchor}
      classes={{ root: rootClasses, paper: 'dot-drawer-paper' }}
      ModalProps={ModalProps}
      onClose={(event: MouseEvent) => onClose && onClose(event)}
      open={open}
      variant={variant}
      width={width}
    >
      {children}
    </StyledDrawer>
  );
};

export default DotDrawer;
