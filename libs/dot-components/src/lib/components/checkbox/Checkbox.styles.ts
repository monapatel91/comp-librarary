import { Checkbox } from '@material-ui/core';
import styled, { css } from 'styled-components';

export const rootClassName = 'dot-checkbox';

export const StyledCheckbox = styled(Checkbox)`
  ${({ theme }) => css`
    &.${rootClassName} {
      padding: ${theme.spacing(1)}px;
    }
  `}
`;
