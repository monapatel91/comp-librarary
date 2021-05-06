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
  iconId: string;
  onClick: (index: number) => void;
  title: string;
}

export interface NavigationRailProps extends CommonProps {
  railItemPosition?: RailItemsPosition;
  railItems: Array<RailItem>;
  selectedIndex?: number;
}

export const DotNavigationRail = ({
  className,
  'data-testid': dataTestId,
  railItemPosition = 'flex-start',
  railItems,
  selectedIndex = 0,
}: NavigationRailProps) => {
  const rootClasses = combineClasses(rootClassName, className);

  const [selectedItemIndex, setSelectedItemIndex] = useState<number>(
    selectedIndex
  );

  const onItemSelect = (
    index: number,
    onClick: (index: number) => void
  ): (() => void) => () => {
    setSelectedItemIndex(index);
    onClick(index);
  };

  const checkIfSelected = (index: number): boolean =>
    selectedItemIndex === index;

  const renderRailItems = (): ReactNode => {
    return railItems
      ?.slice(0, MAX_ALLOWED_ITEMS)
      .map(({ iconId, onClick, title }: RailItem, index: number) => (
        <DotButton
          className={combineClasses(
            'rail-item-button',
            checkIfSelected(index) && 'selected'
          )}
          data-testid={`rail-item-${index}`}
          disableRipple={true}
          key={index}
          onClick={onItemSelect(index, onClick)}
          type="text"
        >
          {iconId && (
            <DotIcon className="rail-item-button-icon" iconId={iconId} />
          )}
          <DotTypography variant="body2">{title}</DotTypography>
        </DotButton>
      ));
  };

  return (
    <StyledNavigationRail
      className={rootClasses}
      data-testid={dataTestId}
      railItemPosition={railItemPosition}
    >
      {railItems && renderRailItems()}
    </StyledNavigationRail>
  );
};
