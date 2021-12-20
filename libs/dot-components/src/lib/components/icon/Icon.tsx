import React, { useEffect } from 'react';
import { CommonProps } from '../CommonProps';
import { DotTooltip } from '../tooltip/Tooltip';
import { useStylesWithRootClass } from '../useStylesWithRootClass';
import { rootClassName, StyledIcon } from './Icon.styles';

export type IconFontSize = 'medium' | 'small';

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
        fontSize={fontSize}
      >
        <i className={`icon-${iconId} dot-i`} />
      </StyledIcon>
    </DotTooltip>
  );
};
