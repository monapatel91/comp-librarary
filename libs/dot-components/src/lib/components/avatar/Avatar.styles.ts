import { Avatar } from '@material-ui/core';
import styled, { css } from 'styled-components';

export const rootClassName = 'dot-avatar';

const avatarSpacing = {
  small: 3,
  medium: 5,
  large: 7,
};

export const StyledAvatar = styled(Avatar)`
  ${({ theme }) => css`
    &.MuiAvatar-root {
      background-color: ${theme.palette.grey[100]};
      color: ${theme.palette.text.primary};

      &.small {
        height: ${theme.spacing(avatarSpacing.small)}px;
        width: ${theme.spacing(avatarSpacing.small)}px;
      }

      &.medium {
        height: ${theme.spacing(avatarSpacing.medium)}px;
        width: ${theme.spacing(avatarSpacing.medium)}px;
      }

      &.large {
        height: ${theme.spacing(avatarSpacing.large)}px;
        width: ${theme.spacing(avatarSpacing.large)}px;
      }
    }
  `}
`;
