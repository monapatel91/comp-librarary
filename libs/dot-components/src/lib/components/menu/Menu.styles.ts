import { Popper } from '@material-ui/core';
import styled, { css } from 'styled-components';

export const rootClassName = 'dot-menu';

export const StyledPopper = styled(Popper)`
  ${({ theme }) => css`
    ul {
      background: ${theme.palette.product === 'agility' &&
      theme.palette.layer.n100};
      min-width: 112px;
      max-width: 280px;
      max-height: calc(100vh - 24px);
      overflow: auto;

      .dot-link {
        color: ${theme.palette.product === 'agility' &&
        theme.palette.layer.n700};
      }
    }
  `}
`;
