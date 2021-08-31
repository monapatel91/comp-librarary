import { Drawer } from '@material-ui/core';
import { alpha } from '@material-ui/core/styles';
import styled, { css } from 'styled-components';
import { DrawerProps } from './Drawer';

export const rootClassName = 'dot-drawer';

export const StyledDrawer = styled(Drawer)<DrawerProps>`
  ${({ theme }) => css`
    &.dot-drawer .MuiBackdrop-root {
      background-color: ${alpha(theme.palette.grey[900], 0.7)};
    }

    .dot-drawer-paper {
      background-color: ${theme.palette.product === 'agility' &&
      theme.palette.layer.n50};
      height: ${({ height, anchor }: DrawerProps) =>
        anchor === 'left' || anchor === 'right' ? '100%' : height};
      padding: ${theme.spacing(2)}px;
      width: ${({ width, anchor }: DrawerProps) =>
        anchor === 'bottom' || anchor === 'top' ? '100%' : width};
    }
  `}
`;
