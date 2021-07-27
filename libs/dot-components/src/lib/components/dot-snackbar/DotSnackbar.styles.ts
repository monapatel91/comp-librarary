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
    .MuiAlert-message {
        color: #fff;
      }
      .MuiSnackbar-anchorOriginTopRight{
          top: 112px;
          z-index: 999;
        }
      .MuiAlert-root {
        max-width: 500px;
        background-color: ${(props: StyledProps) =>
          theme.palette[props.severity].main};
        color: #fff;
        top: 112px;
        z-index: 999;
        position: relative;
      .MuiButtonBase-root.MuiIconButton-sizeSmall {
        .MuiSvgIcon-fontSizeSmall {
          font-size: 16px;
        }
      }
      @media (min-width: 720px) {
        .MuiAlert-root {
          top: 112px;
          position: relative;
        }
      }
    }
  `}
`;
