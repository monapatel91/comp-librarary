import { Link } from '@material-ui/core';
import styled from 'styled-components';

export const rootClassName = 'dot-link';

export const StyledLink = styled(Link)`
  &.${rootClassName} {
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0.03em;

    &:hover :not(.MuiLink-underlineHover) {
      text-decoration: none;
    }
  }
`;
