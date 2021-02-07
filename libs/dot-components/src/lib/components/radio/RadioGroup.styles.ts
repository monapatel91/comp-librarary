import { RadioGroup } from '@material-ui/core';
import styled, { css } from 'styled-components';

export const rootClassName = 'dot-radio-group';

export const StyledRadioGroup = styled(RadioGroup)`
  ${({ theme }) => css`{
    &.dot-radio {
        padding: 8px;
      }
  `}
`;
