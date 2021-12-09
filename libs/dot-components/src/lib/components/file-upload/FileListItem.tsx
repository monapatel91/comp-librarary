import React, { useState } from 'react';
import { FileRejection, FileWithPath } from 'react-dropzone';
import { useStylesWithRootClass } from '../useStylesWithRootClass';
import { CommonProps } from '../CommonProps';
import { DotIcon } from '../icon/Icon';
import { DotIconButton } from '../button/IconButton';
import { listItemRootClass, StyledListItem } from '../list/List.styles';
import { DotTypography } from '../typography/Typography';
import { fileClassName } from './FileUpload.styles';

export interface FileItemProps extends CommonProps {
  deleteFile: (file: FileWithPath) => void;
  error?: boolean;
  errorText?: string;
  file: FileWithPath;
}

export const DotFileListItem = ({
  ariaLabel,
  className,
  'data-testid': dataTestId,
  deleteFile,
  error = false,
  errorText,
  file,
}: FileItemProps) => {
  const rootClasses = useStylesWithRootClass(
    fileClassName,
    listItemRootClass,
    className,
    error ? 'file-error' : 'file-success'
  );
  const [endIcon, setEndIcon] = useState('check-solid');

  return (
    <StyledListItem
      aria-label={ariaLabel}
      className={rootClasses}
      data-testid={dataTestId}
      onMouseEnter={() => setEndIcon('delete')}
      onMouseLeave={() => setEndIcon('check-solid')}
    >
      <DotIcon iconId="file" />
      {error ? (
        <>
          <div className="file-item-text">
            <DotTypography variant="body1">{file.path}</DotTypography>
            <DotTypography variant="body2">{errorText}</DotTypography>
          </div>
          <DotIconButton
            className={`${listItemRootClass}-end-icon`}
            iconId="error-solid"
          />
        </>
      ) : (
        <>
          <DotTypography variant="body1">{file.path}</DotTypography>
          <DotIconButton
            className={`${listItemRootClass}-end-icon`}
            iconId={endIcon}
            onClick={() => deleteFile(file)}
          />
        </>
      )}
    </StyledListItem>
  );
};
