import { Button, darken, Theme } from '@material-ui/core';
import styled, { css } from 'styled-components';

export const rootClassName = 'dot-button';

export const StyledButton = styled(Button)`
  ${({ theme }: { theme: Theme }) => css`
    &.MuiButton-containedSecondary {
      background-color: ${theme.palette.error.main};

      &:hover,
      &:active {
        background-color: ${darken(theme.palette.error.main, 0.2)};
      }
    }

    span.dot-icon {
      padding: 0;
    }
  `}
`;
