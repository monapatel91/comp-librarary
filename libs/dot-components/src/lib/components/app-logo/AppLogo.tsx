import React, { ReactNode } from 'react';
import { CommonProps } from '../CommonProps';
import { useStylesWithRootClass } from '../useStylesWithRootClass';

export interface AppLogoProps extends CommonProps {
  /** If provided will display application logo */
  appLogo?: ReactNode;
  /** If provided will display application logo */
  appLogoSmall?: ReactNode;
  /** If true will force the small logo only */
  smallOnly?: boolean;
}

export const DotAppLogo = ({
  appLogo,
  appLogoSmall,
  ariaLabel,
  className,
  'data-testid': dataTestId,
  smallOnly = false,
}: AppLogoProps) => {
  const displaySmallLogo = appLogoSmall && smallOnly;
  const rootClasses = useStylesWithRootClass(
    className,
    'dot-app-logo',
    displaySmallLogo ? 'small' : ''
  );

  return (
    <div
      aria-label={ariaLabel}
      className={rootClasses}
      data-testid={dataTestId}
    >
      {displaySmallLogo ? appLogoSmall : appLogo}
    </div>
  );
};
