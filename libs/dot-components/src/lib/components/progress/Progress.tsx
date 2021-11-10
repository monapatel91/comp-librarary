import React, { useEffect } from 'react';
import { CommonProps } from '../CommonProps';
import { DotTooltip } from '../tooltip/Tooltip';
import { useStylesWithRootClass } from '../useStylesWithRootClass';
import { StyledCircularProgress, rootClassName } from './Progress.styles';

export type progressColorOptions = 'inherit' | 'primary' | 'secondary';
export type progressVariantOptions = 'determinate' | 'indeterminate' | 'static';

export interface ProgressProps extends CommonProps {
  /** color of the loading spinner border */
  color?: progressColorOptions;
  /** controls the diameter of the loading spinner */
  size?: number | string;
  /** controls thickness of the loading spinner border */
  thickness?: number;
  /** DEPRECATED, DO NOT USE */
  title?: string;
  /** Tooltip text displayed on hover */
  tooltip?: string;
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
  title,
  tooltip = 'loading data',
  value,
  variant = 'indeterminate',
}: ProgressProps) => {
  const rootClasses = useStylesWithRootClass(rootClassName, className);
  useEffect(() => {
    // deprecation warning
    if (title) {
      console.warn(
        'The use of `title` is deprecated and will be removed in the next major release, please use `tooltip` isntead.'
      );
    }
  }, []);
  return (
    <DotTooltip title={tooltip || title}>
      <StyledCircularProgress
        aria-label={ariaLabel}
        classes={{ root: rootClasses }}
        color={color}
        data-testid={dataTestId}
        size={size}
        thickness={thickness}
        value={value}
        variant={variant}
      />
    </DotTooltip>
  );
};
