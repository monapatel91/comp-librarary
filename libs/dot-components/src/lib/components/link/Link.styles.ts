import { Link } from '@material-ui/core';
import styled, { css } from 'styled-components';

export const rootClassName = 'dot-link';

export const StyledLink = styled(Link)`
  ${({ theme }) => css`
    &.${rootClassName} {
      cursor: pointer;

      .MuiTypography-body1 {
        margin-bottom: 0px;
      }
    }
  `}
`;
