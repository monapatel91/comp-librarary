import React from 'react';
import { ButtonProps, DotButton } from '../button/Button';

import './EmptyState.scss';

export interface EmptyStateProps {
  buttonProps?: ButtonProps;
  Image?: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & { title?: string }
  >;
  imageAltText?: string;
  subtitle?: string;
  title: string;
}

/**
 * @experimental This component is still in development
 */
export const DotEmptyState = ({
  buttonProps,
  Image,
  imageAltText,
  title,
  subtitle,
}: EmptyStateProps) => {
  return (
    <div className="dot-empty-state empty-state-container">
      {Image && (
        <Image
          title={imageAltText || title}
          className="empty-state-image"
          role="img"
        />
      )}
      <h4>{title}</h4>
      {subtitle && <p>{subtitle}</p>}
      {buttonProps && <DotButton {...buttonProps} />}
    </div>
  );
};

export default DotEmptyState;
