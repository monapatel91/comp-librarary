import { Avatar } from '@material-ui/core';
import styled, { css } from 'styled-components';
import { AvatarProps } from './Avatar';

export const rootClassName = 'dot-avatar';

const avatarSpacing = {
  small: 3,
  medium: 5,
  large: 7,
};

export const StyledAvatar = styled(Avatar)<AvatarProps>`
  ${({ theme }) => css`
    &.MuiAvatar-root {
      background-color: ${({ color }: AvatarProps) => {
        return color && theme.palette.avatarColors[color]
          ? theme.palette.avatarColors[color].backgroundColor
          : theme.palette.avatarColors['default'].backgroundColor;
      }};

      .dot-i,
      .dot-typography {
        color: ${({ color }: AvatarProps) => {
          return color && theme.palette.avatarColors[color]
            ? theme.palette.avatarColors[color].color
            : theme.palette.avatarColors['default'].color;
        }};
      }

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
