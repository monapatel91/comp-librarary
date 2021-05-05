import React, { KeyboardEvent, MouseEvent, useState } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';
import { DotSplitButton, SplitButtonProps } from './SplitButton';

const options = [
  { children: 'option 1', key: '0' },
  { children: 'option 2 with some longer text', key: '1' },
  { children: 'option 3', key: '2' },
];

export default {
  title: 'Experimental/SplitButton',
  component: DotSplitButton,
  argTypes: {
    label: { defaultValue: 'SplitButton Component' },
    options: { defaultValue: options },
    titleTooltip: { defaultValue: 'Submit your favorite option' },
  },
} as Meta;

export const Default: Story<SplitButtonProps> = (args) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const onSelect = (
    event: MouseEvent | KeyboardEvent,
    menuId: string,
    itemId: string
  ) => {
    setSelectedIndex(parseInt(itemId));
  };
  return (
    <DotSplitButton
      {...args}
      onClick={action('Clicked ' + options[selectedIndex].children)}
      onSelect={onSelect}
    />
  );
};
