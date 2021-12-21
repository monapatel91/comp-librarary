import { RadioGroup } from '@material-ui/core';
import styled, { css } from 'styled-components';

export const groupClassName = 'dot-radio-group';
export const rootClassName = 'dot-radio-control';

export const StyledRadioGroup = styled(RadioGroup)`
  ${({ theme }) => css`{
    &.${groupClassName} {
      padding-left: ${theme.spacing(2.5)}px;
    }
  `}
`;
