import { CircularProgress } from '@material-ui/core';
import styled from 'styled-components';

export const rootClassName = 'dot-progress';

export const StyledCircularProgress = styled(CircularProgress)`
    &.${rootClassName} {
      &.MuiCircularProgress-colorSecondary {
        color: #649A3D;
      }
    }
`;
