import { CircularProgress } from '@mui/material';
import styled from 'styled-components';

export const rootClassName = 'dot-progress';

export const StyledCircularProgress = styled(CircularProgress)`
  &.${rootClassName} {
    &.MuiCircularProgress-colorSecondary {
      color: #649a3d;
    }
  }
`;
