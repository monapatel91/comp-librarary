import { ButtonGroup } from '@material-ui/core';
import styled from 'styled-components';
import { DotMenu } from '../menu/Menu';

export const rootClassName = 'dot-split-button-group';

export const StyledSplitButtonGroup = styled(ButtonGroup)`
  &.${rootClassName} {
    .dot-button {
      margin: 0;
    }
  }
`;

export const StyledMenu = styled(DotMenu)`
  &.dot-menu {
    z-index: 9999;
  }
`;
