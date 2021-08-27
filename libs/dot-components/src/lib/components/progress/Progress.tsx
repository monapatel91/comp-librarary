import React from 'react';
import { CommonProps } from '../CommonProps';
import { useStylesWithRootClass } from '../useStylesWithRootClass';
import { StyledCircularProgress, rootClassName } from './Progress.styles';

export type progressColorOptions = 'inherit' | 'primary' | 'secondary';
export type progressVariantOptions = 'determinate' | 'indeterminate' | 'static';

export interface ProgressProps extends CommonProps {
  /** Defines a string value that labels the current element **/
  ariaLabel?: string;
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

export const DotProgress = ({
  ariaLabel,
  color = 'secondary',
  className,
  'data-testid': dataTestId,
  size = 40,
  thickness = 3.6,
  title = 'loading data',
  value,
  variant = 'indeterminate',
}: ProgressProps) => {
  const rootClasses = useStylesWithRootClass(rootClassName, className);

  return (
    <StyledCircularProgress
      aria-label={ariaLabel}
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
