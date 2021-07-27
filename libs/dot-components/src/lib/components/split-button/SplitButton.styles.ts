import { ButtonGroup } from '@material-ui/core';
import styled, { css } from 'styled-components';
import { DotMenu } from '../menu/Menu';

export const rootClassName = 'dot-split-button-group';

export const StyledSplitButtonGroup = styled(ButtonGroup)`
  ${({ theme }) => css`
    &.${rootClassName} {
      box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),
        0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
      &.disabled {
        box-shadow: none;

        .dot-button {
          background: ${theme.palette.grey['50']};
          border: 1px solid ${theme.palette.grey['200']};
        }
      }

      &.outlined,
      &.text {
        box-shadow: none;
        .expand-button {
          border-left: none;
        }
      }

      &.outlined .dot-button {
        border-color: ${theme.palette.grey['300']};
      }

      &.destructive .expand-button {
        border-left-color: ${theme.palette.error['800']};
      }

      .dot-button {
        box-shadow: none;
        margin: 0;
        padding: ${theme.spacing(0.75, 1.5)};
      }

      .expand-button {
        border-left: 1px solid ${theme.palette.primary['800']};

        &.Mui-disabled {
          border-left: 0;
        }

        .MuiButton-label,
        .dot-icon {
          width: 14px;
          height: 14px;
        }
      }
    }
  `}
`;

export const StyledMenu = styled(DotMenu)`
  &.dot-menu {
    z-index: 9999;
  }
`;
