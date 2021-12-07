import React from 'react';
import { FileWithPath } from 'react-dropzone';
import { FileListItem } from './FileListItem';
import { ListItemProps } from '../list/List';

export interface FileRejection {
  errors: Array<FileUploadError>;
  file: FileWithPath;
}

export interface FileUploadError {
  code: string;
  message: string;
}

export const parseAcceptedFiles = (
  acceptedFiles: Array<FileWithPath>,
  deleteFile: (file: FileWithPath) => void
) => {
  const acceptedItems: ListItemProps[] = [];
  console.log('parseAcceptedFiles', acceptedFiles);

  acceptedFiles.forEach((file: FileWithPath) => {
    acceptedItems.push({
      child: <FileListItem deleteFile={deleteFile} file={file} />,
    });
  });
  return acceptedItems;
};

export const parseRejectedFiles = (
  fileRejections: Array<FileRejection>,
  maxSize: number
) => {
  const failedItems: ListItemProps[] = [];
  fileRejections.forEach(({ file, errors }: FileRejection) => {
    const errorText = errors
      .map((e) => {
        switch (e.code) {
          case 'file-too-large':
            return `File exceeds ${maxSize}MB`;
          case 'file-invalid-type':
            return e.message;
          case 'too-many-files':
            return e.message;
          default:
            console.log('Unknown error', e);
            return e.message;
        }
      })
      .join(', ');

    failedItems.push({
      className: 'file-error',
      endIconId: 'error-solid',
      primaryText: file.path,
      startIconId: 'file',
      secondaryText: errorText,
    });
  });
  return failedItems;
};
