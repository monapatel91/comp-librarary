import React from 'react';
import { DotAvatar } from './Avatar';
import { radios } from '@storybook/addon-knobs';

export default {
  component: DotAvatar,
  title: 'Avatar',
};

export const avatar = () => {
  const size = radios('Size', { Small: 'small', Medium: 'medium' }, 'small');
  return <DotAvatar size={size} />;
};
