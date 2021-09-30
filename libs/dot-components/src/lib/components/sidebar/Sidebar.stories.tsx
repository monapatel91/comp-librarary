import React, { MouseEvent, useState } from 'react';
import { DotSidebar, SidebarProps } from './Sidebar';
import { Story, Meta } from '@storybook/react/types-6-0';
import { TextField } from '@material-ui/core';

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
          startIconId: 'process-template',
          onClick: (event: MouseEvent) => handleClick(0),
          selected: isSelected(0),
          text: 'Package Progression',
        },
        {
          startIconId: 'process-template',
          onClick: (event: MouseEvent) => handleClick(1),
          selected: isSelected(1),
          text: 'Feature Progression',
        },
      ],
      text: 'Progressions',
    },
    {
      startIconId: 'satellite-group',
      items: [
        {
          startIconId: 'block',
          onClick: (event: MouseEvent) => handleClick(3),
          selected: isSelected(3),
          text: 'Groups',
        },
        {
          startIconId: 'block',
          onClick: (event: MouseEvent) => handleClick(4),
          selected: isSelected(4),
          text: 'Instances',
        },
      ],
      text: 'Pipelines',
    },
    {
      startIconId: 'dashboard',
      onClick: (event: MouseEvent) => handleClick(6),
      selected: isSelected(6),
      text: 'Insights',
    },
    {
      text: 'Workflow',
      divider: true,
    },
    {
      startIconId: 'block',
      onClick: (event: MouseEvent) => handleClick(7),
      selected: isSelected(7),
      text: 'Packages',
    },
    {
      startIconId: 'flag',
      onClick: (event: MouseEvent) => handleClick(8),
      selected: isSelected(8),
      text: 'Features',
    },
    {
      startIconId: 'collection',
      onClick: (event: MouseEvent) => handleClick(9),
      selected: isSelected(9),
      text: 'Projects',
    },
    {
      divider: true,
    },
    {
      startIconId: 'file-lines',
      onClick: (event: MouseEvent) => handleClick(10),
      selected: isSelected(10),
      text: 'Workitems',
    },
    {
      startIconId: 'change',
      onClick: (event: MouseEvent) => handleClick(11),
      selected: isSelected(11),
      text: 'Changes',
    },
    {
      startIconId: 'square-settings',
      onClick: (event: MouseEvent) => handleClick(12),
      selected: isSelected(12),
      text: 'Artifacts',
    },
    {
      text: 'System',
      divider: true,
    },
    {
      startIconId: 'monitor-gears',
      onClick: (event: MouseEvent) => handleClick(13),
      selected: isSelected(13),
      text: 'Tasks',
    },
    {
      startIconId: 'archive',
      onClick: (event: MouseEvent) => handleClick(14),
      selected: isSelected(14),
      text: 'Buckets',
    },
    {
      startIconId: 'monitor',
      onClick: (event: MouseEvent) => handleClick(15),
      selected: isSelected(15),
      text: 'Environment',
    },
  ];
  return <DotSidebar {...args} navItems={navItems} />;
};
