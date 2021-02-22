import React, { Fragment, MouseEvent, useState } from 'react';
import { CardHeader, CardActions, Menu, MenuItem } from '@material-ui/core';
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
  StyledStageTimeline,
} from './StageCard.styles';
import { DotIconButton } from '../button/IconButton';
import { DotCard } from '../card/Card';
import { DotStepCard } from '../step-card/StepCard';
import { CategoryType } from '../phase-header/PhaseHeader';

export interface StepObject {
  title: string;
  subheader: string;
}

export interface CardMenuOption {
  displayText: string;
  action: () => void;
}

export interface StageCardProps extends CommonProps {
  avatar?: JSX.Element;
  menuOptions?: Array<CardMenuOption>;
  phaseColor: CategoryType;
  steps: Array<StepObject>;
  title: string;
}

/**
 * @experimental This component is still in development
 */
export const DotStageCard = ({
  avatar,
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

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [open, setOpen] = useState(false);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };

  const handleClose = (action: () => void) => {
    setAnchorEl(null);
    setOpen(false);
    action();
  };

  const headerAction =
    menuOptions.length > 0 ? (
      <Fragment>
        <DotIconButton
          className="expand-button"
          data-testid="card-header-action-button"
          iconId="options"
          onClick={handleClick}
          size="small"
        />
        <Menu anchorEl={anchorEl} keepMounted open={open} onClose={handleClose}>
          {menuOptions.map((option: CardMenuOption, index: number) => (
            <MenuItem
              key={index}
              onClick={() => handleClose(option.action)}
              data-testid="card-header-action-menu-option"
            >
              {option.displayText}
            </MenuItem>
          ))}
        </Menu>
      </Fragment>
    ) : null;

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
      <DotCard className={rootClasses} data-testid={dataTestId}>
        <Fragment>
          <CardHeader
            action={headerAction}
            avatar={preHeader}
            subheader={stepHeaderDescription()}
            subheaderTypographyProps={{ variant: 'body2' }}
            title={title}
            titleTypographyProps={{ variant: 'h4' }}
          />
          <CardActions className="dot-card-actions">
            {avatar}
            {steps.length > 0 && (
              <DotIconButton
                className={`expand-button ${stepsVisible ? 'visible' : ''}`}
                data-testid="display-stage-steps"
                iconId="chevron-down"
                onClick={() => setStepsVisible(!stepsVisible)}
                size="small"
              />
            )}
          </CardActions>
        </Fragment>
      </DotCard>
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
