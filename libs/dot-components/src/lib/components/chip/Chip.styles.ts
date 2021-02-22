import { Chip } from '@material-ui/core';
import styled, { css } from 'styled-components';

export const rootClassName = 'dot-chip';

export const StyledChip = styled(Chip)`
  ${({ theme }) => css`
    &.${rootClassName} {
      &.MuiChip-sizeSmall {
        .dot-icon,
        .dot-avatar {
          width: 18px;
          height: 18px;
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
    }
  `}
`;
