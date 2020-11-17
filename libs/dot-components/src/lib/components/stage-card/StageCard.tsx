import React, { Fragment, useState } from 'react';
import { CardActions } from '@material-ui/core';
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from '@material-ui/lab';

import { DotIconButton } from '../button/IconButton';
import { CardMenuOption, DotCard } from '../card/Card';
import { DotStepCard } from '../step-card/StepCard';
import { DotAvatar } from '../avatar/Avatar';
import { CategoryType } from '../phase-header/PhaseHeader';

import './StageCard.scss';

export interface StepObject {
  title: string;
  subheader: string;
}

export interface StageCardProps {
  steps: Array<StepObject>;
  title: string;
  phaseColor: CategoryType;
  menuOptions?: Array<CardMenuOption>;
}

export const DotStageCard = ({
  steps,
  title,
  phaseColor,
  menuOptions = [],
}: StageCardProps) => {
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
      <DotCard
        classes="dot-stage-card"
        menuOptions={menuOptions}
        title={title}
        subheader={stepHeaderDescription()}
        preHeader={preHeader}
      >
        <CardActions className="dot-card-actions">
          <DotAvatar size="small" />
          {steps.length > 0 && (
            <DotIconButton
              data-testid="display-stage-steps"
              classes={`expand-button ${stepsVisible ? 'visible' : ''}`}
              iconId="expand_more"
              iconButtonSize="small"
              onClick={() => setStepsVisible(!stepsVisible)}
            />
          )}
        </CardActions>
      </DotCard>
      {steps.length > 0 && stepsVisible && (
        <Timeline classes={{ root: 'stage-timeline' }}>
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
        </Timeline>
      )}
    </Fragment>
  );
};

export default DotStageCard;
