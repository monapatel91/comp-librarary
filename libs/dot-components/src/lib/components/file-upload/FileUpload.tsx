import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { FileWithPath, useDropzone } from 'react-dropzone';
import { CommonProps } from '../CommonProps';
import { useStylesWithRootClass } from '../useStylesWithRootClass';
import {
  containerClassName,
  rootClassName,
  StyledFileUpload,
  StyledFileUploadContainer,
} from './FileUpload.styles';
import { DotTypography } from '../typography/Typography';
import { DotButton } from '../button/Button';
import { DotIconButton } from '../button/IconButton';
import { DotIcon } from '../icon/Icon';
import { DotList, ListItemProps } from '../list/List';
import { listItemRootClass, StyledListItem } from '../list/List.styles';

interface FileItem {
  acceptedFiles: Array<FileWithPath>;
  file: FileWithPath;
  key: string;
  updateFileList: Dispatch<SetStateAction<Array<FileWithPath>>>;
}

interface FileUploadError {
  code: string;
  message: string;
}

interface FileRejection {
  errors: Array<FileUploadError>;
  file: FileWithPath;
}

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
  /** callback triggered when dragenter event occurs */
  onDragEnter?: (event: React.DragEvent<HTMLDivElement>) => void;
  /** callback triggered when files are added */
  onUpload?: (files: Array<File>) => void;
}

export const FileListItem = ({
  acceptedFiles,
  file,
  key,
  updateFileList,
}: FileItem) => {
  const [endIcon, setEndIcon] = useState('check-solid');
  const removeFile = (fileToRemove: FileWithPath) => {
    acceptedFiles.splice(acceptedFiles.indexOf(fileToRemove), 1);
    updateFileList(acceptedFiles);
  };

  return (
    <StyledListItem
      className={`${listItemRootClass} file-success`}
      key={key}
      onMouseEnter={() => setEndIcon('delete')}
      onMouseLeave={() => setEndIcon('check-solid')}
    >
      <DotIcon iconId="file" />
      <DotTypography variant="body1">{file.path}</DotTypography>
      <DotIconButton
        className={`${listItemRootClass}-end-icon`}
        iconId={endIcon}
        onClick={() => removeFile(file)}
      />
    </StyledListItem>
  );
};

export const acceptedFileItems = (
  acceptedFiles: Array<FileWithPath>,
  setUploadedFiles: Dispatch<SetStateAction<Array<FileWithPath>>>
) => {
  const acceptedItems: ListItemProps[] = [];

  acceptedFiles.forEach((file: FileWithPath) => {
    acceptedItems.push({
      child: (
        <FileListItem
          acceptedFiles={acceptedFiles}
          file={file}
          key={file.path}
          updateFileList={setUploadedFiles}
        />
      ),
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
      startIconId: 'file',
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
    noClick: true,
    noKeyboard: true,
    onDragEnter,
    onDrop: (files: Array<File>) => handleDrop(files),
  });
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const handleDrop = (files: Array<File>) => {
    onUpload ? onUpload(files) : console.warn('onUpload callback not defined');
  };

  const getFileList = () => {
    const acceptedItems: ListItemProps[] =
      acceptedFileItems(acceptedFiles, setUploadedFiles) || [];
    const rejectedItems: ListItemProps[] =
      fileRejectionItems(fileRejections, maxSize) || [];
    setUploadedFiles(acceptedItems.concat(rejectedItems));
  };

  useEffect(() => {
    getFileList();
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
      <DotList items={uploadedFiles} width="100%" />
    </StyledFileUploadContainer>
  );
};
