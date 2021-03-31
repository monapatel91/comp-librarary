import styled, { css } from 'styled-components';

export const rootClassName = 'dot-progress-icon';
export const progressClassName = 'dot-progress-indicator';

export const StyledProgressIcon = styled.div`
  ${({ theme }) => css`
    &.${rootClassName} {
      position: relative;
      .${progressClassName} {
        position: absolute;
        top: 0;
        }
      }
      .MuiAvatar-root {
        background-color: ${theme.palette.primary[100]};
        color: ${theme.palette.primary.main};
        }
      &.error {
      .MuiCircularProgress-root {
        color: ${theme.palette.error.main};
        }
        .MuiAvatar-root {
         background-color: ${theme.palette.error[100]};
         color: ${theme.palette.error.main};
        }
      }
      &.success {
      .MuiCircularProgress-root {
        color: ${theme.palette.success.main};
        }
        .MuiAvatar-root {
         background-color: ${theme.palette.success[100]};
         color: ${theme.palette.success.main};
        }
      }
    }
  `}
`;
