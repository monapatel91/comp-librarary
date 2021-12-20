import { Alert } from '@mui/material';
import { AlertBannerProps } from './AlertBanner';
import styled, { css } from 'styled-components';

export const rootClassName = 'dot-alert-banner';

export const StyledAlertBanner = styled(Alert)<AlertBannerProps>`
  ${({ theme }) => css`
    &.${rootClassName} {
      border-radius: 0;
      padding: ${theme.spacing(2, 2)};
      display: flex;
      align-items: center;
      .MuiAlert-icon,
      .MuiAlert-message {
        padding: 0;
        .dot-typography {
          margin-bottom: 0;
        }
      }
      &.MuiAlert-standardSuccess {
        .MuiAlert-icon,
        .dot-typography {
          color: ${theme.palette.success[700]};
        }
      }
      &.MuiAlert-standardInfo {
        background-color: ${theme.palette.primary[50]};
        .MuiAlert-icon,
        .dot-typography {
          color: ${theme.palette.primary[500]};
        }
      }
      &.MuiAlert-standardWarning {
        background-color: ${theme.palette.warning[100]};
        color: ${theme.palette.grey[700]};
        .MuiAlert-icon,
        .dot-typography {
          color: ${theme.palette.grey[700]};
        }
      }
      &.MuiAlert-standardError {
        .MuiAlert-icon,
        .dot-typography {
          color: ${theme.palette.error[700]};
        }
      }
    }
  `}
`;
