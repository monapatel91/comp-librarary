import React from 'react';
import { CommonProps } from '../CommonProps';
import { useStylesWithRootClass } from '../useStylesWithRootClass';
import { rootClassName, StyledIcon } from './Icon.styles';

// TO-DO: MUI 5 change IconFontSize 'default' to 'medium'
export type IconFontSize = 'inherit' | 'default' | 'small';

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
  fontSize = 'default',
  iconId,
  title = '',
}: IconProps) => {
  const rootClasses = useStylesWithRootClass(rootClassName, className);

  return (
    <StyledIcon
      aria-hidden="false"
      aria-label={ariaLabel}
      classes={{ root: rootClasses }}
      data-testid={dataTestId}
      fontSize={fontSize === 'default' ? 'medium' : fontSize}
      title={title}
    >
      <i className={`icon-${iconId} dot-i`} />
    </StyledIcon>
  );
};
