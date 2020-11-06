import React from 'react';
import { radios, text } from '@storybook/addon-knobs';
import { DotIcon, IconFontSize, IconType, sbFontSizeOptions } from './Icon';

export default {
  component: DotIcon,
  title: 'Atoms',
};

export const icon = () => {
  const sbIconTypeOptions = {
    Circle: 'circle',
    Square: 'square',
    Transparent: 'transparent',
  };

  const groupId = 'Options';
  const iconId = text('Icon ID', 'script', groupId);
  const iconBgColor = text('Background Color', '#eee', groupId);
  const fontSize = radios(
    'Size',
    sbFontSizeOptions,
    'default',
    groupId
  ) as IconFontSize;
  const iconType = radios(
    'Type',
    sbIconTypeOptions,
    'circle',
    groupId
  ) as IconType;
  const title = text('Title', 'Hello World', groupId);

  return (
    <DotIcon
      icon={iconId}
      iconBgColor={iconBgColor}
      fontSize={fontSize}
      iconType={iconType}
      title={title}
    />
  );
};
