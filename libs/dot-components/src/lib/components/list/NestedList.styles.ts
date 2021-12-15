import styled, { css, keyframes } from 'styled-components';
import { nestedDrawerClassName } from './List.styles';
import { DotDrawer } from '../drawer/Drawer';
import { levelFirst, levelBottom } from '../../theme-provider/common/variables';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const StyledDotDrawer = styled(DotDrawer)`
  ${({ open }) => css`
    &.${nestedDrawerClassName} {
      .dot-drawer-paper {
        z-index: ${open ? levelFirst : levelBottom};
        animation: ${open &&
        css`
          ${fadeIn} 0.2s cubic-bezier(1,0,1,.01);
        `};
      }
    }
  `}
`;
