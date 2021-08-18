import { Link } from '@material-ui/core';
import styled, { css } from 'styled-components';

export const rootClassName = 'dot-link';

export const StyledLink = styled(Link)`
  ${({ theme }) => css`
    &.${rootClassName} {
      color: ${theme.palette.product === 'agility' && '#244451'};
      cursor: pointer;

      &:hover :not(.MuiLink-underlineHover) {
        text-decoration: none;
      }
    }
  `}
`;
