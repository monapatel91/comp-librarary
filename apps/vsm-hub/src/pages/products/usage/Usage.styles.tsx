import { DotCard, DotIcon } from '@digital-ai/dot-components';
import styled, { css } from 'styled-components';

export const rootClassName = 'vsm-hub-usage';
export const tableCardClassName = 'vsm-hub-table-card';
export const iconClassName = 'vsm-hub-usages-icon';

export const StyledTableCard = styled(DotCard)`
  ${({ theme }) => css`
    &.${tableCardClassName} {
      margin-top: ${theme.spacing(2)}px;
    }
    .label {
      margin-left: ${theme.spacing(1)}px;
    }
  `}
`;

export const StyledStatusIcon = styled(DotIcon)`
  ${({ theme }) => css`
    &.${iconClassName} {
      margin: 0 auto;
      &.error {
        color: ${theme.palette.error[500]};
      }
      &.warning {
        color: ${theme.palette.warning[500]};
      }
    }
  `}
`;
