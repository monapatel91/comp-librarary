import React, { Fragment, MouseEvent, useState, ReactNode } from 'react';
import { CardHeader, Menu, MenuItem } from '@material-ui/core';
import { CommonProps } from '../CommonProps';
import { useStylesWithRootClass } from '../useStylesWithRootClass';
import { rootClassName, StyledCard } from './Card.styles';
import { DotIconButton } from '../button/IconButton';

export interface CardMenuOption {
  displayText: string;
  action: () => void;
}

export interface CardProps extends CommonProps {
  children: ReactNode;
  /** Space delimited CSS classes to be attributed to the CardContent. */
  classes?: string;
  /** If options are available, menu will appear in upper right corner of card */
  menuOptions?: Array<CardMenuOption>;
  /** React component that can be displayed before the header */
  preHeader?: ReactNode;
  /** Header of a card */
  title?: string;
  /** Sub header of a card */
  subheader?: string;
}

/**
 * @experimental This component is still in development
 */
export const DotCard = ({
  children,
  className,
  'data-testid': dataTestId,
  menuOptions = [],
  preHeader,
  subheader,
  title,
}: CardProps) => {
  const rootClasses = useStylesWithRootClass(rootClassName, className);
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
    <StyledCard
      classes={{ root: rootClasses }}
      data-testid={dataTestId}
      variant="outlined"
    >
      <div className="dot-card-header">
        {preHeader}
        <CardHeader
          title={
            <div className="dot-card-title">
              <h6>{title}</h6>
            </div>
          }
          subheader={<div className="dot-card-subheader">{subheader}</div>}
          action={headerAction}
        />
      </div>
      <div className="dot-card-body">{children}</div>
    </StyledCard>
  );
};
