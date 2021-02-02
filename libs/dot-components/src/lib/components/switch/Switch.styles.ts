import { Switch } from '@material-ui/core';
import styled, { css } from 'styled-components';

export const rootClassName = 'dot-switch';

export const StyledSwitch = styled(Switch)`
  ${({ theme }) => css`{
    &.dot-switch {
      margin-bottom: 6px;

      span.Mui-disabled {
          color: ${theme.palette.grey[50]};
      }

      /* &:hover {
      } */

  `}
`;
