import React, { MouseEvent, ReactNode, CSSProperties } from 'react';
import { CommonProps } from '../CommonProps';
import { useStylesWithRootClass } from '../useStylesWithRootClass';
import { rootClassName, StyledDrawer } from './Drawer.styles';

export type DrawerAnchor = 'bottom' | 'left' | 'right' | 'top';
export type DrawerVariant = 'permanent' | 'persistent' | 'temporary';
export type DrawerModalProps = { container?: Element; style?: CSSProperties };
export type DrawerPaperProps = { style?: CSSProperties };

export interface DrawerProps extends CommonProps {
  /** Props applied to the Modal element. */
  ModalProps?: DrawerModalProps;
  /** Props applied to the Paper element. */
  PaperProps?: DrawerPaperProps;
  /** Side from which the drawer will appear 'bottom', 'left', 'right', 'top' */
  anchor?: DrawerAnchor;
  /** string or JSX element that is displayed inside the drawer */
  children?: ReactNode;
  /** The height of the drawer when anchor is 'top' or 'bottom' */
  height?: string;
  /** Callback fired when the component requests to be closed. */
  onClose?: (event: MouseEvent | KeyboardEvent) => void;
  /** If true, the drawer is open. */
  open: boolean;
  /** The variant to use 'permanent', 'persistent', 'temporary' */
  variant?: DrawerVariant;
  /** The width of the drawer when anchor is 'left' or 'right' */
  width?: string;
}

export const DotDrawer = ({
  anchor = 'right',
  ariaLabel,
  className,
  children,
  'data-testid': dataTestId,
  height = '44px',
  ModalProps,
  onClose,
  open,
  PaperProps,
  variant = 'temporary',
  width = '256px',
}: DrawerProps) => {
  const rootClasses = useStylesWithRootClass(rootClassName, className);
  return (
    <StyledDrawer
      ModalProps={ModalProps}
      PaperProps={PaperProps}
      anchor={anchor}
      aria-label={ariaLabel}
      classes={{ root: rootClasses, paper: 'dot-drawer-paper' }}
      data-testid={dataTestId}
      height={height}
      onClose={(event: MouseEvent) => onClose && onClose(event)}
      open={open}
      variant={variant}
      width={width}
    >
      {children}
    </StyledDrawer>
  );
};
