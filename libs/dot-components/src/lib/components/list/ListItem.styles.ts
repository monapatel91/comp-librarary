import styled, { css } from 'styled-components';
import { ListItem } from '@mui/material';
import { listItemRootClass } from './List.styles';

export const flyoutListItemClassName = 'dot-flyout-list-item';
export const flyoutItemLinkClassName = 'dot-flyout-item-link';
export const listItemLinkClassName = 'dot-list-item-link';

export const StyledListItem = styled(ListItem)`
  ${({ theme }) => css`
    &.${listItemRootClass} {
      &.${flyoutListItemClassName} {
        padding: 0;
      }

      p.MuiTypography-root {
        margin-bottom: 0;
      }

      .${listItemLinkClassName} {
        align-items: center;
        display: flex;
        flex-grow: 2;
      }

      .${flyoutItemLinkClassName} .MuiIcon-root {
        margin-right: ${theme.spacing(4)}px;
      }

      .dot-list-item-end-icon {
        min-width: auto;
      }

      .dot-icon i:before {
        color: ${theme.palette.text.primary};
      }
    }
  `}
` as typeof ListItem;
