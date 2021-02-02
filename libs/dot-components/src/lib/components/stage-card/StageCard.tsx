import React, { Fragment, useState } from 'react';
import { CardActions } from '@material-ui/core';
import {
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from '@material-ui/lab';
import { CommonProps } from '../CommonProps';
import { useStylesWithRootClass } from '../useStylesWithRootClass';
import {
  rootClassName,
  rootTimelineClassName,
  StyledStageCard,
  StyledStageTimeline,
} from './StageCard.styles';
import { DotIconButton } from '../button/IconButton';
import { CardMenuOption } from '../card/Card';
import { DotStepCard } from '../step-card/StepCard';
import { DotAvatar } from '../avatar/Avatar';
import { CategoryType } from '../phase-header/PhaseHeader';

export interface StepObject {
  title: string;
  subheader: string;
}

export interface StageCardProps extends CommonProps {
  steps: Array<StepObject>;
  title: string;
  phaseColor: CategoryType;
  menuOptions?: Array<CardMenuOption>;
}

/**
 * @experimental This component is still in development
 */
export const DotStageCard = ({
  className,
  'data-testid': dataTestId,
  menuOptions = [],
  phaseColor,
  steps,
  title,
}: StageCardProps) => {
  const rootClasses = useStylesWithRootClass(rootClassName, className);
  const [stepsVisible, setStepsVisible] = useState(false);
  const preHeader = <div className={`phase-color ${phaseColor}`} />;

  function stepHeaderDescription() {
    switch (steps.length) {
      case 0:
        return undefined;
      case 1:
        return '1 Step';
      default:
        return `${steps.length} Steps`;
    }
  }

  return (
    <Fragment>
      <StyledStageCard
        className={rootClasses}
        data-testid={dataTestId}
        menuOptions={menuOptions}
        preHeader={preHeader}
        subheader={stepHeaderDescription()}
        title={title}
      >
        <CardActions className="dot-card-actions">
          <DotAvatar
            size="small"
            alt="THIS MUST BE CHANGED ONCE WE HAVE REAL AVATARS HERE"
          />
          {steps.length > 0 && (
            <DotIconButton
              className={`expand-button ${stepsVisible ? 'visible' : ''}`}
              data-testid="display-stage-steps"
              iconId="expand_more"
              onClick={() => setStepsVisible(!stepsVisible)}
              size="small"
            />
          )}
        </CardActions>
      </StyledStageCard>
      {steps.length > 0 && stepsVisible && (
        <StyledStageTimeline classes={{ root: rootTimelineClassName }}>
          {steps.map((step: StepObject, index: number) => {
            return (
              <TimelineItem
                classes={{ root: 'stage-timeline-item' }}
                key={index}
              >
                <TimelineSeparator>
                  <TimelineConnector />
                  <TimelineDot classes={{ root: 'stage-timeline-dot' }} />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <DotStepCard title={step.title} subheader={step.subheader} />
                </TimelineContent>
              </TimelineItem>
            );
          })}
        </StyledStageTimeline>
      )}
    </Fragment>
  );
};

export default DotStageCard;
