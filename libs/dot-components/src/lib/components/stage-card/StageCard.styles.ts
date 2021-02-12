import { Timeline } from '@material-ui/lab';
import styled, { css } from 'styled-components';

export const rootClassName = 'dot-stage-card';
export const rootTimelineClassName = 'stage-timeline';

export const StyledStageTimeline = styled(Timeline)`
  ${({ theme }) => css`
    &.stage-timeline.MuiTimeline-root {
      margin: 0;
      padding-top: 0;

      .stage-timeline-dot {
        box-shadow: none;
        margin: 0;
      }

      .stage-timeline-item {
        &:before {
          display: none;
        }
        &:first-child .MuiTimelineContent-root {
          padding-top: 0;
          margin-top: ${theme.spacing(2)}px;
        }
        &:last-child .MuiTimelineConnector-root:last-of-type {
          background: transparent;
        }
      }
    }
  `}
`;
