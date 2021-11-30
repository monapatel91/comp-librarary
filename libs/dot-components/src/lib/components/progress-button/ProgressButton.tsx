import React from 'react';
import { rootClassName, StyledProgressButton } from './ProgressButton.styles';
import { useStylesWithRootClass } from '../useStylesWithRootClass';
import { DotProgress } from '../progress/Progress';
import { ButtonProps } from '../button/Button';

export const SPINNER_DEFAULT_SIZE = 20;
export const SPINNER_LARGE_SIZE = 24;

export interface ProgressButtonProps extends ButtonProps {
  /** Is spinner displayed */
  isLoading?: boolean;
}

export const DotProgressButton = ({
  ariaLabel,
  children,
  className,
  'data-testid': dataTestId,
  disabled = false,
  disableRipple = false,
  fullWidth = false,
  isLoading = false,
  isSubmit = false,
  onClick,
  size = 'medium',
  tooltip,
  type = 'primary',
}: ProgressButtonProps) => {
  const rootClasses = useStylesWithRootClass(rootClassName, className);

  const isButtonDisabled = disabled || isLoading;

  const titleClasses = useStylesWithRootClass(isLoading ? 'hidden' : '');

  const progressCircleSize =
    size === 'large' ? SPINNER_LARGE_SIZE : SPINNER_DEFAULT_SIZE;

  return (
    <StyledProgressButton
      ariaLabel={ariaLabel}
      className={rootClasses}
      data-testid={dataTestId}
      disableRipple={disableRipple}
      disabled={isButtonDisabled}
      fullWidth={fullWidth}
      isSubmit={isSubmit}
      onClick={onClick}
      size={size}
      tooltip={tooltip}
      type={type}
    >
      <div className={titleClasses}>{children}</div>
      {isLoading && (
        <DotProgress className="progress-circle" size={progressCircleSize} />
      )}
    </StyledProgressButton>
  );
};
