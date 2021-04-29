import React from 'react';
import { CommonProps } from '../../../components/CommonProps';
import { useStylesWithRootClass } from '../../../components/useStylesWithRootClass';
import { DotAvatar, DotIconButton, DotTypography } from '../../../components';
import {
  rootClassName,
  StyledApplicationDrawerHeader,
} from './ApplicationDrawerHeader.styles';

export interface ApplicationDrawerHeaderProps extends CommonProps {
  headerTitle: string;
  onDrawerClose: () => void;
}

export const ApplicationDrawerHeader = ({
  className,
  'data-testid': dataTestId,
  headerTitle,
  onDrawerClose,
}: ApplicationDrawerHeaderProps) => {
  const rootClasses = useStylesWithRootClass(rootClassName, className);

  return (
    <StyledApplicationDrawerHeader
      className={rootClasses}
      data-testid={dataTestId}
    >
      <DotAvatar
        alt="Application Icon"
        className="application-icon"
        data-testid={`${dataTestId}-application-icon`}
        iconId="package"
      />
      <DotTypography className="header-title" variant="h3">
        {headerTitle}
      </DotTypography>
      <DotIconButton
        data-testid={`${dataTestId}-close-icon`}
        iconId="close"
        onClick={onDrawerClose}
        titleTooltip="Click to close"
      />
    </StyledApplicationDrawerHeader>
  );
};
