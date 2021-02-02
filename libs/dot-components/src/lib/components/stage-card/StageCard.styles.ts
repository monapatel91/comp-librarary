import { Timeline } from '@material-ui/lab';
import { DotCard } from '../card/Card';
import styled, { css } from 'styled-components';

export const rootClassName = 'dot-stage-card';
export const rootTimelineClassName = 'stage-timeline';

export const StyledStageCard = styled(DotCard)`
  ${({ theme }) => css`
    &.dot-stage-card .phase-color {
      border-radius: 4px;
      height: 18px;
      margin-right: ${theme.spacing(1)}px;
      width: ${theme.spacing(1)}px;
    }
  `}
`;

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
