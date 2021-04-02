import { Chip } from '@material-ui/core';
import styled, { css } from 'styled-components';

export const rootClassName = 'dot-chip';

export const StyledChip = styled(Chip)`
  ${({ theme }) => css`
    &.${rootClassName} {
      border-color: ${theme.palette.grey[300]};

      .dot-icon i {
        height: auto;
      }

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

      &:not(.Mui-error) {
        &:hover {
          background-color: ${theme.palette.grey[50]};
        }

        .MuiChip-deleteIcon {
          &:hover {
            color: ${theme.palette.grey[400]};
          }
        }
      }

      .MuiChip-deleteIcon {
        width: 18px;
        height: 18px;
        color: ${theme.palette.grey[300]};
      }
    }
  `}
`;
