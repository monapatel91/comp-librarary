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
  backgroundcolor?: string;
  /** The text for the pill. */
  label: string;
  /** Label color for the pill, ignored if 'status' is not 'default' */
  labelcolor?: string;
  /** Determines the size of the pill 'medium' or 'small' */
  size?: PillSize;
  /** Determines the status of the pill component */
  status?: PillStatus;
}

export const DotPill = ({
  backgroundcolor,
  className,
  'data-testid': dataTestId,
  label,
  labelcolor,
  size = 'medium',
  status = 'default',
}: PillProps) => {
  const rootClasses = useStylesWithRootClass(rootClassName, className, status);

  return (
    <StyledPill
      backgroundcolor={backgroundcolor}
      classes={{ root: rootClasses }}
      clickable={false}
      data-testid={dataTestId}
      label={label}
      labelcolor={labelcolor}
      size={size}
    />
  );
};
