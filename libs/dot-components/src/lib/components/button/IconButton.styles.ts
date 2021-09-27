import { IconButton } from '@material-ui/core';
import styled, { css } from 'styled-components';

export const rootClassName = 'dot-icon-btn';

export const StyledIconButton = styled(IconButton)`
  ${({ theme }) => css`
    &.${rootClassName} {
      padding: 10px;

      &.MuiIconButton-root {
        font-size: inherit;

        .dot-icon {
          /* padding: 1px; */
        }
      }

      &.MuiIconButton-sizeSmall {
        padding: ${theme.spacing(0.25)}px;
      }
    }
  `}
`;
