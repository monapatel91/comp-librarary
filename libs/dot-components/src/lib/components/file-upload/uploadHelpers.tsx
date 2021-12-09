import React from 'react';
import { FileWithPath } from 'react-dropzone';
import { DotFileListItem } from './FileListItem';
import { CreateUUID } from '../createUUID';

export interface MappedFile {
  errors: Array<FileUploadError>;
  file: FileWithPath;
}

export interface FileUploadError {
  code: string;
  message: string;
}

export const parseListItem = (
  deleteFile: (file: FileWithPath) => void,
  fileToBeParsed: MappedFile,
  maxSize: number
) => {
  const fileErrors = fileToBeParsed.errors;
  const parsedFile = fileToBeParsed.file;
  const hasErrors = fileErrors.length > 0;
  let errorText;
  if (hasErrors) {
    errorText = fileErrors
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
        key={CreateUUID()}
      />
    ),
  };
};
