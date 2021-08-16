import { Snackbar } from '@material-ui/core';
import styled, { css } from 'styled-components';

export const rootClassName = 'dot-snackbar';

interface StyledProps {
  severity: string;
}

export const StyledSnackbar = styled(Snackbar)<StyledProps>`
  ${({ theme }) => css`
  &.${rootClassName} {
    .MuiSvgIcon-root {
      color: #fff;
    }
    .MuiAlert-icon {
      padding: 11px 0px;
    }
    .MuiIconButton-label > .MuiSvgIcon-fontSizeSmall{
      font-size: 16px;
      height: 20px;
      width: 20px;
    }
    .MuiAlert-message {
      padding: 13px 0px;
      word-break: break-all;
    }
    &.MuiSnackbar-anchorOriginTopRight{
      top: 0px;
      z-index: 999;
    }
    .MuiAlert-root {
      &.MuiAlert-standardInfo{
        background-color: ${theme.palette.primary[500]};
      }
      &.MuiAlert-standardWarning{
        color: ${theme.palette.grey[900]};
        .MuiSvgIcon-root{
          color: ${theme.palette.grey[900]};
        }
      }
      max-width: 500px;
      min-width: 344px;
      background-color: ${(props: StyledProps) =>
        theme.palette[props.severity].main};
      color: #fff;
      z-index: 999;
      position: relative;
      margin-top: 108px;
        @media (min-width: 720px) {
        .MuiAlert-root {
          top: 112px;
          position: relative;
        }
      }
    }
  `}
`;
