import React from 'react';
import { CardActions } from '@material-ui/core';
import { DotIcon } from '../icon/Icon';
import { DotAvatar } from '../avatar/Avatar';
import { CardMenuOption, DotCard } from '../card/Card';

import './StepCard.scss';

export interface TeamObject {
  name: string;
  avatar?: string;
}

export interface UserObject {
  name: string;
  avatar?: string;
}

export interface StepCardProps {
  /** Menu items that will be in the upper right corner */
  menuOptions?: Array<CardMenuOption>;
  /** The icon to be displayed next to the title */
  stepIcon?: string;
  /** The background color of the icon container */
  stepIconBg?: string;
  /** Team which is assigned to the card */
  team?: TeamObject;
  /** Title text displayed on the card */
  title: string;
  /** Sub header text displayed on the card */
  subheader: string;
  /** User which is assigned to the card */
  user?: UserObject;
}

export const DotStepCard = ({
  menuOptions = [],
  stepIcon = 'keyboard',
  stepIconBg,
  team = undefined,
  title,
  subheader,
  user = undefined,
}: StepCardProps) => {
  const preHeader = (
    <DotIcon
      fontSize="small"
      icon={stepIcon}
      iconBgColor={stepIconBg}
      iconType="circle"
    />
  );

  return (
    <DotCard
      classes="dot-step-card"
      menuOptions={menuOptions}
      preHeader={preHeader}
      subheader={subheader}
      title={title}
    >
      {(team || user) && (
        <CardActions
          className="dot-card-actions"
          data-testid="step-card-actions"
        >
          {team && team.avatar && (
            <div className="team">
              <DotAvatar alt={team.name} classes="team-avatar" size="small" />
            </div>
          )}
          {user && (
            <DotAvatar alt={user.name} classes="user-avatar" size="small" />
          )}
        </CardActions>
      )}
    </DotCard>
  );
};

export default DotStepCard;
