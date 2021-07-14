import { Drawer, fade } from '@material-ui/core';
import styled, { css } from 'styled-components';
import { DrawerProps } from './Drawer';

export const rootClassName = 'dot-drawer';

export const StyledDrawer = styled(Drawer)<DrawerProps>`
  ${({ theme }) => css`
    &.dot-drawer {
      .MuiBackdrop-root {
        background-color: ${fade(theme.palette.grey[900], 0.7)};
      }
    }

    .dot-drawer-paper {
      height: ${({ height, anchor }: DrawerProps) =>
        anchor === 'left' || anchor === 'right' ? '100%' : height};
      width: ${({ width, anchor }: DrawerProps) =>
        anchor === 'bottom' || anchor === 'top' ? '100%' : width};
      padding: ${theme.spacing(2)}px;
    }
  `}
`;
