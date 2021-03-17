import styled, { css } from 'styled-components';
import { List } from '@material-ui/core';

export const rootClassName = 'dot-list';

export const StyledList = styled(List)`
  ${({ theme }) =>
    css`
      &.${rootClassName} {
        &.dot-nested-list .dot-list-item {
          padding-left: ${theme.spacing(4)}px;
        }
      }
    `}
` as typeof List;
