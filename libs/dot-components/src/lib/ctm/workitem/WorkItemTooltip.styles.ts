import styled, { css } from 'styled-components';

export const rootClassName = 'wi-tooltip';

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
