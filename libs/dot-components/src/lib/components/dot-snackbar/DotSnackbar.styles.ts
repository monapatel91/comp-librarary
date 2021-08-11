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
      padding: ${theme.spacing(1.375, 0)};
    }
    .MuiIconButton-label > .MuiSvgIcon-fontSizeSmall{
      font-size: 16px;
      height: 20px;
      width: 20px;
    }
    .MuiAlert-message {
      padding: ${theme.spacing(1.625, 0)};
    }
    &.MuiSnackbar-anchorOriginTopRight{
      top: auto;
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
      margin-top: ${theme.spacing(1)}px;
        @media (min-width: 720px) {
        .MuiAlert-root {
          top: 112px;
          position: relative;
        }
      }
    }
  `}
`;
