import React from 'react';
import { render, screen } from '../../testing-utils';
import { DotTabs, TabsProps, TabProps } from './Tabs';

describe('Tabs', () => {
  const tabs = [
    {
      label: 'Tab 1',
      'data-testid': 'tab-1',
    },
    {
      label: 'Tab 2',
      iconId: 'help',
      'data-testid': 'tab-2',
    },
    {
      label: 'Tab 3',
      disabled: true,
      'data-testid': 'tab-3',
    },
  ];

  it('should have unchanged API', () => {
    const onChange = jest.fn();
    const tsProps = {
      centered: true,
      indicatorColor: 'primary',
      initialValue: 1,
      onChange: onChange,
      scrollButtons: 'auto',
      tabs: tabs,
      textColor: 'inherit',
      variant: 'scrollable',
    };
    const tabsProps: TabsProps = {
      centered: true,
      indicatorColor: 'primary',
      initialValue: 1,
      onChange: onChange,
      scrollButtons: 'auto',
      tabs: tabs,
      textColor: 'inherit',
      variant: 'scrollable',
    };
    expect(tabsProps).toEqual(tsProps);
    const tProps = {
      disabled: true,
      iconId: 'help',
      label: 'Tab 1',
      value: 1,
    };
    const tabProps: TabProps = {
      disabled: true,
      iconId: 'help',
      label: 'Tab 1',
      value: 1,
    };
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
});
