import styled, { css } from 'styled-components';

export const rootClassName = 'dot-checkbox-group';
export const checkboxListClassName = 'dot-checkbox-list';
export const checkboxListItemClassName = 'dot-checkbox-list-item';

export const StyledCheckboxGroup = styled.div`
  ${({ theme }) => css`{
    .${checkboxListClassName} {
        list-style: none;
        margin-top: 0;
        padding-left: ${theme.spacing(2.5)}px;
    }
  `}
`;
