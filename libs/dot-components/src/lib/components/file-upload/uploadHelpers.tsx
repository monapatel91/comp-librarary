import React from 'react';
import { FileWithPath } from 'react-dropzone';
import { DotFileListItem } from './FileListItem';

export interface FileRejection {
  errors: Array<FileUploadError>;
  file: FileWithPath;
}

export interface FileUploadError {
  code: string;
  message: string;
}

export const parseAcceptedFile = (
  deleteFile: (file: FileWithPath) => void,
  file: FileWithPath
) => {
  return {
    child: (
      <DotFileListItem
        deleteFile={deleteFile}
        file={file}
        key={`${file.path}-${file.lastModified}`}
      />
    ),
  };
};

export const parseRejectedFile = (
  deleteFile: (file: FileWithPath) => void,
  fileRejections: FileRejection,
  maxSize: number
) => {
  const { errors, file } = fileRejections;
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

  return {
    child: (
      <DotFileListItem
        deleteFile={deleteFile}
        error={true}
        errorText={errorText}
        file={file}
        key={`${file.path}-${file.lastModified}`}
      />
    ),
  };
};
