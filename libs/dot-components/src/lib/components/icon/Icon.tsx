import React from 'react';
import { CommonProps } from '../CommonProps';
import { useStylesWithRootClass } from '../useStylesWithRootClass';
import { rootClassName, StyledIcon } from './Icon.styles';

export type IconFontSize = 'inherit' | 'default' | 'small';

export interface IconProps extends CommonProps {
  /** Determines the size of the icon and spacing around it */
  fontSize?: IconFontSize;
  /** The ID of the icon to display on the button */
  iconId: string;
  /** Tooltip text displayed on hover */
  title?: string;
}

/** This component wraps the Icon component from @material-ui. */
export const DotIcon = ({
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
      classes={{ root: rootClasses }}
      data-testid={dataTestId}
      fontSize={fontSize}
      title={title}
    >
      <i className={`icon-${iconId}`} />
    </StyledIcon>
  );
};

export default DotIcon;
