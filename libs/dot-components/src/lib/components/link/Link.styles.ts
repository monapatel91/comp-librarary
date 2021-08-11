import { Link } from '@material-ui/core';
import styled, { css } from 'styled-components';
import { agilityGreen } from '../../theme-provider/colors/light-theme-colors';

export const rootClassName = 'dot-link';

export const StyledLink = styled(Link)`
  ${({ theme }) => css`
    &.${rootClassName} {
      color: ${theme.palette.product === 'agility' && agilityGreen};
      cursor: pointer;

      &:hover :not(.MuiLink-underlineHover) {
        text-decoration: none;
      }
    }
  `}
`;
