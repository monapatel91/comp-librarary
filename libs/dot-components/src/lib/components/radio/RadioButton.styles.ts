import { Radio } from '@material-ui/core';
import styled from 'styled-components';

export const rootClassName = 'dot-radio';

export const StyledRadioButton = styled(Radio)`
  &.${rootClassName} {
    padding: 8px;
  }
`;
