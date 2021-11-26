import React, { MouseEvent } from 'react';
import { CommonProps } from '../CommonProps';
import { rootClassName, StyledProgressButton } from './ProgressButton.styles';
import { useStylesWithRootClass } from '../useStylesWithRootClass';
import { ButtonSize, ButtonType } from '../BaseButtonProps';
import { DotProgress } from '../progress/Progress';

const SPINNER_DEFAULT_SIZE = 20;
const SPINNER_LARGE_SIZE = 24;

export interface ProgressButtonProps extends CommonProps {
  /** Defines a string value that labels the current element **/
  ariaLabel?: string;
  /** If true, the ripple effect will be disabled. */
  disableRipple?: boolean;
  /** If true, the button will be disabled. */
  disabled?: boolean;
  /** If true, the button will take up the full width of its container.  */
  fullWidth?: boolean;
  /** Is spinner displayed */
  isLoading?: boolean;
  /** Is this a submit button */
  isSubmit?: boolean;
  /** Event callback */
  onClick?: (event: MouseEvent) => void;
  /** The size of the button */
  size?: ButtonSize;
  /** Text to be displayed on the button */
  title: string;
  /** Help text to be displayed on hover */
  tooltip?: string;
  /** The type of button */
  type?: ButtonType;
}

export const DotProgressButton = ({
  ariaLabel,
  className,
  'data-testid': dataTestId,
  disabled = false,
  disableRipple = false,
  fullWidth = false,
  isLoading = false,
  isSubmit = false,
  onClick,
  size = 'medium',
  title,
  tooltip,
  type = 'primary',
}: ProgressButtonProps) => {
  const rootClasses = useStylesWithRootClass(rootClassName, className);

  const isButtonDisabled = disabled || isLoading;

  const titleClasses = useStylesWithRootClass(
    'button-title',
    isLoading ? 'hidden' : ''
  );

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
      <span className={titleClasses}>{title}</span>
      {isLoading && (
        <DotProgress
          className="progress-circle"
          data-testid="progress-circle"
          size={progressCircleSize}
        />
      )}
    </StyledProgressButton>
  );
};
