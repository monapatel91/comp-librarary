import React from 'react';
import { Typography } from '@material-ui/core';
import { useStylesWithRootClass } from '../../components/useStylesWithRootClass';
import { CommonProps } from '../../components/CommonProps';
import { DotLink } from '../../components/link/Link';
import { parseRevURL } from '../progression-board/parseRevURL';

export interface RevisionRangeLabelProps extends CommonProps {
  baseUrl: string;
  revFrom: number;
  revTo: number;
  revToId: string;
}

export const RevisionRangeLabel = ({
  baseUrl,
  className,
  'data-testid': dataTestId,
  revFrom,
  revTo,
  revToId,
}: RevisionRangeLabelProps) => {
  const rootClasses = useStylesWithRootClass('revision-range-label', className);
  const revisionRangeLabel = `${revFrom} - ${revTo}`;
  return (
    <div className={rootClasses} data-testid={dataTestId}>
      <Typography variant="body2">
        Revisions:
        <DotLink
          href={baseUrl + parseRevURL(revFrom, revToId)}
          rel="noreferrer"
          target="_blank"
          title={revisionRangeLabel}
        >
          {revisionRangeLabel}
        </DotLink>
      </Typography>
    </div>
  );
};
