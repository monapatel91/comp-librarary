import React from 'react';
import { useStylesWithRootClass } from '../useStylesWithRootClass';
import { CommonProps } from '../CommonProps';
import { rootClassName, StyledPill } from './Pill.styles';

export type PillSize = 'small' | 'medium';
export type PillStatus =
  | 'success'
  | 'error'
  | 'warning'
  | 'in-progress'
  | 'default';

export interface PillProps extends CommonProps {
  /** The text for the pill. */
  label: string;
  /** Determines the size of the pill 'medium' or 'small' */
  size?: PillSize;
  /** Determines the status of the pill component */
  status?: PillStatus;
}

export const DotPill = ({
  label,
  className,
  'data-testid': dataTestId,
  size = 'medium',
  status = 'default',
}: PillProps) => {
  const rootClasses = useStylesWithRootClass(rootClassName, className, status);

  return (
    <StyledPill
      classes={{ root: rootClasses }}
      color="default"
      data-testid={dataTestId}
      clickable={false}
      label={label}
      size={size}
      variant="default"
    />
  );
};
