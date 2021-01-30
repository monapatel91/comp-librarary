import { Switch } from '@material-ui/core';
import styled, { css } from 'styled-components';

export const rootClassName = 'dot-switch';

export const StyledSwitch = styled(Switch)`
  ${({ theme }) => css`{
    &.dot-switch {
      margin-bottom: 8px;
    }
  `}
`;
