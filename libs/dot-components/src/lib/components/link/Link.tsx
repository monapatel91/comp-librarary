import React, { KeyboardEvent, MouseEvent, ReactNode } from 'react';
import { CommonProps } from '../CommonProps';
import { useStylesWithRootClass } from '../useStylesWithRootClass';
import { rootClassName, StyledLink } from './Link.styles';

export type LinkColor =
  | 'initial'
  | 'inherit'
  | 'primary'
  | 'secondary'
  | 'textPrimary'
  | 'textSecondary'
  | 'error';
export type LinkUnderline = 'always' | 'hover' | 'none';
export type LinkTarget = '_blank' | '_self';

export interface LinkProps extends CommonProps {
  /** text for the link. */
  children: ReactNode;
  /** link color */
  color?: LinkColor;
  /** href for the link. */
  href?: string;
  /** event callback */
  onClick?: (event: KeyboardEvent<Element> | MouseEvent<Element>) => void;
  /** mouse enter event callback */
  onMouseEnter?: (event: MouseEvent<Element>) => void;
  /** specifies the relationship between the current document and the linked document */
  rel?: string;
  /** tab order for the link */
  tabIndex?: number;
  /** where to open the link */
  target?: LinkTarget;
  /** tooltip text displayed on hover, useful for screen readers */
  title?: string;
  /**  underline the link */
  underline?: LinkUnderline;
}

export const DotLink = ({
  ariaLabel,
  children,
  className,
  color = 'primary',
  'data-testid': dataTestId,
  href,
  onClick,
  onMouseEnter,
  rel = 'noreferrer',
  tabIndex = 0,
  target,
  title,
  underline = 'always',
}: LinkProps) => {
  const rootClasses = useStylesWithRootClass(rootClassName, className);

  const handleKeyPress = (event: KeyboardEvent<Element>) => {
    if (onClick && event.key === 'Enter') {
      event.preventDefault();
      onClick(event);
    }
  };

  return (
    <StyledLink
      aria-label={ariaLabel}
      classes={{ root: rootClasses }}
      color={color}
      data-testid={dataTestId}
      href={href}
      onClick={() => onClick}
      onMouseEnter={onMouseEnter}
      onKeyPress={handleKeyPress}
      rel={rel}
      tabIndex={tabIndex}
      target={target}
      title={title}
      underline={underline}
    >
      {children}
    </StyledLink>
  );
};
