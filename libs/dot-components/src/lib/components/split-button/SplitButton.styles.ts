import { ButtonGroup } from '@material-ui/core';
import styled, { css } from 'styled-components';

export const rootClassName = 'dot-split-button-group';

export const StyledSplitButtonGroup = styled(ButtonGroup)`
  &.${rootClassName} {
    .dot-button {
      margin: 0;
    }
  }
`;
