import { Chip } from '@material-ui/core';
import styled, { css } from 'styled-components';
import { PillProps } from './Pill';

export const rootClassName = 'dot-pill';

export const StyledPill = styled(Chip)<PillProps>`
  ${({ theme }) => css`
    &.${rootClassName} {
      background-color: ${({ backgroundcolor }: PillProps) => {
        return backgroundcolor
          ? backgroundcolor
          : theme.palette.product === 'agility'
          ? theme.palette.layer.n100
          : theme.palette.grey[200];
      }};
      color: ${({ labelcolor }: PillProps) => {
        return labelcolor ? labelcolor : theme.palette.layer.n700;
      }};

      &.error {
        background-color: ${theme.palette.error[500]};
        color: ${theme.palette.layer.n0};
      }

      &.success {
        background-color: ${theme.palette.success[500]};
        color: ${theme.palette.layer.n0};
      }
      &.warning {
        background-color: ${theme.palette.warning[500]};
        color: ${theme.palette.layer.n700};
      }

      &.in-progress {
        background-color: ${theme.palette.primary.main};
        color: ${theme.palette.layer.n0};
      }
  `}
`;
