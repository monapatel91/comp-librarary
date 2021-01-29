import { IconButton } from '@material-ui/core';
import styled, { css } from 'styled-components';

export const rootClassName = 'dot-icon-btn';

export const StyledIconButton = styled(IconButton)`
  ${({ theme }) => css`
    &.dot-icon-btn {
      &.MuiIconButton-sizeSmall {
        padding: ${theme.spacing(0.25)}px;

        .dot-icon {
          height: 20px;
          width: 20px;
        }
      }

      .dot-icon {
        padding: 0;
      }
    }
  `}
`;
