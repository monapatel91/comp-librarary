import { Badge } from '@material-ui/core';
import styled, { css } from 'styled-components';
import { DotBadgeProps } from './Badge';

export const rootClassName = 'dot-badge';

export const StyledBadge = styled(Badge)<DotBadgeProps>`
  ${() => css`
    &.${rootClassName} {
      .MuiBadge-badge {
        background-color: ${({ badgeColor }: DotBadgeProps) => {
          return badgeColor;
        }};
      }
    }
  `}
`;
