import React, { MouseEvent, ReactNode } from 'react';
import { CommonProps } from '../CommonProps';
import { useStylesWithRootClass } from '../useStylesWithRootClass';
import { rootClassName, StyledAlertBanner } from './AlertBanner.styles';
import { DotIcon } from '../icon/Icon';
import { DotTypography } from '../typography/Typography';

export type AlertBannerSeverity = 'error' | 'info' | 'success' | 'warning';

export interface AlertBannerProps extends CommonProps {
  action?: ReactNode;
  children: ReactNode | string;
  onClose?: (event: MouseEvent) => void;
  severity: AlertBannerSeverity;
}

export const DotAlertBanner = ({
  action,
  ariaLabel,
  children,
  className,
  'data-testid': dataTestId,
  onClose,
  severity,
}: AlertBannerProps) => {
  const AlertBannerIcon = (iconId: string) => {
    return <DotIcon iconId={iconId} />;
  };
  const AlertBannerIconMapping = {
    error: AlertBannerIcon('error-solid'),
    info: AlertBannerIcon('info-solid'),
    success: AlertBannerIcon('check-solid'),
    warning: AlertBannerIcon('warning-solid'),
  };
  const rootClasses = useStylesWithRootClass(rootClassName, className);
  return (
    <StyledAlertBanner
      action={action}
      aria-label={ariaLabel}
      classes={{ root: rootClasses }}
      data-testid={dataTestId}
      iconMapping={AlertBannerIconMapping}
      onClose={(event: MouseEvent) => (onClose ? onClose(event) : null)}
      severity={severity}
    >
      <DotTypography variant="subtitle2">{children}</DotTypography>
    </StyledAlertBanner>
  );
};
