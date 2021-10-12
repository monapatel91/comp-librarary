import React, { useEffect } from 'react';
import { CommonProps } from '../CommonProps';
import { DotTooltip } from '../tooltip/Tooltip';
import { useStylesWithRootClass } from '../useStylesWithRootClass';
import { rootClassName, StyledIcon } from './Icon.styles';

// TO-DO: S-76846 MUI 5 change IconFontSize 'default' to 'medium'
export type IconFontSize = 'inherit' | 'default' | 'small' | 'medium';

export interface IconProps extends CommonProps {
  /** Determines the size of the icon and spacing around it */
  fontSize?: IconFontSize;
  /** The ID of the icon to display on the button */
  iconId: string;
  /** DEPRECATED, DO NOT USE */
  title?: string;
  /** Tooltip text displayed on hover */
  tooltip?: string;
}

export const DotIcon = ({
  ariaLabel,
  className,
  'data-testid': dataTestId,
  fontSize = 'medium',
  iconId,
  title,
  tooltip,
}: IconProps) => {
  const rootClasses = useStylesWithRootClass(rootClassName, className);

  // deprecation warning(s)
  useEffect(() => {
    // 'inherit' causes the vertical alignment of the icon to be not be centered
    // TO-DO: S-76846 MUI 5 change IconFontSize 'default' to 'medium'
    if (fontSize === 'inherit' || fontSize === 'default') {
      console.warn(
        `The use of \`fontSize: ${fontSize}\` on \`DotIcon\` is deprecated and will be removed in the next release. Please consider using \`fontSize: medium\` instead.`
      );
    }
    // deprecation warning
    if (title) {
      console.warn(
        'The use of `title` is deprecated and will be removed in the next major release, please use `tooltip` isntead.'
      );
    }
  }, []);

  return (
    <DotTooltip title={tooltip}>
      <StyledIcon
        aria-hidden="false"
        aria-label={ariaLabel}
        classes={{ root: rootClasses }}
        data-testid={dataTestId}
        fontSize={fontSize === 'small' ? fontSize : 'medium'}
      >
        <i className={`icon-${iconId} dot-i`} />
      </StyledIcon>
    </DotTooltip>
  );
};
