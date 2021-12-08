import React, { useEffect, useState } from 'react';
import { FileWithPath, useDropzone } from 'react-dropzone';
import { CommonProps } from '../CommonProps';
import { useStylesWithRootClass } from '../useStylesWithRootClass';
import {
  containerClassName,
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
import { DotList, ListItemProps } from '../list/List';

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
    onDragEnter,
  });
  const [uploadedFiles, setUploadedFiles] = useState<FileWithPath[]>([]);
  const [rejectedFiles, setRejectedFiles] = useState<FileRejection[]>([]);
  const [listAcceptedItems, setListItems] = useState<ListItemProps[]>([]);
  const [listRejectedItems, setRejectedItems] = useState<ListItemProps[]>([]);

  useEffect(() => {
    console.log('onChange', uploadedFiles);
    onChange
      ? onChange(uploadedFiles)
      : console.warn('onChange callback not defined');
  }, [uploadedFiles]);

  const deleteFile = (fileToRemove: FileWithPath) => {
    console.log(uploadedFiles);
    uploadedFiles.splice(uploadedFiles.indexOf(fileToRemove), 1);
    setUploadedFiles(uploadedFiles);

    parseFiles(true);
  };

  const parseFiles = (deleted: boolean) => {
    console.log('acceptedFiles', acceptedFiles);
    if (deleted) {
      setListItems(parseAcceptedFiles(uploadedFiles, deleteFile));
      return;
    }

    if (acceptedFiles.length > 0) {
      const accepted = uploadedFiles.concat(acceptedFiles);
      setUploadedFiles(accepted);
      setListItems(parseAcceptedFiles(accepted, deleteFile));
    }

    if (fileRejections.length > 0) {
      const rejected = rejectedFiles.concat(fileRejections);
      setRejectedFiles(rejected);
      setRejectedItems(parseRejectedFiles(rejected, maxSize));
    }
  };

  useEffect(() => {
    parseFiles(false);
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

  const selectFileButton = (
    <DotButton disabled={disabled} onClick={open}>
      Select file(s)
    </DotButton>
  );

  const dropzoneContent = isDragActive ? (
    <DotTypography variant="h3">Drop the file(s) here ...</DotTypography>
  ) : (
    <>
      <DotTypography variant="h3">
        Drag and drop your file(s) here
      </DotTypography>
      <DotTypography variant="h3">or</DotTypography>
      {selectFileButton}
    </>
  );

  return (
    <StyledFileUploadContainer className={containerClassName}>
      {buttonOnly ? (
        selectFileButton
      ) : (
        <StyledFileUpload
          {...getRootProps()}
          aria-label={ariaLabel}
          className={rootClasses}
          data-testid={dataTestId}
        >
          <input {...getInputProps()} />
          <DotIcon iconId="upload-file" />
          {dropzoneContent}
        </StyledFileUpload>
      )}
      {maxSize && maxSizeMessage}
      {maxFiles && maxFilesMessage}
      <DotList items={listAcceptedItems} width="100%" />
      <DotList items={listRejectedItems} width="100%" />
    </StyledFileUploadContainer>
  );
};
