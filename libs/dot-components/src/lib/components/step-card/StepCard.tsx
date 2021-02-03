import React from 'react';
import { CardActions } from '@material-ui/core';
import { CommonProps } from '../CommonProps';
import { useStylesWithRootClass } from '../useStylesWithRootClass';
import { rootClassName, StyledStepCard } from './StepCard.styles';
import { DotIcon } from '../icon/Icon';
import { DotAvatar } from '../avatar/Avatar';
import { CardMenuOption } from '../card/Card';

export interface TeamObject {
  name: string;
  avatar?: string;
}

export interface UserObject {
  name: string;
  avatar?: string;
}

export interface StepCardProps extends CommonProps {
  /** Menu items that will be in the upper right corner */
  menuOptions?: Array<CardMenuOption>;
  /** The icon to be displayed next to the title */
  stepIcon?: string;
  /** Team which is assigned to the card */
  team?: TeamObject;
  /** Title text displayed on the card */
  title: string;
  /** Sub header text displayed on the card */
  subheader: string;
  /** User which is assigned to the card */
  user?: UserObject;
}

/**
 * @experimental This component is still in development
 */
export const DotStepCard = ({
  className,
  'data-testid': dataTestId,
  menuOptions = [],
  stepIcon = 'keyboard',
  subheader,
  team = undefined,
  title,
  user = undefined,
}: StepCardProps) => {
  const rootClasses = useStylesWithRootClass(rootClassName, className);
  const preHeader = <DotIcon fontSize="small" iconId={stepIcon} />;

  return (
    <StyledStepCard
      className={rootClasses}
      data-testid={dataTestId}
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
              <DotAvatar alt={team.name} className="team-avatar" size="small" />
            </div>
          )}
          {user && (
            <DotAvatar alt={user.name} className="user-avatar" size="small" />
          )}
        </CardActions>
      )}
    </StyledStepCard>
  );
};

export default DotStepCard;
