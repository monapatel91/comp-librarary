import React from 'react';
import { Typography } from '@material-ui/core';
import { ButtonProps, DotButton } from '../button/Button';
import { CommonProps } from '../CommonProps';
import { useStylesWithRootClass } from '../useStylesWithRootClass';
import { rootClassName, StyledEmptyState } from './EmptyState.styles';

export interface EmptyStateProps extends CommonProps {
  buttonProps?: ButtonProps;
  image?: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & { title?: string }
  >;
  imageAltText?: string;
  subtitle?: string;
  title: string;
}

export const DotEmptyState = ({
  buttonProps,
  className,
  'data-testid': dataTestId,
  image: Image,
  imageAltText,
  subtitle,
  title,
}: EmptyStateProps) => {
  const rootClasses = useStylesWithRootClass(rootClassName, className);

  return (
    <StyledEmptyState className={rootClasses} data-testid={dataTestId}>
      {Image && (
        <Image
          className="empty-state-image"
          role="img"
          title={imageAltText || title}
        />
      )}
      <Typography classes={{ root: 'dot-typography' }} variant="h2">
        {title}
      </Typography>
      {subtitle && (
        <Typography classes={{ root: 'dot-typography' }} variant="body1">
          {subtitle}
        </Typography>
      )}
      {buttonProps && <DotButton {...buttonProps} />}
    </StyledEmptyState>
  );
};
