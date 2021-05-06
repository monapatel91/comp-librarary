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
  /** Background color for the pill, ignored if 'status' is not 'default' */
  backgroundColor?: string;
  /** The text for the pill. */
  label: string;
  /** Label color for the pill, ignored if 'status' is not 'default' */
  labelColor?: string;
  /** Determines the size of the pill 'medium' or 'small' */
  size?: PillSize;
  /** Determines the status of the pill component */
  status?: PillStatus;
}

export const DotPill = ({
  backgroundColor,
  className,
  'data-testid': dataTestId,
  label,
  labelColor,
  size = 'medium',
  status = 'default',
}: PillProps) => {
  const rootClasses = useStylesWithRootClass(rootClassName, className, status);

  return (
    <StyledPill
      backgroundColor={backgroundColor}
      classes={{ root: rootClasses }}
      clickable={false}
      data-testid={dataTestId}
      label={label}
      labelColor={labelColor}
      size={size}
    />
  );
};
