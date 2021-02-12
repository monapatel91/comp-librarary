import React from 'react';
import { parseRevURL } from '../progression-board/PackageVersion';

export interface RevisionRangeLabelProps {
  baseUrl: string;
  revFrom: number;
  revTo: number;
  revToId: string;
}

export const RevisionRangeLabel = ({
  baseUrl,
  revFrom,
  revTo,
  revToId,
}: RevisionRangeLabelProps) => {
  const revisionRangeLabel = `${revFrom} - ${revTo}`;
  return (
    <div className="revision-range-label">
      Revisions:
      <a
        href={baseUrl + parseRevURL(revFrom, revToId)}
        target="_blank"
        title={revisionRangeLabel}
        rel="noreferrer"
      >
        {revisionRangeLabel}
      </a>
    </div>
  );
};

export default RevisionRangeLabel;
