import React, { ReactNode, useState } from 'react';
import { CommonProps } from '../CommonProps';
import { useStylesWithRootClass as combineClasses } from '../useStylesWithRootClass';
import { rootClassName, StyledNavigationRail } from './NavigationRail.styles';
import { DotButton } from '../button/Button';
import { DotIcon } from '../icon/Icon';
import { DotTypography } from '../typography/Typography';

const MAX_ALLOWED_ITEMS = 7;

export type RailItemsPosition = 'flex-start' | 'center' | 'flex-end';

export interface RailItem {
  /** Defines a string value that labels the current element **/
  ariaLabel?: string;
  /** Id of the icon shown in the rail item */
  iconId: string;
  /** text displayed or title text if icon used */
  title: string;
}

export interface NavigationRailProps extends CommonProps {
  /** onChange callback */
  onChange?: (index: number) => void;
  /** controls the position of the rail items */
  railItemPosition?: RailItemsPosition;
  /** list of rail items */
  railItems: Array<RailItem>;
  /** index of selected rail item */
  selectedIndex?: number;
}

export const DotNavigationRail = ({
  ariaLabel,
  className,
  'data-testid': dataTestId,
  onChange,
  railItemPosition = 'flex-start',
  railItems,
  selectedIndex = 0,
}: NavigationRailProps) => {
  const rootClasses = combineClasses(rootClassName, className);

  const [selectedItemIndex, setSelectedItemIndex] =
    useState<number>(selectedIndex);

  const onItemSelect =
    (index: number): (() => void) =>
    () => {
      setSelectedItemIndex(index);
      onChange && onChange(index);
    };

  const checkIfSelected = (index: number): boolean =>
    selectedItemIndex === index;

  const renderRailItems = (): ReactNode => {
    return railItems
      ?.slice(0, MAX_ALLOWED_ITEMS)
      .map(
        (
          { ariaLabel: itemAriaLabel, iconId, title }: RailItem,
          index: number
        ) => (
          <DotButton
            ariaLabel={itemAriaLabel}
            className={combineClasses(
              'rail-item-button',
              checkIfSelected(index) && 'selected'
            )}
            data-testid={`rail-item-${index}`}
            disableRipple={true}
            key={index}
            onClick={onItemSelect(index)}
            type="text"
          >
            {iconId && (
              <DotIcon className="rail-item-button-icon" iconId={iconId} />
            )}
            <DotTypography variant="body2">{title}</DotTypography>
          </DotButton>
        )
      );
  };

  return (
    <StyledNavigationRail
      aria-label={ariaLabel}
      className={rootClasses}
      data-testid={dataTestId}
      railItemPosition={railItemPosition}
    >
      {railItems && renderRailItems()}
    </StyledNavigationRail>
  );
};
