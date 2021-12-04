import React from 'react';
import { FileWithPath, useDropzone } from 'react-dropzone';
import { CommonProps } from '../CommonProps';
import {
  containerClassName,
  rootClassName,
  StyledFileUpload,
  StyledFileUploadContainer,
} from './FileUpload.styles';
import { useStylesWithRootClass } from '../useStylesWithRootClass';
import { DotTypography } from '../typography/Typography';
import { DotButton } from '../button/Button';
import { DotIcon } from '../icon/Icon';
import { DotList, ListItemProps } from '../list/List';

interface FileUploadError {
  code: string;
  message: string;
}

interface FileRejection {
  file: FileWithPath;
  errors: Array<FileUploadError>;
}

export interface FileUploadProps extends CommonProps {
  accept?: Array<string>;
  /** If true, will only display the button */
  buttonOnly?: boolean;
  /** If true, the upload zone will be disabled */
  disabled?: boolean;
  /** Defines the maximum number of files that can be uploaded at once */
  maxFiles?: number;
  /** Defines the maximum file size (in MB) */
  maxSize: number;
  /** callback triggered when dragenter event occurs */
  onDragEnter?: (event: React.DragEvent<HTMLDivElement>) => void;
  /** callback triggered when files are added */
  onUpload?: (files: Array<File>) => void;
}

export const acceptedFileItems = (acceptedFiles: Array<FileWithPath>) => {
  const acceptedItems: ListItemProps[] = [];
  acceptedFiles.forEach((file: FileWithPath) => {
    acceptedItems.push({
      className: 'file-success',
      endIconId: 'check-solid',
      startIconId: 'attachment',
      text: file.path,
    });
  });
  return acceptedItems;
};

export const fileRejectionItems = (
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
      startIconId: 'attachment',
      secondaryText: errorText,
    });
  });
  return failedItems;
};

export const DotFileUpload = ({
  accept,
  ariaLabel,
  buttonOnly = false,
  className,
  'data-testid': dataTestId,
  disabled,
  maxFiles,
  maxSize,
  onDragEnter,
  onUpload,
}: FileUploadProps) => {
  const rootClasses = useStylesWithRootClass(rootClassName, className);
  const {
    acceptedFiles,
    fileRejections,
    getRootProps,
    getInputProps,
    isDragActive,
    open,
  } = useDropzone({
    accept,
    disabled,
    maxFiles,
    maxSize: maxSize * 1000000,
    noClick: true,
    noKeyboard: true,
    onDragEnter,
    onDrop: (files: Array<File>) => handleDrop(files),
  });

  const handleDrop = (files: Array<File>) => {
    onUpload ? onUpload(files) : console.warn('onUpload callback not defined');
  };

  const getFileList = () => {
    const acceptedItems: ListItemProps[] =
      acceptedFileItems(acceptedFiles) || [];
    const rejectedItems: ListItemProps[] =
      fileRejectionItems(fileRejections, maxSize) || [];
    return acceptedItems.concat(rejectedItems);
  };

  const maxFilesMessage = (
    <DotTypography variant="body2">
      ({maxFiles} files are the maximum number of files you can drop here)
    </DotTypography>
  );

  const maxSizeMessage = (
    <DotTypography variant="body2">
      File size should not exceed {maxSize}MB.
    </DotTypography>
  );

  const dropzoneContent = isDragActive ? (
    <DotTypography variant="h3">Drop the file(s) here ...</DotTypography>
  ) : (
    <>
      <DotTypography variant="h3">
        Drag and drop your file(s) here
      </DotTypography>
      <DotTypography variant="h3">or</DotTypography>
      <DotButton onClick={open}>Select file(s)</DotButton>
      {maxSize && maxSizeMessage}
    </>
  );

  return (
    <StyledFileUploadContainer className={containerClassName}>
      {buttonOnly ? (
        <DotButton onClick={open}>Select a file</DotButton>
      ) : (
        <StyledFileUpload
          {...getRootProps()}
          aria-label={ariaLabel}
          className={rootClasses}
          data-testid={dataTestId}
        >
          <input {...getInputProps()} />
          {/* TO-DO: need `upload-cloud` icon */}
          <DotIcon iconId="upload-file" />
          {dropzoneContent}
        </StyledFileUpload>
      )}
      {maxFiles && maxFilesMessage}
      {maxSize && maxSizeMessage}
      <DotList items={getFileList()} width="100%" />
    </StyledFileUploadContainer>
  );
};
