import styled, { css } from 'styled-components';
import { Paper } from '@material-ui/core';

export const rootClassName = 'dot-message';
export const headerClassName = 'dot-message-header';
export const mainContentClassName = 'dot-message-main-content';

export const StyledMessage = styled(Paper)`
  ${({ theme }) => css`
    &.${rootClassName} {
      margin ${theme.spacing(0, 0, 2, 0)};
      display: flex;
      justify-content: space-between;
      padding: ${theme.spacing(2)}px;
      min-height: 46px;
      background-color: ${theme.palette.primary[50]};
      border: 1px solid ${theme.palette.primary[50]};
      &.error {
        background-color: ${theme.palette.error[50]};
        border-color: ${theme.palette.error.main};
      }
      &.success {
        background-color: ${theme.palette.success[50]};
        border-color: ${theme.palette.success.main};
      }
      .${mainContentClassName} {
        display: flex;
        align-items: center;
      }
      .${headerClassName} {
        margin-left: ${theme.spacing(2)}px;
      }
    }
  `}
`;
