import styled, { css } from 'styled-components';
import { List, ListItem } from '@material-ui/core';
import { levelBottom } from './../../theme-provider/common/variables';

export const rootClassName = 'dot-list';
export const listItemRootClass = 'dot-list-item';
export const nestedListClassName = 'dot-nested-list';
export const nestedDrawerClassName = 'dot-nested-drawer';
export const flyoutListItemClassName = 'dot-flyout-list-item';
export const flyoutItemLinkClassName = 'dot-flyout-item-link';
export const listItemLinkClassName = 'dot-list-item-link';

export const StyledList = styled(List)`
  ${({ theme }) =>
    css`
      &.${rootClassName} {
        background: ${theme.palette.layer.n0};

        &.${nestedListClassName} .${listItemRootClass} {
          padding-left: ${theme.spacing(4)}px;
        }

        .${nestedDrawerClassName} .dot-drawer-paper {
          z-index: ${levelBottom};
        }

        .MuiListSubheader-root {
          padding: 0;

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

        .dot-list-item-end-icon {
          /* min-width: auto; */
        }

        .dot-icon i:before {
          color: ${theme.palette.text.primary};
        }
      }
    `}
` as typeof ListItem;
