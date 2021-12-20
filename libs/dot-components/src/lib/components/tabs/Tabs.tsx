import React, { ChangeEvent, ReactNode, useState } from 'react';
import { Tab } from '@mui/material';
import { useStylesWithRootClass } from '../useStylesWithRootClass';
import { CommonProps } from '../CommonProps';
import { rootClassName, StyledTabs } from './Tabs.styles';
import { DotIcon } from '../icon/Icon';

export type TabsColor = 'primary' | 'secondary';
export type TabsScrollButtons = 'auto' | boolean;
export type TabsVariant = 'fullWidth' | 'scrollable' | 'standard';

export interface TabProps extends CommonProps {
  /** If true, the tab will be disabled. */
  disabled?: boolean;
  /** The ID of the icon to display on the tab */
  iconId?: string;
  /** The text to display on the tab */
  label: string;
  /** The value of the Tab (defaults to tab index) */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value?: any;
}

export interface TabsProps extends CommonProps {
  /** Center the tabs */
  centered?: boolean;
  /** The color of the tabs */
  color?: TabsColor;
  /** The value of the initially selected tab */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  initialValue?: any;
  /** Tab change callback */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onChange?: (value: any) => void;
  /** Determines behavior of scroll buttons when tabs are scrollable (variant="scrollable") */
  scrollButtons?: TabsScrollButtons;
  /** Array of tabs to be displayed */
  tabs: Array<TabProps>;
  /** Determines additional display behavior of the tabs */
  variant?: TabsVariant;
}

export const DotTabs = ({
  centered = false,
  className,
  color = 'secondary',
  'data-testid': dataTestId,
  initialValue = 0,
  onChange,
  scrollButtons,
  tabs,
  variant,
}: TabsProps) => {
  const [value, setValue] = useState(initialValue);
  const rootClasses = useStylesWithRootClass(rootClassName, className);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChange = (_event: ChangeEvent<unknown>, val: any) => {
    setValue(val);
    onChange && onChange(val);
  };

  const tabArray: Array<ReactNode> = [];
  tabs.forEach((tab, index) => {
    const icon = tab.iconId ? <DotIcon iconId={tab.iconId} /> : null;
    const label = (
      <div className="dot-tab-label-container">
        {icon && <span>{icon}</span>}
        <span className="dot-tab-label">{tab.label}</span>
      </div>
    );
    const tabElement = (
      <Tab
        aria-label={tab.ariaLabel}
        data-testid={tab['data-testid']}
        disableRipple={true}
        disabled={tab.disabled}
        key={index}
        label={label}
        value={tab.value}
      />
    );
    tabArray.push(tabElement);
  });
  return (
    <StyledTabs
      aria-label="tabs"
      centered={centered}
      classes={{ root: rootClasses }}
      data-testid={dataTestId}
      indicatorColor={color}
      onChange={handleChange}
      scrollButtons={scrollButtons}
      textColor={color}
      value={value}
      variant={variant}
    >
      {tabArray}
    </StyledTabs>
  );
};
