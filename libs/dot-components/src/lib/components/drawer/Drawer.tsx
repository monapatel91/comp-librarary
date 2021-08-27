import React, { MouseEvent, ReactNode, CSSProperties } from 'react';
import { CommonProps } from '../CommonProps';
import { useStylesWithRootClass } from '../useStylesWithRootClass';
import { rootClassName, StyledDrawer } from './Drawer.styles';

export type DrawerAnchor = 'bottom' | 'left' | 'right' | 'top';
export type DrawerVariant = 'permanent' | 'persistent' | 'temporary';
export type DrawerModalProps = { container?: Element; style?: CSSProperties };
export type DrawerPaperProps = { style?: CSSProperties };

export interface DrawerProps extends CommonProps {
  /** Side from which the drawer will appear 'bottom', 'left', 'right', 'top' */
  anchor?: DrawerAnchor;
  /** Defines a string value that labels the current element **/
  ariaLabel?: string;
  /** string or JSX element that is displayed inside the drawer */
  children?: ReactNode;
  /** The height of the drawer when anchor is 'top' or 'bottom' */
  height?: string;
  /** Props applied to the Modal element. */
  ModalProps?: DrawerModalProps;
  /** Props applied to the Paper element. */
  PaperProps?: DrawerPaperProps;
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
      aria-label={ariaLabel}
      data-testid={dataTestId}
      anchor={anchor}
      classes={{ root: rootClasses, paper: 'dot-drawer-paper' }}
      height={height}
      ModalProps={ModalProps}
      PaperProps={PaperProps}
      onClose={(event: MouseEvent) => onClose && onClose(event)}
      open={open}
      variant={variant}
      width={width}
    >
      {children}
    </StyledDrawer>
  );
};
