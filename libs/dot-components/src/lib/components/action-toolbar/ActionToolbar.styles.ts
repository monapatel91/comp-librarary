import styled, { css } from 'styled-components';
import Toolbar from '@material-ui/core/Toolbar';
import { Theme } from '@material-ui/core/styles';

export const rootClassName = 'dot-action-toolbar';

export const StyledToolbar = styled(Toolbar)`
  ${({ theme }: { theme: Theme }) => css`
    &.${rootClassName} {
      border-bottom: 1px solid ${theme.palette.grey[100]};
    }
  `}
`;
