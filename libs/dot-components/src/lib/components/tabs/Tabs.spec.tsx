import React from 'react';
import { render, screen } from '../../testing-utils';
import {
  DotTabs,
  TabsColor,
  TabsProps,
  TabProps,
  TabsScrollButtons,
  TabsVariant,
} from './Tabs';

describe('Tabs', () => {
  const getTab = (tabNumber: number): HTMLElement =>
    screen.getByTestId(`tab-${tabNumber}`);

  const tabs = [
    {
      ariaLabel: 'tab 1',
      label: 'Tab 1',
      'data-testid': 'tab-1',
    },
    {
      ariaLabel: 'tab 2',
      label: 'Tab 2',
      iconId: 'help',
      'data-testid': 'tab-2',
    },
    {
      ariaLabel: 'tab 3',
      label: 'Tab 3',
      disabled: true,
      'data-testid': 'tab-3',
    },
  ];

  it('should have unchanged API', () => {
    const onChange = jest.fn();
    const tsProps = {
      centered: true,
      color: 'primary' as TabsColor,
      className: 'test-class',
      'data-testid': 'testid',
      initialValue: 1,
      onChange: onChange,
      scrollButtons: 'auto' as TabsScrollButtons,
      tabs: tabs,
      variant: 'scrollable' as TabsVariant,
    };
    const tabsProps: TabsProps = tsProps;
    expect(tabsProps).toEqual(tsProps);
    const tProps = {
      disabled: true,
      iconId: 'help',
      label: 'Tab 1',
      value: 1,
    };
    const tabProps: TabProps = tProps;
    expect(tabProps).toEqual(tProps);
  });

  it('should render with initial tab selection and tab enablement', () => {
    render(<DotTabs initialValue={1} tabs={tabs}></DotTabs>);
    const tab1 = screen.getByText('Tab 1');
    expect(tab1).toBeVisible();
    const tab2 = screen.getByText('Tab 2');
    expect(tab2).toBeVisible();
    const tab3 = screen.getByText('Tab 3');
    expect(tab3).toBeVisible();
    const selectedTab = screen.getByTestId('tab-2');
    expect(selectedTab).toHaveClass('Mui-selected');
    const icon = selectedTab.querySelector('i');
    expect(icon).toBeVisible();
    const disabledTab = screen.getByTestId('tab-3');
    expect(disabledTab).toHaveClass('Mui-disabled');
  });

  it("should have 'aria-label' attribute, with correct value, for each tab", () => {
    render(<DotTabs tabs={tabs} />);
    expect(screen.getByRole('tablist')).toHaveAttribute('aria-label', 'tabs');
    tabs.forEach(({ ariaLabel }: TabProps, index: number) => {
      expect(getTab(index + 1)).toHaveAttribute('aria-label', ariaLabel);
    });
  });
});
