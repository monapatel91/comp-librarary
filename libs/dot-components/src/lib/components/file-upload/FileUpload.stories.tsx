import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { DotFileUpload, FileUploadProps } from './FileUpload';

export default {
  title: 'Experimental/FileUpload',
  component: DotFileUpload,
  argTypes: {
    accept: {
      defaultValue: ['image/*'],
    },
    dataTestId: {
      defaultValue: 'file-upload-test-id',
    },
    maxFiles: { defaultValue: 5 },
    maxSize: { defaultValue: 25 },
  },
} as Meta;

export const Default: Story<FileUploadProps> = (args) => (
  <DotFileUpload {...args} />
);
