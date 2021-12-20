import styled, { css } from 'styled-components';
import { Toolbar } from '@mui/material';

export const rootClassName = 'dot-action-toolbar';

export const StyledToolbar = styled(Toolbar)`
  ${({ theme }) => css`
    &.${rootClassName} {
      border-bottom: 1px solid
        ${theme.palette.product === 'agility'
          ? theme.palette.layer.n100
          : theme.palette.grey[100]};
    }
  `}
`;
