import React, { ChangeEvent, useState } from 'react';
import { DotIcon, DotIconButton } from '@digital-ai/dot-components';
import { StyledFreeFormSearch, rootClassName } from './FreeFormSearch.styles';

export interface FreeFormSearchProps {
  className?: string;
  fullWidth?: boolean;
  minWidth?: number;
  onChange?: (value: string) => void;
  searchBy?: string;
  label?: string;
}

export const DotFreeFormSearch = ({
  className,
  fullWidth,
  label,
  onChange,
}: FreeFormSearchProps) => {
  const [searchValue, setSearchValue] = useState<string>('');

  const handleSearchChange = (value: string) => {
    setSearchValue(value);
    onChange && onChange(value);
  };

  return (
    <StyledFreeFormSearch
      className={`${rootClassName} ${className}`}
      size="small"
      fullWidth={fullWidth}
      startIcon={<DotIcon fontSize="small" iconId="search" />}
      endIcon={
        searchValue !== '' ? (
          <DotIconButton
            onClick={() => handleSearchChange('')}
            size="small"
            iconId="close"
          />
        ) : undefined
      }
      name="search-data"
      id="search-data"
      onChange={(event: ChangeEvent<HTMLInputElement>) =>
        handleSearchChange(event.currentTarget.value)
      }
      label={label}
      value={searchValue}
    />
  );
};
