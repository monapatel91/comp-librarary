import { Badge } from '@material-ui/core';
import styled, { css } from 'styled-components';
import { BadgeProps } from './Badge';

export const rootClassName = 'dot-badge';

export const StyledBadge = styled(Badge)<BadgeProps>`
  ${() => css`
    &.${rootClassName} {
      .MuiBadge-badge {
        background-color: ${({ badgeColor }: BadgeProps) => {
          return badgeColor;
        }};
      }
    }
  `}
`;
