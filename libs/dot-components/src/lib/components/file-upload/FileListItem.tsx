import React, { useState } from 'react';
import { FileWithPath } from 'react-dropzone';
import { useStylesWithRootClass } from '../useStylesWithRootClass';
import { CommonProps } from '../CommonProps';
import { DotIcon } from '../icon/Icon';
import { DotIconButton } from '../button/IconButton';
import { listItemRootClass, StyledListItem } from '../list/List.styles';
import { DotTypography } from '../typography/Typography';
import { fileClassName } from './FileUpload.styles';

export interface FileItemProps extends CommonProps {
  deleteFile: (file: FileWithPath) => void;
  file: FileWithPath;
}

export const DotFileListItem = ({
  ariaLabel,
  className,
  'data-testid': dataTestId,
  deleteFile,
  file,
}: FileItemProps) => {
  const rootClasses = useStylesWithRootClass(
    fileClassName,
    listItemRootClass,
    className,
    'file-success'
  );
  const [endIcon, setEndIcon] = useState('check-solid');

  return (
    <StyledListItem
      aria-label={ariaLabel}
      className={rootClasses}
      data-testid={dataTestId}
      key={`${file.path}-${file.lastModified}`}
      onMouseEnter={() => setEndIcon('delete')}
      onMouseLeave={() => setEndIcon('check-solid')}
    >
      <DotIcon iconId="file" />
      <DotTypography variant="body1">{file.path}</DotTypography>
      <DotIconButton
        className={`${listItemRootClass}-end-icon`}
        iconId={endIcon}
        onClick={() => deleteFile(file)}
      />
    </StyledListItem>
  );
};
