import React, { ReactNode, ReactElement, ChangeEvent } from 'react';
import { CommonProps } from '../CommonProps';
import { Tooltip } from '@material-ui/core';
import { useStylesWithRootClass } from '../useStylesWithRootClass';

export type tooltipPlacement =
  | 'bottom-end'
  | 'bottom-start'
  | 'bottom'
  | 'left-end'
  | 'left-start'
  | 'left'
  | 'right-end'
  | 'right-start'
  | 'right'
  | 'top-end'
  | 'top-start'
  | 'top';

export interface TooltipProps extends CommonProps {
  children: ReactElement;
  leaveDelay?: number;
  onClose?: (event: ChangeEvent) => void;
  open?: boolean;
  placement?: tooltipPlacement;
  title?: ReactNode | string | number;
}
export const DotTooltip = ({
  ariaLabel,
  children,
  className,
  'data-testid': dataTestId,
  leaveDelay,
  onClose,
  open,
  placement = 'bottom',
  title,
}: TooltipProps) => {
  const rootClasses = useStylesWithRootClass('dot-tooltip', className);
  return title ? (
    <Tooltip
      aria-label={ariaLabel}
      className={rootClasses}
      data-testid={dataTestId}
      leaveDelay={leaveDelay}
      onClose={onClose}
      open={open}
      placement={placement}
      title={title}
    >
      <span>{children}</span>
    </Tooltip>
  ) : (
    children
  );
};
