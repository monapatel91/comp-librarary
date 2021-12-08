import React, { useEffect, useState } from 'react';
import { FileWithPath, useDropzone } from 'react-dropzone';
import { CommonProps } from '../CommonProps';
import { useStylesWithRootClass } from '../useStylesWithRootClass';
import {
  containerClassName,
  dropZoneClassName,
  rootClassName,
  StyledFileUpload,
  StyledFileUploadContainer,
} from './FileUpload.styles';
import {
  FileRejection,
  parseAcceptedFiles,
  parseRejectedFiles,
} from './uploadHelpers';
import { DotTypography } from '../typography/Typography';
import { DotButton } from '../button/Button';
import { DotIcon } from '../icon/Icon';
import { DotList } from '../list/List';

export interface FileUploadProps extends CommonProps {
  /** Unique file type specifiers <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#unique_file_type_specifiers" target="_blank">More Info</a> */
  accept?: Array<string>;
  /** If true, will only display the button */
  buttonOnly?: boolean;
  /** If true, the upload zone will be disabled */
  disabled?: boolean;
  /** Defines the maximum number of files that can be uploaded at once */
  maxFiles?: number;
  /** Defines the maximum file size (in MB) */
  maxSize: number;
  /** callback triggered when files are added or removed */
  onChange?: (files: Array<FileWithPath>) => void;
  /** callback triggered when dragenter event occurs */
  onDragEnter?: (event: React.DragEvent<HTMLDivElement>) => void;
}

export const DotFileUpload = ({
  accept,
  ariaLabel,
  buttonOnly = false,
  className,
  'data-testid': dataTestId,
  disabled,
  maxFiles,
  maxSize,
  onChange,
  onDragEnter,
}: FileUploadProps) => {
  const rootClasses = useStylesWithRootClass(
    rootClassName,
    className,
    !buttonOnly ? dropZoneClassName : '',
    disabled ? 'disabled' : ''
  );
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
    onDragEnter,
  });
  const [uploadedFiles, setUploadedFiles] = useState<FileWithPath[]>([]);
  const [rejectedFiles, setRejectedFiles] = useState<FileRejection[]>([]);

  useEffect(() => {
    onChange
      ? onChange(uploadedFiles)
      : console.warn('onChange callback not defined');
  }, [uploadedFiles]);

  const deleteFile = (fileToRemove: FileWithPath) => {
    uploadedFiles.splice(uploadedFiles.indexOf(fileToRemove), 1);
    setUploadedFiles([...uploadedFiles]);
  };

  const parseFiles = () => {
    if (acceptedFiles.length > 0) {
      const accepted = uploadedFiles.concat(acceptedFiles);
      setUploadedFiles(accepted);
    }

    if (fileRejections.length > 0) {
      const rejected = rejectedFiles.concat(fileRejections);
      setRejectedFiles(rejected);
    }
  };

  useEffect(() => {
    parseFiles();
  }, [acceptedFiles, fileRejections]);

  const maxFilesMessage = (
    <DotTypography variant="body2">
      {maxFiles} files are the maximum number of files you can upload at once.
    </DotTypography>
  );

  const maxSizeMessage = (
    <DotTypography variant="body2">
      File size should not exceed {maxSize}MB.
    </DotTypography>
  );

  const dropzoneContent = () => {
    if (buttonOnly) {
      return (
        <DotButton disabled={disabled} onClick={open}>
          Select file(s)
        </DotButton>
      );
    } else {
      return isDragActive ? (
        <>
          <DotIcon iconId="upload-file" />
          <DotTypography variant="h3">Drop the file(s) here ...</DotTypography>
        </>
      ) : (
        <>
          <DotIcon iconId="upload-file" />
          <DotTypography variant="h3">
            Drag and drop your file(s) here
          </DotTypography>
          <DotTypography variant="h3">or</DotTypography>
          <DotButton disabled={disabled} onClick={open}>
            Select file(s)
          </DotButton>
        </>
      );
    }
  };

  return (
    <StyledFileUploadContainer className={containerClassName}>
      <StyledFileUpload
        {...getRootProps()}
        aria-label={ariaLabel}
        className={rootClasses}
        data-testid={dataTestId}
      >
        <input {...getInputProps()} />
        {dropzoneContent()}
      </StyledFileUpload>
      {maxSize && maxSizeMessage}
      {maxFiles && maxFilesMessage}
      <DotList
        items={uploadedFiles.map((file: FileWithPath) =>
          parseAcceptedFiles(file, deleteFile)
        )}
        width="100%"
      />
      <DotList
        items={parseRejectedFiles(rejectedFiles, maxSize)}
        width="100%"
      />
    </StyledFileUploadContainer>
  );
};
