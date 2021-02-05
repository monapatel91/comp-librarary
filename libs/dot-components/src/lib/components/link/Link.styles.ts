import { Link } from '@material-ui/core';
import styled from 'styled-components';

export const rootClassName = 'dot-link';

export const StyledLink = styled(Link)`
  &.${rootClassName} {
    cursor: pointer;

    .MuiTypography-body1 {
      margin-bottom: 0;
    }
  }
`;
