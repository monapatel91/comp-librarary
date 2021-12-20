import { DotCard } from '@digital-ai/dot-components';
import styled, { css } from 'styled-components';

export const rootClassName = 'vsm-hub-tool-dfps';

export const StyledTotalDFpsCard = styled(DotCard)`
  ${({ theme }) => css`
    &.${rootClassName} {
      .error {
        color: ${theme.palette.error[500]};
      }
    }
  `}
`;
