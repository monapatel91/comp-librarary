import { IconButton } from '@material-ui/core';
import styled, { css } from 'styled-components';

export const rootClassName = 'dot-icon-btn';

export const StyledIconButton = styled(IconButton)`
  ${() => css`
    &.${rootClassName} {
      padding: 10px;

      &.MuiIconButton-root {
        font-size: inherit;

        .dot-icon.MuiIcon-fontSizeSmall {
          padding: 1px;
        }
      }

      &.MuiIconButton-sizeSmall {
        padding: 3px;
      }
    }
  `}
`;
