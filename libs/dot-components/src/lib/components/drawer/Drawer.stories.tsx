import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { DotDrawer, DrawerProps } from './Drawer';
import { DotButton } from '../button/Button';
import { DotIconButton } from '../button/IconButton';

export default {
  title: 'Components/Drawer',
  component: DotDrawer,
  argTypes: {
    open: { defaultValue: true },
    children: { defaultValue: 'I am Batman' },
    width: { defaultValue: '256px' },
  },
} as Meta;

export const Default: Story<DrawerProps> = (args) => {
  const [_args, setArgs] = useState<DrawerProps>(args);
  const onClose = () => {
    _args.open = !_args.open;
    setArgs({ ..._args });
  };
  return (
    <>
      <DotButton onClick={onClose}>Toggle Drawer</DotButton>
      <DotDrawer onClose={onClose} {..._args}>
        <div>
          {args.children}
          <DotIconButton iconId="close" onClick={onClose} />
        </div>
      </DotDrawer>
    </>
  );
};
