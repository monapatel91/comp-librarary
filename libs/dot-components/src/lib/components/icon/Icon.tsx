import React, { useEffect } from 'react';
import { CommonProps } from '../CommonProps';
import { useStylesWithRootClass } from '../useStylesWithRootClass';
import { rootClassName, StyledIcon } from './Icon.styles';

// TO-DO: S-76846 MUI 5 change IconFontSize 'default' to 'medium'
export type IconFontSize = 'inherit' | 'default' | 'small' | 'medium';

export interface IconProps extends CommonProps {
  /** Determines the size of the icon and spacing around it */
  fontSize?: IconFontSize;
  /** The ID of the icon to display on the button */
  iconId: string;
  /** Tooltip text displayed on hover */
  title?: string;
}

export const DotIcon = ({
  ariaLabel,
  className,
  'data-testid': dataTestId,
  fontSize = 'medium',
  iconId,
  title = '',
}: IconProps) => {
  const rootClasses = useStylesWithRootClass(rootClassName, className);

  // deprecation warning(s)
  useEffect(() => {
    // 'inherit' causes the vertical alignment of the icon to be not be centered
    if (fontSize === 'inherit') {
      console.warn(
        'The use of `fontSize: inherit` on `DotIcon` is deprecated and will be removed in the next release. Please consider using `fontSize: medium` instead.'
      );
    }
    // TO-DO: S-76846 MUI 5 change IconFontSize 'default' to 'medium'
    if (fontSize === 'default') {
      console.warn(
        'The use of `fontSize: default` is being updated to `fontSize: "medium" in the upgrade to MUI v5'
      );
    }
  }, []);

  return (
    <StyledIcon
      aria-hidden="false"
      aria-label={ariaLabel}
      classes={{ root: rootClasses }}
      data-testid={dataTestId}
      fontSize={fontSize === 'small' ? fontSize : 'medium'}
      title={title}
    >
      <i className={`icon-${iconId} dot-i`} />
    </StyledIcon>
  );
};
