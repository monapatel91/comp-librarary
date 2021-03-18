import styled, { css } from 'styled-components';
import { Typography } from '@material-ui/core';

export const rootClassName = 'wi-tooltip';

export const StyledTypography = styled(Typography)`
  ${({ theme }) => css`
    color: ${theme.palette.layer.n0};
    margin-bottom: 0;
  `}
`;

export const StyledTooltipTitle = styled.div`
  ${({ theme }) => css`
    &.${rootClassName} {
      .tooltip-header {
        display: flex;
        align-items: center;

        .dot-icon.unknown i {
          color: ${theme.palette.icon.unknown};
        }
        .dot-icon.improve i {
          color: ${theme.palette.icon.improve};
        }
        .dot-icon.maintain i {
          color: ${theme.palette.icon.maintain};
        }
      }
    }
  `}
`;
