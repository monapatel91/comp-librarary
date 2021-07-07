import React, {
  Fragment,
  KeyboardEvent,
  MouseEvent,
  useRef,
  useState,
} from 'react';
import { DotIcon } from '../icon/Icon';
import { DotMenu, MenuItemProps } from '../menu/Menu';
import { useStylesWithRootClass } from '../useStylesWithRootClass';
import { DotButton } from '../button/Button';
import { rootClassName, StyledSplitButtonGroup } from './SplitButton.styles';
import { BaseButtonProps } from '../BaseButtonProps';

export interface SplitButtonProps extends BaseButtonProps {
  /** accessibility label */
  ariaLabel: string;
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
  className,
  'data-testid': dataTestId,
  disabled = false,
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
  const rootClasses = useStylesWithRootClass(rootClassName, className);

  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const anchorRef = useRef(null);

  const optionIndexMap: OptionIndexMap = {};
  options.forEach((option, index: number) => {
    optionIndexMap[option.key] = index;
  });

  const handleMenuItemClick = (
    event: MouseEvent | KeyboardEvent,
    menuId: string,
    itemKey: string
  ) => {
    setSelectedIndex(optionIndexMap[itemKey]);
    setOpen(false);
    onSelect && onSelect(event, menuId, itemKey);
  };

  return (
    <Fragment>
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
          onClick={onClick}
          size={size}
          titleTooltip={titleTooltip}
          type={type}
        >
          {options.length > 0 && options[selectedIndex].children}
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
          <DotIcon
            fontSize="small"
            iconId="chevron-down"
            title={titleTooltip}
          />
        </DotButton>
      </StyledSplitButtonGroup>
      <DotMenu
        anchorEl={anchorRef.current}
        id="dot-menu-id"
        menuItems={options}
        menuPlacement="bottom-end"
        onLeave={() => setOpen(false)}
        open={open}
        onSelect={handleMenuItemClick}
      />
    </Fragment>
  );
};
