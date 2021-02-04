import { Switch } from '@material-ui/core';
import styled, { css } from 'styled-components';

export const rootClassName = 'dot-switch';

export const StyledSwitch = styled(Switch)`
  ${({ theme }) => css`{
    &.dot-switch {
      span.Mui-disabled {
        color: ${theme.palette.grey[200]};
      }

      .MuiSwitch-switchBase
        :not(.Mui-checked) 
        :not(.Mui-disabled) {
            color: ${theme.palette.background.default};
        }
      }
  `}
`;
