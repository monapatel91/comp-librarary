import { Chip } from '@material-ui/core';
import styled, { css } from 'styled-components';

export const rootClassName = 'dot-chip';

export const StyledChip = styled(Chip)`
  ${({ theme }) => css`
    &.${rootClassName} {
      &.MuiChip-sizeSmall {
        .dot-icon,
        .dot-avatar {
          width: 18px !important;
          height: 18px !important;
        }
      }

      &.Mui-error {
        background-color: ${theme.palette.error[50]};
        border-color: ${theme.palette.error.main};
        .MuiChip-deleteIcon {
          color: ${theme.palette.error.main};
        }
      }

      .MuiChip-deleteIcon {
        width: 18px;
        height: 18px;
      }

      .dot-icon {
        height: 24px;
        margin: 0 -8px 0 4px;
        padding: 0;
        width: 24px;
      }

      .dot-avatar .dot-icon {
        margin: 0;
      }
    }
  `}
`;
