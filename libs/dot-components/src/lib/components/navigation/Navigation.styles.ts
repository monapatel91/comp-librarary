import { Theme } from '@material-ui/core';
import styled, { css } from 'styled-components';

export const rootClassName = 'dot-navigation';

export const StyledNavigation = styled.nav`
  ${({ theme }: { theme: Theme }) => css`
    &.dot-navigation {
      ul,
      li {
        display: flex;
        margin: 0;
        padding: 0;
      }

      ul {
        flex-direction: column;

        &.horizontal {
          flex-direction: row;
        }

        &.vertical {
          li a {
            padding: ${theme.spacing(1 * 0.5, 0)}px;
          }
        }
      }
    }
  `}
`;
