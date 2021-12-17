import React, { MouseEvent, ReactNode } from 'react';
import { CommonProps } from '../CommonProps';
import { useStylesWithRootClass } from '../useStylesWithRootClass';
import { rootClassName, StyledAlertBanner } from './AlertBanner.styles';
import { DotIcon } from '../icon/Icon';
import { DotTypography, TypographyVariant } from '../typography/Typography';
import { isString } from '../helpers';

export type AlertBannerSeverity = 'error' | 'info' | 'success' | 'warning';

export interface AlertBannerProps extends CommonProps {
  /** The action to display. It renders after the message, at the end of the alert */
  action?: ReactNode;
  /** The content of the component */
  children: ReactNode | string;
  /** callback which is triggered when alert banner is closed */
  onClose?: (event: MouseEvent) => void;
  /** will determine color and icon being used */
  severity: AlertBannerSeverity;
  /** when specified, will control the text that is used inside the alert banner */
  textVariant?: TypographyVariant;
}

export const DotAlertBanner = ({
  action,
  ariaLabel,
  children,
  className,
  'data-testid': dataTestId,
  onClose,
  severity,
  textVariant = 'body1',
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
  /* For simple string use default component, for everything else use 'div' */
  const typographyComponent = isString(children) ? undefined : 'div';
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
      <DotTypography variant={textVariant} component={typographyComponent}>
        {children}
      </DotTypography>
    </StyledAlertBanner>
  );
};
