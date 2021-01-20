import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { useArgs } from '@storybook/client-api';

import { DotDrawer, DrawerProps } from './Drawer';
import DotButton from '../button/Button';
import { on } from 'process';

export default {
  title: 'Experimental/Drawer',
  component: DotDrawer,
  argTypes: {
    open: { defaultValue: true },
    children: { defaultValue: 'I am Batman' },
    width: { defaultValue: '256px' }
  },
} as Meta;



export const Default: Story<DrawerProps> = (args) => { 
const [_args, updateArgs] = useArgs();
const onClose = () => {
  _args.open = !_args.open;
  updateArgs(_args);
}
return (
  <>
  <DotButton onClick={onClose}>Toggle Drawer</DotButton>
  <DotDrawer onClose={onClose}  {...args}>
  <DotButton onClick={onClose}>Toggle Drawer</DotButton>
</DotDrawer>
</>
)


};
