import styled, { css } from 'styled-components';
import { Theme, Toolbar } from '@material-ui/core';

export const rootClassName = 'dot-action-toolbar';

export const StyledToolbar = styled(Toolbar)`
  ${({ theme }: { theme: Theme }) => css`
    &.${rootClassName} {
      border-bottom: 1px solid ${theme.palette.grey[100]};
    }
  `}
`;
