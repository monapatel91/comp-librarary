import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { DotTabs, TabsProps } from './Tabs';
import { DotActionToolbar } from '../action-toolbar/ActionToolbar';

export default {
  title: 'Experimental/Tabs',
  component: DotTabs,
  argTypes: {
    centered: {
      defaultValue: false,
    },
    initialValue: {
      defaultValue: 2,
    },
    onChange: {
      action: 'tab changed',
    },
    tabs: {
      defaultValue: [
        {
          label: 'Tab One',
          iconId: 'dark',
        },
        {
          label: 'Tab Two',
          disabled: true,
          iconId: 'notification-bell',
        },
        {
          label: 'Tab Three',
          iconId: 'clear-solid',
        },
        {
          label: 'Tab Four',
          iconId: 'help',
        },
      ],
    },
  },
} as Meta;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Default: Story<TabsProps> = (args: any) => {
  return <DotTabs {...args} />;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const TabsInActionBar: Story<TabsProps> = (args: any) => {
  const [selectedTab, setSelectedTab] = useState(2);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onChange = (value: any) => {
    setSelectedTab(value);
  };

  return (
    <>
      <DotActionToolbar>
        <DotTabs {...args} onChange={onChange} />
      </DotActionToolbar>
      <div hidden={selectedTab !== 0}>I am first!</div>
      <div hidden={selectedTab !== 1}>I try harder because I am second!</div>
      <div hidden={selectedTab !== 2}>Three is not a crowd!</div>
      <div hidden={selectedTab !== 3}>Last but not least!</div>
    </>
  );
};
