import React, { KeyboardEvent, MouseEvent, useState } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';
import { DotSplitButton, SplitButtonProps } from './SplitButton';

const options = [
  { children: 'option 1', key: 'option 1' },
  {
    children: 'option 2 with some longer text',
    key: 'option 2 with some longer text',
  },
  { children: 'option 3', key: 'option 3' },
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
  const [selectedItem, setSelectedItem] = useState(options[0].key);
  const onSelect = (
    event: MouseEvent | KeyboardEvent,
    menuId: string,
    itemId: string
  ) => {
    setSelectedItem(itemId);
  };
  return (
    <DotSplitButton
      {...args}
      onClick={action(`Clicked ${selectedItem}`)}
      onSelect={onSelect}
    />
  );
};
