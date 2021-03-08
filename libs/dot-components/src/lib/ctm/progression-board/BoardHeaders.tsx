import React from 'react';
import { Typography } from '@material-ui/core';
import { useStylesWithRootClass } from '../../components/useStylesWithRootClass';
import { CommonProps } from '../../components/CommonProps';

export interface BoardHeaderProps extends CommonProps {
  headers: Array<string>;
  isOffsetLeft?: boolean;
}

export const BoardHeaders = ({
  className,
  'data-testid': dataTestId,
  headers,
  isOffsetLeft = false,
}: BoardHeaderProps) => {
  const rootClasses = useStylesWithRootClass(
    'board-headers',
    className,
    isOffsetLeft ? 'translate-left' : ''
  );
  return (
    <div className={rootClasses} data-testid={dataTestId}>
      {headers.map((header, i) => (
        <div key={i} className="board-column-header">
          <Typography variant="h3">{header}</Typography>
        </div>
      ))}
    </div>
  );
};
