import React from 'react';
import styled from 'styled-components';
import { Typography } from '@material-ui/core';
import { ButtonProps, DotButton } from '../button/Button';
import { CommonProps } from '../CommonProps';
import { useStylesWithRootClass } from '../makeStylesWithRootClass';

const StyledEmptyState = styled.div`
  &.dot-empty-state {
    margin: 0 auto;
    max-width: 600px;
    text-align: center;

    .empty-state-image {
      min-height: 239px;
    }
  }
`;

export interface EmptyStateProps extends CommonProps {
  buttonProps?: ButtonProps;
  Image?: React.FunctionComponent<
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
  Image,
  imageAltText,
  subtitle,
  title,
}: EmptyStateProps) => {
  const rootClasses = useStylesWithRootClass('dot-empty-state', className);

  return (
    <StyledEmptyState className={rootClasses} data-testid={dataTestId}>
      {Image && (
        <Image
          className="empty-state-image"
          role="img"
          title={imageAltText || title}
        />
      )}
      <Typography variant="h2">{title}</Typography>
      {subtitle && <Typography variant="body1">{subtitle}</Typography>}
      {buttonProps && <DotButton {...buttonProps} />}
    </StyledEmptyState>
  );
};

export default DotEmptyState;
