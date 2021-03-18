import { Chip } from '@material-ui/core';
import styled, { css } from 'styled-components';

export const rootClassName = 'dot-pill';

export const StyledPill = styled(Chip)`
  ${({ theme }) => css`
    &.${rootClassName} {
      border-color: ${theme.palette.grey[300]};
      background-color: ${theme.palette.grey[200]};
      color: ${theme.palette.layer.n700};

      &.error {
        background-color: ${theme.palette.error[500]};
        border-color: ${theme.palette.error.main};
        color: ${theme.palette.layer.n0};
      }

      &.success {
        background-color: ${theme.palette.success[500]};
        border-color: ${theme.palette.error.main};
        color: ${theme.palette.layer.n0};
      }
      &.warning {
        background-color: ${theme.palette.warning[500]};
        border-color: ${theme.palette.error.main};
        color: ${theme.palette.layer.n700};
      }

      &.in-progress {
        background-color: ${theme.palette.primary.main};
        border-color: ${theme.palette.primary.main};
        color: ${theme.palette.layer.n0};
      }
  `}
`;
