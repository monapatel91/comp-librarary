import React, { MouseEvent } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { DotButtonToggle, ButtonToggleProps } from './ButtonToggle';

export default {
  title: 'Components/Button Toggle',
  component: DotButtonToggle,
  argTypes: {
    buttonOptions: {
      defaultValue: [
        { text: 'Disabled', value: 3, disabled: true },
        { text: 'Sample Text', value: 1 },
        { iconId: 'delete', value: 2 },
        { text: 'Icon Text', iconId: 'delete', value: 4 },
      ],
    },
  },
} as Meta;

export const Default: Story<ButtonToggleProps> = (args) => {
  const [toggleValue, setToggleValue] = React.useState(args.value);

  const handleToggleOption = (_event: MouseEvent, activeOption: any) => {
    setToggleValue(activeOption);
  };

  return (
    <DotButtonToggle
      {...args}
      value={toggleValue}
      onChange={handleToggleOption}
    />
  );
};
