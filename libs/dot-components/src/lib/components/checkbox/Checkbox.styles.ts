import { Checkbox } from '@material-ui/core';
import styled from 'styled-components';

export const rootClassName = 'dot-checkbox';

export const StyledCheckbox = styled(Checkbox)`
  &.${rootClassName} {
    padding: 8px;
  }
`;
