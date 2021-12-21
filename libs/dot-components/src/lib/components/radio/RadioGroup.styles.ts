import { RadioGroup } from '@material-ui/core';
import styled, { css } from 'styled-components';

export const groupClassName = 'dot-radio-group';
export const rootClassName = 'dot-radio-control';
export const wrapperClassName = 'dot-radio-group-wrapper';
export const groupLabelClassName = 'dot-radio-group-label';
export const startAdornmentClassName = 'dot-start-adornment';
export const endAdornmentClassName = 'dot-end-adornment';
export const placementClassName = 'dot-';

export const StyledRadioGroup = styled(RadioGroup)`
  ${({ theme }) => css`{
    &.${groupClassName} {
      padding-left: ${theme.spacing(2.5)}px;
    }
  `}
`;
