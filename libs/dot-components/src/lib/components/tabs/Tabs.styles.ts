import { Tabs, fade } from '@material-ui/core';
import styled, { css } from 'styled-components';
import { agilityGreen } from '../../theme-provider/colors/light-theme-colors';

export const rootClassName = 'dot-tabs';

export const StyledTabs = styled(Tabs)`
  ${({ theme }) => css`
    &.${rootClassName} {
      &.MuiTabs-root {
        width: 100%;
      }
      .dot-tab-label-container {
        display: flex;
        .dot-tab-label {
          padding-top: ${theme.spacing(0.5)}px;
        }
      }
      .MuiTab-root {
        color: ${theme.palette.product === 'agility' &&
        theme.palette.layer.n700};
        max-width: 360px;
        min-width: 0;
        &:hover {
          background-color: ${theme.palette.product === 'agility' &&
          theme.palette.agilityInterface.activeCardBg};
          color: ${theme.palette.product === 'agility' && agilityGreen};
        }
        &.Mui-selected {
          color: ${theme.palette.product === 'agility' && agilityGreen};
        }
        &.Mui-disabled {
          color: ${theme.palette.product === 'agility' &&
          theme.palette.agilityInterface.disabledText};
        }
        &.MuiTab-textColorPrimary:hover {
          background-color: ${theme.palette.product !== 'agility' &&
          fade(theme.palette.primary.main, 0.12)};
        }
        &.MuiTab-textColorSecondary:hover {
          background-color: ${theme.palette.product !== 'agility' &&
          fade(theme.palette.secondary.main, 0.12)};
        }
      }
      .MuiIcon-root {
        display: inline;
        padding-right: ${theme.spacing(0.5)}px;
      }
      .MuiTabs-indicator {
        background-color: ${theme.palette.product === 'agility' &&
        agilityGreen};
      }
    }
  `}
`;
