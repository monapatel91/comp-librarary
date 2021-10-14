import { IconButton } from '@material-ui/core';
import styled, { css } from 'styled-components';
import { g500 } from '../../theme-provider/colors/light-theme-colors';

export const rootClassName = 'dot-icon-btn';

export const StyledIconButton = styled(IconButton)`
  ${({ theme }) => css`
    &.${rootClassName} {
      border: ${theme.palette.product === 'agility' && '1px solid transparent'};
      border-color: ${theme.palette.product === 'agility' &&
      theme.palette.layer.n400};
      color: ${theme.palette.product === 'agility' &&
      theme.palette.agilityInterface.textColor};
      font-size: inherit;
      padding: 10px;

      &:hover {
        background: ${theme.palette.product === 'agility' &&
        theme.palette.layer.n0};
      }

      &:active,
      &:focus,
      &:focus-visible,
      &.Mui-focusVisible {
        background: ${theme.palette.product === 'agility' &&
        theme.palette.agilityInterface.activeCardBg};
        border-color: ${theme.palette.product === 'agility' && g500};
      }

      .dot-icon.MuiIcon-fontSizeSmall {
        padding: 1px;
      }

      &.MuiIconButton-sizeSmall {
        padding: 3px;
      }
    }
  `}
`;
