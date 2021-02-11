import { Radio } from '@material-ui/core';
import styled, { css } from 'styled-components';

export const rootClassName = 'dot-radio';

export const StyledRadioButton = styled(Radio)`
  ${({ theme }) => css`{
  &.${rootClassName} {
    padding: 8px;
  }
  `}
`;
