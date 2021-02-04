import { FormControlLabel } from '@material-ui/core';
import styled, { css } from 'styled-components';

export const rootClassName = 'dot-form-control-label';

export const StyledFormControlLabel = styled(FormControlLabel)`
  ${({ theme }) => css`{
    &.${rootClassName} {
      .MuiTypography-body1 {
        margin-bottom: 0px;
      }
  `}
`;
