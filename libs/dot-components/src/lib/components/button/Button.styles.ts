import { Button, darken } from '@material-ui/core';
import styled, { css } from 'styled-components';

export const rootClassName = 'dot-button';

export const StyledButton = styled(Button)`
  ${({ theme }) => css`
    &.MuiButton-containedSecondary {
      background-color: ${theme.palette.error.main};

      &:hover,
      &:active {
        background-color: ${darken(theme.palette.error.main, 0.2)};
      }
    }

    &.MuiButton-text {
      padding: 6px 16px;
    }

    span.dot-icon {
      padding: 0;

      i {
        height: auto;
      }
    }
  `}
`;
