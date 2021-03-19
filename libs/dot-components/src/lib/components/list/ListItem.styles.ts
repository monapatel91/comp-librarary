import styled, { css } from 'styled-components';
import { ListItem } from '@material-ui/core';

export const rootClassName = 'dot-list-item';

export const StyledListItem = styled(ListItem)`
  ${({ theme }) =>
    css`
      &.${rootClassName} {
        display: flex;
        justify-content: space-between;

        .MuiTypography-root {
          flex-grow: 2;
        }

        .dot-icon i:before {
          color: ${theme.palette.text.primary};
        }
      }
    `}
` as typeof ListItem;
