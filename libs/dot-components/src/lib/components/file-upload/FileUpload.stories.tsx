import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { DotFileUpload, FileUploadProps } from './FileUpload';

export default {
  title: 'Experimental/FileUpload',
  component: DotFileUpload,
  argTypes: {
    dataTestId: {
      defaultValue: 'file-upload-test-id',
    },
  },
} as Meta;

export const Default: Story<FileUploadProps> = (args) => (
  <DotFileUpload {...args} />
);
