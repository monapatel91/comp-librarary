import { Popper } from '@material-ui/core';
import styled from 'styled-components';

export const rootClassName = 'dot-menu';

export const StyledPopper = styled(Popper)`
  ul {
    min-width: 112px;
    max-width: 280px;
    max-height: calc(100vh - 24px);
    overflow: auto;
  }
`;
