import { Badge } from '@material-ui/core';
import styled, { css } from 'styled-components';

export const rootClassName = 'dot-badge';

interface StyledBadgeProps {
  $badgeColor?: string;
}

export const StyledBadge = styled(Badge)<StyledBadgeProps>`
  ${() => css`
    &.${rootClassName} {
      .MuiBadge-badge {
        background-color: ${({ $badgeColor }: StyledBadgeProps) => {
          return $badgeColor;
        }};
      }
    }
  `}
`;
