import { Tabs, fade } from '@material-ui/core';

import styled, { css } from 'styled-components';

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
      .MuiTab-root.MuiTab-textColorSecondary {
        &:hover {
          background-color: ${fade(theme.palette.secondary.main, 0.12)};
        }
      }
      .MuiTab-root.MuiTab-textColorPrimary {
        &:hover {
          background-color: ${fade(theme.palette.primary.main, 0.12)};
        }
      }
      .MuiTab-root {
        max-width: 360px;
        min-width: 0;
      }
      .MuiIcon-root {
        display: inline;
        padding-right: ${theme.spacing(0.5)}px;
      }
    }
  `}
`;
