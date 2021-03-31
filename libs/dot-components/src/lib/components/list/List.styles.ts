import styled, { css } from 'styled-components';
import { List, ListItem } from '@material-ui/core';

export const rootClassName = 'dot-list';
export const listItemRootClass = 'dot-list-item';

export const StyledList = styled(List)`
  ${({ theme }) =>
    css`
      &.${rootClassName} {
        &.dot-nested-list .dot-list-item {
          padding-left: ${theme.spacing(4)}px;
        }

        .dot-list-item {
          p.MuiTypography-root {
            margin-bottom: 0;
          }
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
        .dot-link {
          align-items: center;
          display: flex;
        }

        .dot-icon i:before {
          color: ${theme.palette.text.primary};
        }
      }
    `}
` as typeof ListItem;
