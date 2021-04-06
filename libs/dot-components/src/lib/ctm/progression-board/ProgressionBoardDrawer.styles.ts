import styled, { css } from 'styled-components';
import { DotDrawer } from '../../components/drawer/Drawer';

export const rootClassName = 'pb-drawer';

export const StyledDotDrawer = styled(DotDrawer)`
  ${({ theme }) => css`
      .dot-drawer-paper {
        padding: 0;
        border: none;
        box-shadow: inset 1px 0 ${theme.palette.grey[200]};
        transition: width 0.2s;
      }
    }
  `}
`;

export const StyledProgressionBoardDrawer = styled.div`
  &.${rootClassName} {
    height: 100%;
    word-break: break-word;
  }
`;
