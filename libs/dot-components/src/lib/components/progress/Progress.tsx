import React from 'react';
import { CircularProgress } from '@material-ui/core';
import { CommonProps } from '../CommonProps';
import { useStylesWithRootClass } from '../useStylesWithRootClass';

export type progressColorOptions = 'inherit' | 'primary' | 'secondary';
export type progressVariantOptions = 'determinate' | 'indeterminate' | 'static';

export interface ProgressProps extends CommonProps {
  /** color of the loading spinner border */
  color?: progressColorOptions;
  /** controls the diameter of the loading spinner */
  size?: number | string;
  /** controls thickness of the loading spinner border */
  thickness?: number;
  /** Tooltip text that displays on hover */
  title?: string;
  /** If using static variant, this is the percent of loading complete */
  value?: number;
  /** type of progress spinner displayed */
  variant?: progressVariantOptions;
}

/**
 * @experimental This component is still in development
 */
export const DotProgress = ({
  color = 'primary',
  className,
  'data-testid': dataTestId,
  size = 40,
  thickness = 3.6,
  title = 'loading data',
  value,
  variant = 'indeterminate',
}: ProgressProps) => {
  const rootClasses = useStylesWithRootClass('dot-progress', className);

  return (
    <CircularProgress
      classes={{ root: rootClasses }}
      color={color}
      data-testid={dataTestId}
      size={size}
      thickness={thickness}
      title={title}
      value={value}
      variant={variant}
    />
  );
};

export default DotProgress;
