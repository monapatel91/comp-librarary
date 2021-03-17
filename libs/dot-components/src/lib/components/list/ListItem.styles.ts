import styled from 'styled-components';
import { ListItem } from '@material-ui/core';

export const rootClassName = 'dot-list-item';

export const StyledListItem = styled(ListItem)`
  &.${rootClassName} {
    display: flex;
    justify-content: space-between;

    .MuiTypography-root {
      flex-grow: 2;
    }
  }
` as typeof ListItem;
