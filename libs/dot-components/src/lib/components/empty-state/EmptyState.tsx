import React from 'react';
import { ButtonProps, DotButton } from '../button/Button';
import { CommonProps } from '../CommonProps';
import { useStylesWithRootClass } from '../useStylesWithRootClass';
import { rootClassName, StyledEmptyState } from './EmptyState.styles';
import { DotTypography } from '../typography/Typography';

export interface EmptyStateProps extends CommonProps {
  buttonProps?: ButtonProps;
  imageSrc?: string;
  imageAltText?: string;
  subtitle?: string;
  title: string;
}

export const DotEmptyState = ({
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
    <StyledEmptyState className={rootClasses} data-testid={dataTestId}>
      {Image && (
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
