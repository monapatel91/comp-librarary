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

export const parseListItem = (
  deleteFile: (file: FileWithPath | FileRejection) => void,
  fileToBeParsed: FileWithPath | FileRejection,
  maxSize: number
) => {
  const errors = fileToBeParsed.errors;
  const hasErrors = errors.length > 0;
  const parsedFile = fileToBeParsed.file;
  let errorText;
  if (hasErrors) {
    errorText = errors
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
  }

  return {
    child: (
      <DotFileListItem
        deleteFile={deleteFile}
        error={hasErrors}
        errorText={errorText}
        file={parsedFile}
        key={`${parsedFile.path}-${parsedFile.lastModified}`}
      />
    ),
  };
};
