import React, { MouseEvent } from 'react';
import { Drawer, Theme } from '@material-ui/core';
import { CommonProps } from '../CommonProps';
import { useStylesWithRootClass } from '../makeStylesWithRootClass';
import styled, { css } from 'styled-components';

export type DrawerAnchor = 'bottom' | 'left' | 'right' | 'top';
export type DrawerVariant = 'permanent' | 'persistent' | 'temporary';

export interface DrawerProps extends CommonProps {
  /** Side from which the drawer will appear 'bottom', 'left', 'right', 'top' */
  anchor?: DrawerAnchor;
  /** string or JSX element that is displayed inside the drawer */
  children?: string | JSX.Element | JSX.Element[];
  /** Callback fired when the component requests to be closed. */
  onClose?: (event: MouseEvent | KeyboardEvent) => void;
  /** If true, the drawer is open. */
  open: boolean;
  /** The variant to use 'permanent', 'persistent', 'temporary' */
  variant?: DrawerVariant;
  /** The width of the drawer defaults to 256px */
  width?: string;
}

const StyledDrawer = styled(Drawer)<DrawerProps>`
  ${({ theme }: { theme: Theme }) => css`
    &.dot-drawer {
      .MuiBackdrop-root {
        background: ${theme.palette.grey[900]};
        opacity: 0.7 !important;
      }
    }
    .dot-drawer-paper {
      width: ${({ width, anchor }: DrawerProps) =>
        anchor === 'bottom' || anchor === 'top' ? '100%' : width};
      padding: ${theme.spacing(2)}px;
    }
  `}
`;

/**
 * @experimental This component is still in development
 */
export const DotDrawer = ({
  anchor = 'right',
  className,
  children,
  'data-testid': dataTestId,
  onClose,
  open,
  variant = 'temporary',
  width,
}: DrawerProps) => {
  const rootClasses = useStylesWithRootClass('dot-drawer', className);
  return (
    <StyledDrawer
      data-testid={dataTestId}
      anchor={anchor}
      classes={{ root: rootClasses, paper: 'dot-drawer-paper' }}
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
