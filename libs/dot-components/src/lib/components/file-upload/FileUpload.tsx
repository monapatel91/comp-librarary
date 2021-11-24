import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { CommonProps } from '../CommonProps';
import {
  containerClassName,
  rootClassName,
  StyledFileUpload,
} from './FileUpload.styles';
import { useStylesWithRootClass } from '../useStylesWithRootClass';
import { DotTypography } from '../typography/Typography';
import { DotButton } from '../button/Button';
import { DotIcon } from '../icon/Icon';

export interface FileUploadProps extends CommonProps {
  /** If true, the upload zone will be disabled */
  disabled?: boolean;
  /** Defines the maximum number of files that can be uploaded at once */
  maxFiles?: number;
  /** Defines the maximum file size (in bytes) */
  maxSize?: number;
  /** callback triggered when files are added */
  onDrop?: (files: File[]) => void;
}

// https://react-dropzone.js.org/
export const DotFileUpload = ({
  ariaLabel,
  className,
  'data-testid': dataTestId,
  disabled,
  maxFiles,
  maxSize,
  onDrop,
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
    disabled,
    maxFiles,
    maxSize,
    noClick: true,
    noKeyboard: true,
    onDrop,
  });
  // const handleDrop = useCallback((acceptedFiles) => {
  //   console.log('acceptedFiles', acceptedFiles);
  //   // Do something with the files
  //   if (onDrop) {
  //     onDrop(acceptedFiles);
  //   }
  // }, []);

  const acceptedFileItems = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  const fileRejectionItems = fileRejections.map(({ file, errors }) => {
    return (
      <li key={file.path}>
        {file.path} - {file.size} bytes
        <ul>
          {errors.map((e) => (
            <li key={e.code}>{e.message}</li>
          ))}
        </ul>
      </li>
    );
  });

  return (
    <div className={containerClassName}>
      <StyledFileUpload
        {...getRootProps()}
        aria-label={ariaLabel}
        className={rootClasses}
        data-testid={dataTestId}
      >
        <input {...getInputProps()} />
        {/* TO-DO: need `upload-cloud` icon */}
        <DotIcon iconId="upload-file" />
        {isDragActive ? (
          <DotTypography variant="h3">Drop the files here ...</DotTypography>
        ) : (
          <>
            <DotTypography variant="h3">
              Drag and drop your files here
            </DotTypography>
            <DotTypography variant="h3">or</DotTypography>
            <DotButton onClick={open}>Select a file</DotButton>
          </>
        )}
      </StyledFileUpload>
      <DotTypography variant="subtitle2">
        ({maxFiles} files are the maximum number of files you can drop here)
      </DotTypography>
      <DotTypography variant="h4">Accepted files</DotTypography>
      <ul>{acceptedFileItems}</ul>
      <DotTypography variant="h4">Rejected files</DotTypography>
      <ul>{fileRejectionItems}</ul>
    </div>
  );
};
