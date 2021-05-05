import styled, { css } from 'styled-components';
import { DotDrawer } from '../../components/drawer/Drawer';
import { DotTypography } from '../../components/typography/Typography';

export const rootClassName = 'pb-drawer';

export const StyledTooltipContent = styled(DotTypography)`
  ${({ theme }) => css`
    color: ${theme.palette.layer.n0};
  `}
`;

export const StyledDotDrawer = styled(DotDrawer)`
  ${({ theme }) => css`
      .dot-drawer-paper {
        padding: 0;
        border: none;
        box-shadow: inset 1px 0 ${theme.palette.progressionBoard.boardColumnHeader};
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
