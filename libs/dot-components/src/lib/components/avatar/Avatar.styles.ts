import { Avatar } from '@mui/material';
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
        return theme.palette.product === 'agility' && color === 'default'
          ? theme.palette.layer.n0
          : color && theme.palette.avatarColors[color]
          ? theme.palette.avatarColors[color].backgroundColor
          : theme.palette.avatarColors['default'].backgroundColor;
      }};
      border: 0px;
      &:focus-visible {
        box-shadow: 0px 0px 0px 3px ${theme.palette.layer.n0},
          0px 0px 0px 5px ${theme.palette.layer.n900};
        outline: 0;
      }

      .dot-i,
      .dot-typography {
        color: ${({ color }: AvatarProps) => {
          return theme.palette.product === 'agility' && color === 'default'
            ? theme.palette.layer.n700
            : color && theme.palette.avatarColors[color]
            ? theme.palette.avatarColors[color].color
            : theme.palette.avatarColors['default'].color;
        }};
      }

      &.small {
        height: ${theme.spacing(avatarSpacing.small)};
        width: ${theme.spacing(avatarSpacing.small)};
      }

      &.medium {
        height: ${theme.spacing(avatarSpacing.medium)};
        width: ${theme.spacing(avatarSpacing.medium)};
      }

      &.large {
        height: ${theme.spacing(avatarSpacing.large)};
        width: ${theme.spacing(avatarSpacing.large)};
      }
    }
  `}
`;
