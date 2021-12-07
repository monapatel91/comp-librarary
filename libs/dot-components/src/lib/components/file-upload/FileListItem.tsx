import React, { useState } from 'react';
import { FileWithPath } from 'react-dropzone';
import { DotIcon } from '../icon/Icon';
import { DotIconButton } from '../button/IconButton';
import { listItemRootClass, StyledListItem } from '../list/List.styles';
import { DotTypography } from '../typography/Typography';

interface FileItem {
  deleteFile: (file: FileWithPath) => void;
  file: FileWithPath;
}

export const FileListItem = ({ deleteFile, file }: FileItem) => {
  const [endIcon, setEndIcon] = useState('check-solid');

  return (
    <StyledListItem
      className={`${listItemRootClass} file-success`}
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
