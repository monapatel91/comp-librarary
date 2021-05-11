import styled, { css } from 'styled-components';
import { List, ListItem } from '@material-ui/core';

export const rootClassName = 'dot-list';
export const listItemRootClass = 'dot-list-item';
export const nestedListClassName = 'dot-nested-list';
export const flyoutListItemClassName = 'dot-flyout-list-item';
export const flyoutItemLinkClassName = 'dot-flyout-item-link';
export const listItemLinkClassName = 'dot-list-item-link';

export const StyledList = styled(List)`
  ${({ theme }) =>
    css`
      &.${rootClassName} {
        &.${nestedListClassName} .${listItemRootClass} {
          padding-left: ${theme.spacing(4)}px;
        }

        .MuiListSubheader-root {
          padding: 0;
          border-bottom: 1px solid ${theme.palette.grey[100]};

          .MuiTypography-root {
            padding: ${theme.spacing(1)}px;
          }
        }
      }
    `}
` as typeof List;

export const StyledListItem = styled(ListItem)`
  ${({ theme }) =>
    css`
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

        .dot-icon i:before {
          color: ${theme.palette.text.primary};
        }
      }
    `}
` as typeof ListItem;
