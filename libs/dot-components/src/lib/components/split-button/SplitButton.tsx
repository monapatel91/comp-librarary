import React, {
  KeyboardEvent,
  MouseEvent,
  ReactNode,
  useRef,
  useState,
} from 'react';
import { DotIcon } from '../icon/Icon';
import { MenuItemProps } from '../menu/Menu';
import { useStylesWithRootClass } from '../useStylesWithRootClass';
import { DotButton } from '../button/Button';
import {
  rootClassName,
  StyledMenu,
  StyledSplitButtonGroup,
} from './SplitButton.styles';
import { BaseButtonProps } from '../BaseButtonProps';

export interface SplitButtonProps extends BaseButtonProps {
  /** accessibility label */
  ariaLabel: string;
  /** The text for the button. Button text should be in sentence case. */
  children: ReactNode;
  /** Disable the portal behavior. If true, children stay within parent DOM hierarchy. */
  disablePortal?: boolean;
  /** Callback when menu item is selected */
  onSelect?: (
    event: MouseEvent | KeyboardEvent,
    menuId: string,
    itemKey: string
  ) => void;
  /**The options within the button dropdown */
  options: Array<MenuItemProps>;
}

export const DotSplitButton = ({
  ariaLabel,
  children,
  className,
  'data-testid': dataTestId,
  disabled = false,
  disablePortal,
  disableRipple = false,
  fullWidth = false,
  isSubmit = false,
  onClick,
  onSelect,
  options = [],
  size = 'medium',
  titleTooltip,
  type = 'primary',
}: SplitButtonProps) => {
  type OptionIndexMap = {
    [key: string]: number;
  };
  const rootClasses = useStylesWithRootClass(
    rootClassName,
    className,
    type,
    disabled ? 'disabled' : ''
  );

  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);

  const optionIndexMap: OptionIndexMap = {};
  options.forEach((option, index: number) => {
    optionIndexMap[option.key] = index;
  });

  const handleClick = (
    event: MouseEvent | KeyboardEvent,
    menuId?: string,
    itemKey?: string
  ) => {
    setOpen(false);
    if (menuId || itemKey) {
      onSelect && onSelect(event, menuId, itemKey);
    } else {
      onClick && onClick(event);
    }
  };

  return (
    <>
      <StyledSplitButtonGroup
        aria-label={ariaLabel}
        className={rootClasses}
        fullWidth={fullWidth}
        ref={anchorRef}
      >
        <DotButton
          className="label-button"
          data-testid={dataTestId}
          disabled={disabled}
          disableRipple={disableRipple}
          isSubmit={isSubmit}
          onClick={(event) => handleClick(event)}
          size={size}
          titleTooltip={titleTooltip}
          type={type}
        >
          {children}
        </DotButton>
        <DotButton
          className="expand-button"
          data-testid={dataTestId}
          disabled={disabled}
          disableRipple={disableRipple}
          onClick={() => setOpen(!open)}
          size={size}
          type={type}
        >
          <DotIcon fontSize="small" iconId="arrow-down" title={titleTooltip} />
        </DotButton>
      </StyledSplitButtonGroup>
      <StyledMenu
        anchorEl={anchorRef.current}
        disablePortal={disablePortal}
        id="dot-menu-id"
        menuItems={options}
        menuPlacement="bottom-end"
        onLeave={() => setOpen(false)}
        open={open}
        onSelect={handleClick}
      />
    </>
  );
};
