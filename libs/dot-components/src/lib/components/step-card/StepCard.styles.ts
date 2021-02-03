import { DotCard } from '../card/Card';
import styled, { css } from 'styled-components';

export const rootClassName = 'dot-step-card';

export const StyledStepCard = styled(DotCard)`
  ${({ theme }) => css`
    &.dot-step-card {
      .dot-card-header > .dot-icon {
        margin-right: ${theme.spacing(1)}px;
      }

      .dot-card-actions .team {
        display: flex;
        flex-grow: 1;

        .team-avatar {
          align-self: center;
          margin-right: ${theme.spacing(1)}px;
        }
      }
    }
  `}
`;
