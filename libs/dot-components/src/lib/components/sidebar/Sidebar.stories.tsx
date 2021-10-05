import React, { MouseEvent, useState } from 'react';
import { DotSidebar, SidebarProps } from './Sidebar';
import { Story, Meta } from '@storybook/react/types-6-0';
import { TextField } from '@material-ui/core';
import { NestedListType } from '../list/List';

export default {
  title: 'Components/Sidebar',
  component: DotSidebar,
  argTypes: {
    backItem: {
      defaultValue: {
        iconId: 'back',
        onClick: () => console.log('go back clicked'),
        text: 'Home',
        title: `Go Back to Home`,
      },
    },
    brandDesc: {
      defaultValue: 'Release orchestration powered by',
    },
    children: {
      defaultValue: <TextField placeholder="search" variant="outlined" />,
    },
    collapsable: {
      defaultValue: true,
    },
    goBack: {
      defaultValue: false,
    },
    nestedListType: {
      defaultValue: 'drawer' as NestedListType,
    },
    title: {
      defaultValue: 'Title Goes Here',
    },
    titleAvatarProps: {
      defaultValue: {
        alt: 'Avatar goes here',
        iconId: 'user',
        type: 'icon',
      },
    },
    width: {
      defaultValue: 240,
    },
  },
} as Meta;

export const Default: Story<SidebarProps> = (args) => {
  const [selected, setSelected] = useState(null);
  const handleClick = (key: number) => {
    setSelected(key);
  };
  const isSelected = (key: number) => {
    return selected === key;
  };
  const navItems = [
    {
      startIconId: 'process-template',
      items: [
        {
          text: 'PLANNING',
          divider: true,
        },
        {
          onClick: (_event: MouseEvent) => handleClick(0),
          selected: isSelected(0),
          text: 'Package Progression',
        },
        {
          onClick: (_event: MouseEvent) => handleClick(1),
          selected: isSelected(1),
          text: 'Feature Progression',
        },
        {
          text: 'PLANNING',
          divider: true,
        },
        {
          onClick: (_event: MouseEvent) => handleClick(0),
          selected: isSelected(0),
          text: 'Package Progression',
        },
        {
          onClick: (_event: MouseEvent) => handleClick(1),
          selected: isSelected(1),
          text: 'Feature Progression',
        },
        {
          child: <TextField placeholder="search" variant="outlined" />,
        },
      ],
      text: 'Progressions',
    },
    {
      startIconId: 'satellite-group',
      items: [
        {
          text: 'PLANNING',
          divider: true,
        },
        {
          startIconId: 'block',
          onClick: (_event: MouseEvent) => handleClick(3),
          selected: isSelected(3),
          text: 'Groups',
        },
        {
          startIconId: 'block',
          onClick: (_event: MouseEvent) => handleClick(4),
          selected: isSelected(4),
          text: 'Instances',
        },
      ],
      text: 'Pipelines',
    },
    {
      startIconId: 'dashboard',
      onClick: (_event: MouseEvent) => handleClick(6),
      selected: isSelected(6),
      text: 'Insights',
    },
    {
      text: 'Workflow',
      divider: true,
    },
    {
      startIconId: 'block',
      onClick: (_event: MouseEvent) => handleClick(7),
      selected: isSelected(7),
      text: 'Packages',
    },
    {
      startIconId: 'flag',
      onClick: (_event: MouseEvent) => handleClick(8),
      selected: isSelected(8),
      text: 'Features',
    },
    {
      startIconId: 'collection',
      onClick: (_event: MouseEvent) => handleClick(9),
      selected: isSelected(9),
      text: 'Projects',
    },
    {
      divider: true,
    },
    {
      startIconId: 'file-lines',
      onClick: (_event: MouseEvent) => handleClick(10),
      selected: isSelected(10),
      text: 'Workitems',
    },
    {
      startIconId: 'change',
      onClick: (_event: MouseEvent) => handleClick(11),
      selected: isSelected(11),
      text: 'Changes',
    },
    {
      startIconId: 'square-settings',
      onClick: (_event: MouseEvent) => handleClick(12),
      selected: isSelected(12),
      text: 'Artifacts',
    },
  ];
  return (
    <div style={{ top: '-1rem', left: '-1rem', position: 'relative' }}>
      <DotSidebar {...args} navItems={navItems} />
    </div>
  );
};
