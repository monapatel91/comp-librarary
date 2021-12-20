import { Badge } from '@mui/material';
import styled, { css } from 'styled-components';

export const rootClassName = 'dot-badge';

interface StyledBadgeProps {
  /* Transient prop (NOT being passed to the underlying DOM element) */
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
