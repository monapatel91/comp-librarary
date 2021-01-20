import React, { MouseEvent } from 'react';
import { Drawer, Theme } from '@material-ui/core';
import { CommonProps } from '../CommonProps';
import styled, { css } from 'styled-components';
// import './Drawer.scss';

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

const setDrawerPosition = (anchor): string => {
  let left = 'auto';
  if (anchor === 'bottom' || anchor === 'top') {
    left = '50%';
  }
  return `transform: translate(${left === 'auto' ? 0 : `-${left}`}, 0); left: ${left}`;
}

const StyledDrawer = styled(Drawer)<DrawerProps>`
  ${({ theme }: { theme: Theme }) => css`
    .dot-drawer-paper {
      width: ${({width}: DrawerProps ) => width};
      padding: ${theme.spacing(2)}px;
      ${({ anchor }: DrawerProps) => setDrawerPosition(anchor)};
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
  width = '256px'
}: DrawerProps) => {
  return (
    <StyledDrawer
      data-testid={dataTestId}
      anchor={anchor}
      classes={{ paper: 'dot-drawer-paper' }}
      className={`dot-drawer ${className}`}
      onClose={(event: MouseEvent) => onClose && onClose(event)}
      open={open}
      PaperProps={{['data-testid']: 'drawer-paper'} as any}
      variant={variant}
      width={width}
    >
      {children}
    </StyledDrawer>
  );
};

export default DotDrawer;
