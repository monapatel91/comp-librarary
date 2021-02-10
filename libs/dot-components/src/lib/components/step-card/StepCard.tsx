import React, { Fragment, MouseEvent, useState } from 'react';
import { CardActions, CardHeader, Menu, MenuItem } from '@material-ui/core';
import { CommonProps } from '../CommonProps';
import { useStylesWithRootClass } from '../useStylesWithRootClass';
import { rootClassName } from './StepCard.styles';
import { DotIcon } from '../icon/Icon';
import { DotIconButton } from '../button/IconButton';
import { DotAvatar } from '../avatar/Avatar';
import { DotCard, CardMenuOption } from '../card/Card';

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

  return (
    <DotCard
      className={rootClasses}
      data-testid={dataTestId}
    >
      <Fragment>
        {preHeader}
        <CardHeader
          action={headerAction}
          subheader={subheader}
          subheaderTypographyProps={{ variant: 'body2' }}
          title={title}
          titleTypographyProps={{ variant: 'h4' }}
        />
        {(team || user) && (
          <CardActions
            className="dot-card-actions"
            data-testid="step-card-actions"
          >
            {team && team.avatar && (
              <div className="team">
                <DotAvatar
                  alt={team.name}
                  className="team-avatar"
                  size="small"
                />
              </div>
            )}
            {user && (
              <DotAvatar alt={user.name} className="user-avatar" size="small" />
            )}
          </CardActions>
        )}
      </Fragment>
    </DotCard>
  );
};

export default DotStepCard;
