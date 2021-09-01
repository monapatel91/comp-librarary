import React from 'react';
import { ButtonProps, DotButton } from '../button/Button';
import { CommonProps } from '../CommonProps';
import { useStylesWithRootClass } from '../useStylesWithRootClass';
import { rootClassName, StyledEmptyState } from './EmptyState.styles';
import { DotTypography } from '../typography/Typography';

export interface EmptyStateProps extends CommonProps {
  /** primary button properties */
  buttonProps?: ButtonProps;
  /** alt text of image */
  imageAltText?: string;
  /** location of image */
  imageSrc?: string;
  /** subtitle text displayed */
  subtitle?: string;
  /** title text displayed */
  title: string;
}

export const DotEmptyState = ({
  ariaLabel,
  buttonProps,
  className,
  'data-testid': dataTestId,
  imageAltText,
  imageSrc,
  subtitle,
  title,
}: EmptyStateProps) => {
  const rootClasses = useStylesWithRootClass(rootClassName, className);

  return (
    <StyledEmptyState
      aria-label={ariaLabel}
      className={rootClasses}
      data-testid={dataTestId}
    >
      {imageSrc && (
        <img
          className="empty-state-image"
          title={imageAltText || title}
          alt={imageAltText || title}
          src={imageSrc}
        />
      )}
      <DotTypography variant="h2">{title}</DotTypography>
      {subtitle && <DotTypography variant="body1">{subtitle}</DotTypography>}
      {buttonProps && <DotButton {...buttonProps} />}
    </StyledEmptyState>
  );
};
