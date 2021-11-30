import styled, { css } from 'styled-components';
import { DotButton } from '../button/Button';

export const rootClassName = 'dot-progress-button';

export const StyledProgressButton = styled(DotButton)`
  ${({ theme }) => css`
    &.${rootClassName} {
      .hidden {
        // hide children but preserve its space so that
        // button's dimensions don't change
        visibility: hidden;
      }
      .progress-circle {
        color: ${theme.palette.layer.n300};
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        margin: auto;
      }
    }
  `}
`;
