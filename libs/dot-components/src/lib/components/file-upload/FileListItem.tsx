import React, { useState } from 'react';
import { useStylesWithRootClass } from '../useStylesWithRootClass';
import { CommonProps } from '../CommonProps';
import { DotIcon } from '../icon/Icon';
import { DotIconButton } from '../button/IconButton';
import { listItemRootClass, StyledListItem } from '../list/List.styles';
import { DotTypography } from '../typography/Typography';
import { fileClassName } from './FileUpload.styles';
import { FileRejection } from './uploadHelpers';

export interface FileItemProps extends CommonProps {
  deleteFile: (file: FileRejection) => void;
  error?: boolean;
  errorText?: string;
  file: FileRejection;
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
  const defaultIcon = error ? 'error-solid' : 'check-solid';
  const [endIcon, setEndIcon] = useState(defaultIcon);

  return (
    <StyledListItem
      aria-label={ariaLabel}
      className={rootClasses}
      data-testid={dataTestId}
      onMouseEnter={() => setEndIcon('delete')}
      onMouseLeave={() => setEndIcon(defaultIcon)}
    >
      <DotIcon iconId="file" />
      <div className="file-item-text">
        <DotTypography variant="body1">{file.file.path}</DotTypography>
        {error && <DotTypography variant="body2">{errorText}</DotTypography>}
      </div>
      <DotIconButton
        className={`${listItemRootClass}-end-icon`}
        iconId={endIcon}
        onClick={() => deleteFile(file)}
      />
    </StyledListItem>
  );
};
