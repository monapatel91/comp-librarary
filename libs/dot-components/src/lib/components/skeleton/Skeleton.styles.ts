import { Skeleton } from '@mui/material';
import styled, { css } from 'styled-components';

export const rootClassName = 'dot-skeleton';

export const StyledSkeleton = styled(Skeleton)`
  ${({ theme }) => css`
    &.${rootClassName} {
      background-color: ${theme.palette.grey[100]};
    }
  `}
`;
