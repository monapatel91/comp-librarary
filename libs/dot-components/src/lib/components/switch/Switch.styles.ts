import { Switch } from '@material-ui/core';
import styled, { css } from 'styled-components';

export const rootClassName = 'dot-switch';

export const StyledSwitch = styled(Switch)`
  ${({ theme }) => css`{
    &.dot-switch {

      // Does not work
      .MuiTypography-body1 {
        margin-bottom: 0px;
      }

      // Following line will fix alignment by raising the Switch
      // margin-bottom: 6px;

      span.Mui-disabled {
        color: ${theme.palette.grey[50]};
      }

      /* &:hover {
      } */

  `}
`;
